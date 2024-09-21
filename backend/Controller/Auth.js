const bcrypt = require("bcrypt");
const { User } = require("../Model/User");
const jwt = require("jsonwebtoken");

const SECRET_KEY = 'your_secret_key';
const crypto = require("crypto");
const nodemailer = require("nodemailer");


exports.CreateUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(208).json({ message: "User Already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ ...req.body, password: hashedPassword });

    await user.save();
    res.status(201).json({
      message: "User Created Successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ error: "Something Went Wrong", success: false });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid Username Or Password",
        success: false,
      });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Invalid Username or Password", success: false });
    }

    const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
      expiresIn: "5h",
    });
    res.json({
      message: "Logged In Successfully",
      success: true,
      token: token,
      data: user,
    });
  } catch (error) {
    res.status(500).json({ error: "Something Went Wrong", success: false });
  }
};

const logOut = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged Out Successfully", success: true });
};

const sendEmail = (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "abichal@1234gmail.com",
      pass: "alphabet783", //random password
    },
  });
  const mailOptions = {
    from: "your-email@gmail.com",
    to:email,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Email sent: " + info.response);
  });
};

exports.ResetPasswordRequest = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
    user.resetPasswordToken = otp;
    user.resetPasswordExpires = Date.now() + 10 * 60 * 1000; // 10 minutes expiry
    await user.save();

    sendOTP(email, otp);

    res.status(200).json({ message: "OTP sent to your email", success: true });
  } catch (error) {
    res.status(500).json({ error: "Internal server error", success: false });
  }
}

exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({
      email,
      resetPasswordToken: otp,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }

    res.status(200).json({ message: 'OTP verified, proceed to reset password' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.resetPassword = async (req, res) => {
  const { email, otp, password } = req.body;

  try {
    const user = await User.findOne({
      email,
      resetPasswordToken: otp,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;
    await user.save();

    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }};
