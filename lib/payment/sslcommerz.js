const prisma = require("../../utils/prisma")
const { v4: uuidv4 } = require('uuid');
const SSLCommerzPayment = require('sslcommerz-lts')
const SERVER_URL = process.env.SERVER_URL;
const CLIENT_URL = process.env.CLIENT_URL;
const store_id = process.env.SSL_STORE_ID
const store_password = process.env.SSL_STORE_PASS
const is_live = false //true for live, false for sandbox

exports.paySSLCommerz = async (req, res, next) => {
    const { emailProducts: products, user, order } = req?.body

    try {
        const { totalPrice } = order
        // console.log("USER", user)
        // console.log("ORDER", user)
        const trans_id = "sslcommerz-" + uuidv4() + "-" + Date.now()
        const data = {
            total_amount: totalPrice,
            currency: 'USD',
            tran_id: trans_id, // use unique tran_id for each api call
            success_url: `${SERVER_URL}/api/payment/success/${trans_id}`,
            fail_url: `${SERVER_URL}/api/payment/failed/${trans_id}`,
            cancel_url: `${SERVER_URL}/api/payment/failed/${trans_id}`,
            ipn_url: 'http://localhost:3001/ipn',
            shipping_method: 'Courier',
            product_name: 'Items',
            product_category: 'Electronic',
            product_profile: 'general',
            cus_name: user.name,
            cus_email: user.email,
            cus_add1: user.address,
            cus_add2: 'Dhaka',
            cus_city: 'Dhaka',
            cus_state: 'Dhaka',
            cus_postcode: '1000',
            cus_country: 'Bangladesh',
            cus_phone: user?.phone || '',
            cus_fax: '',
            ship_name: "shipping name",
            ship_add1: order?.deliveryAddress || '',
            ship_add2: '',
            ship_city: 'Dhaka',
            ship_state: user.city || '',
            ship_postcode: 1000,
            ship_country: 'Bangladesh',
        };
        const sslcz = new SSLCommerzPayment(store_id, store_password, is_live)
        sslcz.init(data).then(apiResponse => {
            // Redirect the user to payment gateway
            console.log("API RESPONSE SSLCOMMERZ -- ", apiResponse)
            let GatewayPageURL = apiResponse.GatewayPageURL
            console.log('Redirecting to: ', GatewayPageURL)
            res.send({ status: 200, url: GatewayPageURL, transactionId: trans_id })
        });


        const responsedb = await prisma.orderTransactions.create({
            data: {
                transactionId: trans_id,
                data: JSON.stringify(req.body),
                paymentMethod: 'sslcommerz',
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


exports.sslCommerzPaymentCheck = async (req, res) => {
    const { status, trans_id } = req.params
    try {
        console.log("SSL RESPONSE", req.body)
        if (req.body) {
            const response = await prisma.orderTransactions.update({
                where: { transactionId: trans_id },
                data: { paymentConfirmData: JSON.stringify(req.body) }
            })
        }
    }
    catch (error) {
        console.log("Error", error)
    }
    finally {
        res.redirect(`${CLIENT_URL}/payment/${status}?session_id=${trans_id}`)
        await prisma.$disconnect()
    }
}

exports.retrieveSessionSSL = (req, res) => {
    // const idx = '5954074E66A3CB22E8135127AF8DFDC1';
    const data = {
        val_id: '250103234322UdSonGsIONXyiuZ' //that you go from sslcommerz response
    };
    const sslcz = new SSLCommerzPayment(store_id, store_password, is_live)
    sslcz.validate(data).then(data => {
        //process the response that got from sslcommerz 
        // https://developer.sslcommerz.com/doc/v4/#order-validation-api
        console.log("SSL SESSION CHECK", data)
    });
}