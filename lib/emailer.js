const nodemailer = require("nodemailer");
const { orderTemplate } = require("./orderTemplate");

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "alvinoorhossain11@gmail.com",
      pass: "ewub hzzl xceg cxau",
    },
  });

  function generateHTML(user){
    return `
            <h1>Hey There ${user?.name}!</h1>
            <h3>Thank you for placing your order from LightHouseBD.</h3>
            <p>Your Order number is ${user?.orderId}.</p>
            <p>You can track your order from our website: <a>lighthousebd.shop</a> </p>
            <p>Stay tuned to us and keep track of our latest products, Thank you. </p>
    `
  }

// async..await is not allowed in global scope, must use a wrapper
async function main({user, order, products}) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'alvinoorhossain11@gmail.com', // sender address
    to: user?.email || "alvinoorhossain11@gmail.com", // list of receivers
    subject: `Order placed`, // Subject line
    // text: "Hello world, this should be typically a long text to see if you are viewing the email", // plain text body
    html: orderTemplate({user, order, products}), // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

exports.sendMail = ({user, order, products}) => {
    main({user, order, products}).catch(console.error);
}