const otpGenerator = require('otp-generator');

// Function to generate a 6-digit OTP
const generateOTP = () => {
  return otpGenerator.generate(6, { upperCase: false, specialChars: false });
};

module.exports = { generateOTP };
