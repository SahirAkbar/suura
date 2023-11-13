const nodemailer = require('nodemailer');

// Function to send an email with the provided data
const sendEmail = (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'sahiritoo2015@gmail.com',
      pass: 'ozun vxxk taba mlxx',
    },
  });

  const mailOptions = {
    from: 'sahiritoo2015@gmail.com',
    to: to,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email sending failed: ' + error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = { sendEmail };
