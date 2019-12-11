const {Router} = require("express");
const nodemailer = require("nodemailer");
const router = Router();

//* routes
router.post("/send-email", async (req, res) => {
  const {name, email, phone, message} = req.body;

  contentHTML =
    //html
    `
        <h1>User information</h1>
        <ul>
            <li>${name}</li>
            <li>${email}</li>
            <li>${phone}</li>
        </ul>
        <p>${message}</p>
    `;

  const transporter = nodemailer.createTransport({
    host: "name of host",
    port: "number of port ",
    secure: "if is secure",
    auth: {
      user: "your user autentification",
      pass: "your password"
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const info = await transporter.sendMail({
    from: "Mail Example",
    to: "destinatary",
    subject: "whatever you want",
    html: contentHTML
  });

  console.log("Messaged send", info.messageId);
  res.redirect("/success.html");
});

module.exports = router;
