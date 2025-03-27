const transporter = require("../config/emailConfig");
const path = require("path");

const sendEmail = async (req, res) => {
  try {
    const { userName, email } = req.body;

    if (!userName || !email) {
      return res.status(400).json({ message: "User Name and Email are required" });
    }

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Welcome to the Email Notification System",
      html: `
        <p>Hi <strong>${userName}</strong>,</p>
        <p>Welcome to our Notification System!</p>
        <p>This is a test email to verify that your Nodemailer setup is working correctly.</p>
        <p>Please find the attached <strong>Holiday Calendar</strong> for reference.</p>
        <br/>
        <p>Best Regards,<br/>Kartikey Shrivastav</p>
      `,
      attachments: [
        {
          filename: "Holiday_Calendar.pdf",
          path: path.join(__dirname, "../../uploads/Holiday_Calendar.pdf"),
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email", error });
  }
};

module.exports = { sendEmail };
