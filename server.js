const express = require("express");
const router = express.Router();
const cors = require("cors"); 
const nodemailer = require("nodemailer");
require('dotenv').config();

const app = express();
app.use(cors()); 
app.use(express.json());
app.use("/", router);

<<<<<<< HEAD
const port = 5000; 
=======
const port = 5000;
>>>>>>> aa374a7c5a445a013e1aa00f42cd780ac92e12f3
app.listen(port, () => console.log(`Server Running on port ${port}`));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName +" "+ req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "userr90907@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ code: 500, status: "Message not Sent", error }); // Sending error response
    } else {
      res.json({ code: 200, status: "Message Sent" }); // Sending success response
    }
  });
});
