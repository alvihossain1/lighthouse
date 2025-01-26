const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const stripe = require('stripe')(`${process.env.STRIPE_ID}`);
const SERVER_URL = process.env.SERVER_URL;
const CLIENT_URL = process.env.CLIENT_URL;

exports.payStripe = async (req, res, next) => {
    const { emailProducts: products, user, order } = req?.body

    try{
        const myLineItems = products.map((product => {
            let url = product.image
            let newUrlArr = url.split('/')
            newUrlArr = newUrlArr.slice(3)
            url = `https://lighthousebd.shop/${newUrlArr.join('/')}`
            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: product.name,
                        images: [url],
                        description: `${product?.variantType}: ${product.variantName}`,
                        metadata: {
                            id: product.productId
                        }
                    },
                    unit_amount: parseFloat(product.itemPrice) * 100,
                },
                quantity: product.quantity,
            }
        }))
        let discounts = []
        // if(order.discountFee > 0){
        //     const coupon = await stripe.coupons.create({
        //         amount_off: parseFloat(order.discountFee),
        //         currency: 'usd',
        //     });
        //     discounts = [{ coupon: coupon} ]
        // }
        const session = await stripe.checkout.sessions.create({
            line_items: myLineItems,
            client_reference_id: user?.userId,
            customer_email: user?.email,
            metadata: {
                userId: user?.userId,
                email: user?.email,
                products: JSON.stringify(products.map(product => product.productId)),
            },
            discounts: discounts,
            shipping_options: [
                {
                    shipping_rate_data: {
                        type: 'fixed_amount',
                        display_name: `Shipping ${order.deliveryFee} + Additional Charge ${order.additionalFee}`,
                        fixed_amount: {
                            amount: parseFloat(order.deliveryFee + order.additionalFee) * 100,
                            currency: 'usd',
                        },
                        delivery_estimate: {
                            minimum: {
                                unit: 'business_day',
                                value: 3,
                            },
                            maximum: {
                                unit: 'business_day',
                                value: 5,
                            },
                        },
                    },
                },
            ],
            mode: 'payment',
            success_url: `${CLIENT_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${CLIENT_URL}/payment/failed?session_id={CHECKOUT_SESSION_ID}`,
        });
        console.log("STRIPE SESSION", session)
        res.send({ status: 200, url: session.url, transactionId: session.id })
    
        const responsedb = await prisma.orderTransaction.create({
            data: {
                transactionId: session.id,
                data: JSON.stringify(req.body),
                paymentMethod: 'Stripe',
            }
        })       
    }
    catch (error) {
        console.log("Error", error)
    }
    finally {
        await prisma.$disconnect()
    }





}

exports.retrieveSession = async () => {
    let sessionId = 'cs_test_b14qRcrrJVBSw1VD245HtuxFkMc7T1Pilxt3qO2J78PaGKeWnXgGncGsL9'; // LATEST
    // sessionId = 'cs_test_b1VRylK5ZSrJvc4OJAUCthZ7xeSWSNCIjWelViKjPJdGKNtqOlHVXo6VF2';

    try{
        const session = await stripe.checkout.sessions.retrieve(
            sessionId
          );
    
          console.log("STRIPE RETRIEVE SESSION", session)
    }
    catch(error){
        console.log("Error", error)
    }
}