exports.orderTemplate = ({user, order, products}) => {

  const randomImage = 'https://diadye.com/wp-content/uploads/2022/12/Gloss-Shopping-Euro-Tote-Bags-1.jpg'
  let table = ''
  products.forEach((product) => {
      table += `
      <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
                  <tbody style="width:100%">
                    <tr style="width:100%">
                      <td data-id="__react-email-column" style="text-align:center;display:flex;justify-content:center"><img alt="product" height="100" src="${randomImage}" style="object-fit:cover;object-position:center;display:block;outline:none;border:none;text-decoration:none" width="100" /></td>
                      <td data-id="__react-email-column" style="width:25%;text-align:center">
                        <p style="font-size:14px;line-height:24px;margin:16px 0">${product.variantName}</p>
                      </td>
                      <td data-id="__react-email-column" style="width:25%;text-align:center">
                        <p style="font-size:14px;line-height:24px;margin:16px 0">${product.quantity}</p>
                      </td>
                      <td data-id="__react-email-column" style="width:25%;text-align:center">
                        <p style="font-size:14px;line-height:24px;margin:16px 0">${product.name}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr style="border-top-width:1px;border-color:rgb(71,85,105);width:100%;border:none;border-top:1px solid #eaeaea" />
      `
  })

  return `
  
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><!--$-->

<head>
<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
<meta name="x-apple-disable-message-reformatting" />
<style>
  @font-face {
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 400;
    mso-font-alt: 'Verdana';
    src: url(https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap) format('woff2');
  }

  * {
    font-family: 'Outfit', Verdana;
  }
</style>
<style>
  @media(min-width:768px) {
    .md_text-lg {
      font-size: 1.125rem !important;
      line-height: 1.75rem !important
    }

    .md_pr-5 {
      padding-right: 1.25rem !important
    }
  }
</style>
</head>

<body style="background-color:rgb(243,244,246);padding-top:2.5rem;padding-bottom:2.5rem">
<table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:720px;overflow:hidden;background-color:rgb(248,250,252);border-width:2px;border-color:rgb(15,23,42);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 4px 6px -1px rgb(0,0,0,0.1), 0 2px 4px -2px rgb(0,0,0,0.1);border-radius:0.5rem">
  <tbody>
    <tr>
      <td>
        <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="height:12rem;width:100%;background-color:rgb(51,65,85);color:rgb(226,232,240);text-align:center">
          <tbody>
            <tr>
              <td>
                <p style="font-weight:500;font-size:1.875rem;line-height:2.25rem;margin:16px 0">Light House BD</p>
              </td>
            </tr>
          </tbody>
        </table>
        <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:1.25rem;height:16rem;text-align:center">
          <tbody>
            <tr>
              <td>
                <h2>Hello ${user.name}</h2>
                <p style="font-size:1.25rem;line-height:1.75rem;font-weight:500;margin:16px 0">Thank you for placing your order</p>
                <p style="font-size:1.125rem;line-height:1.75rem;font-weight:500;margin:16px 0">Your order no. is ${order.orderId}</p>
              </td>
            </tr>
          </tbody>
        </table>
        <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="background-color:rgb(255,255,255);padding:1.25rem;overflow:hidden">
          <tbody>
            <tr>
              <td>
                ${table}
              </td>
            </tr>
          </tbody>
        </table>
        <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:1.25rem;height:7vh">
          <tbody>
            <tr>
              <td>
                <p class="md_text-lg md_pr-5" style="font-size:1rem;line-height:1.5rem;text-align:end;margin:16px 0">Total Price: ${order.totalPrice}</p>
              </td>
            </tr>
          </tbody>
        </table>
        <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:1.25rem;height:12rem;text-align:center">
          <tbody>
            <tr>
              <td>
                <p style="text-align:center;font-size:14px;line-height:24px;margin:16px 0">To view more details about your order you can track it from our website</p><a href="https://www.google.com.bd" class="hover:bg-purple-600" style="padding-top:0.75rem;padding-bottom:0.75rem;padding-left:2.5rem;padding-right:2.5rem;font-size:1rem;line-height:1.5rem;font-weight:500;background-color:rgb(51,65,85);color:rgb(226,232,240);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 4px 6px -1px rgb(0,0,0,0.1), 0 2px 4px -2px rgb(0,0,0,0.1);border-radius:0.5rem;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms;text-decoration:none;display:inline-block;max-width:100%;mso-padding-alt:0px;cursor:pointer;padding:12px 40px 12px 40px" target="_blank"><span><!--[if mso]><i style="mso-font-width:500%;mso-text-raise:18" hidden>&#8202;&#8202;&#8202;&#8202;</i><![endif]--></span><span style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:9px">Track here</span><span><!--[if mso]><i style="mso-font-width:500%" hidden>&#8202;&#8202;&#8202;&#8202;&#8203;</i><![endif]--></span></a>
              </td>
            </tr>
          </tbody>
        </table>
        <hr style="border-width:1px;border-color:rgb(71,85,105);width:100%;border:none;border-top:1px solid #eaeaea" />
        <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:1.25rem;height:10rem;text-align:center">
          <tbody>
            <tr>
              <td>
                <p style="font-size:0.75rem;line-height:1rem;margin:16px 0">Lighthousebd</p>
                <p style="font-size:0.75rem;line-height:1rem;margin:16px 0">Nawabpur, Dhaka, 1000, Bangladesh</p>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
</body><!--/$-->
  

  `
}