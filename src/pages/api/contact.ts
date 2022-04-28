import { NextApiHandler } from "next";
import { createTransport } from "nodemailer";
import { ContactFormData } from "../../components/ContactForm";

const transporter = createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
    ciphers: "SSLv3",
  },
});

const handler: NextApiHandler = async (req, res) => {
  return new Promise((resolve) => {
    const reqData = JSON.parse(req.body) as ContactFormData;

    const mailOptions = {
      from: `"Someone contacted you via your website." <${process.env.EMAIL_USERNAME}>`,
      to: "timbusiness.work07@gmail.com",
      subject: `Portfolio contact message`,
      html: `
User Info:
  - name: ${reqData.name}
  - email: ${reqData.email}
Message：
${reqData.message}
`,
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.log({ err });
        res.status(500).send({
          message: `Error: ${err}`,
          code: "contact/failure",
        });
        return resolve();
      } else {
        console.log("Mail sent.");
        res.status(200).send({
          message: "Thank you for contacting us!",
          code: "contact/success",
        });
        return resolve();
      }
    });
  });
};

export default handler;
