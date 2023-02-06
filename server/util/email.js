const nodemailer = require('nodemailer');

async function sendMail({ sendTo, title, author, fileUrl }) {
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.GOOGLE_EMAIL_SENDER || '',
            pass: process.env.GOOGLE_APP_PASSWORD || ''
        },
    });

    const mailOptions = {
        from: `Soul-Sci <${process.env.GOOGLE_EMAIL_SENDER}>`,
        to: sendTo,
        subject: `Check it out, your paper is ready!"`,
        html: generateEmail({
            title: title,
            author: author,
            paperUrl: fileUrl,
        }),
    }

    transporter.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error)
            throw Error('Something were wrong sending the email')
        } else {
            console.log("Message sent: ", response);
            return { success: true }
        }
    });
}

function generateEmail({ title, author, paperUrl }) {
    let headline = `
            <tr>
                <h2 style="text-align: center;">
                    Well done, Contributor!
                </h2>
                <p style="font-weight: 300; text-align: center;">Through your efforts, you are building a better future for all and creating a lasting legacy of positive change 🧙🏼‍♂️.</p>
            </tr>`;

    return `
        <html>
            <head>
                <style type="text/css">
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Open+Sans:wght@300;500;700&display=swap');

                    table,
                    td {
                        mso-table-lspace: 0;
                        mso-table-rspace: 0;
                    }
                
                    table {
                        border-collapse: collapse !important;
                    }
                
                    body {
                        font-family: 'Open Sans', sans-serif;
                    }
                
                    p {
                        font-weight: 500;
                        vertical-align: middle;
                    }
                
                    h2 {
                        font-weight: 700;
                    }

                    .button {
                        background-color: #1A56DB;
                        border: none;
                        padding: 15px 32px;
                        text-align: center;
                        text-decoration: none;
                        display: inline-block;
                        font-size: 16px;
                        border-radius: 0.375rem;
                        color: white!important;
                        font-weight: 600;
                        margin-top: 8px;
                    }

                    .paddingLeft{
                        padding-left : 8px;
                    }
                </style>
            </head>
                
            <body>
                <table style="width: 600px; margin: 0 auto; text-align: center;">
                    ${headline}
                    <tr>
                        <td valign="middle">
                            <table>
                                <tr>
                                    <td>
                                        <img src="https://gateway.lighthouse.storage/ipfs/QmWMmvxFgfnHFBdPTDMJCU7pG6scoic9nfUmajix9aBF4K" width="32px"
                                            height="32px" alt="Title" />
                                    </td>
                                    <td>
                                        <p class="paddingLeft">${title}</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td valign="middle">
                            <table>
                                <tr>
                                    <td>
                                        <img src="https://gateway.lighthouse.storage/ipfs/QmNTkjE4AetkQ3QJekzotTx6msSMisY7Cn2yfAkWosiTFs" width="32px"
                                            height="32px" alt="Author" />
                                    </td>
                                    <td>
                                        <p class="paddingLeft">${author}</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="button" href='${paperUrl}' target='_blank'>Review your paper<a/>
                        </td>
                    </tr>
                </table>
                
            </body>
        </html>
    `
}

module.exports = {
    sendMail
}