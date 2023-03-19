import { NextApiHandler } from "next";
import { createTransport } from "nodemailer";
import { ContactFormData } from "../../components/ContactForm";
import { withMethodGuard } from "../../lib/middlewares/methodGuard";

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
  return new Promise<void>((resolve) => {
    const reqData = JSON.parse(req.body) as ContactFormData;

    const mailOptions = {
      from: `"Email Bot" <${process.env.EMAIL_USERNAME}>`,
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
        res.status(500).send({
          message: `${err}`,
          code: "contact/failure",
        });
        return resolve();
      } else {
        res.status(200).send({
          message: "Thank you for contacting us!",
          code: "contact/success",
        });
        return resolve();
      }
    });
  });
};

export default withMethodGuard(handler, "POST");
