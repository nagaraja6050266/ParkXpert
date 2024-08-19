const mongoose = require("mongoose");

const OTPSchema = mongoose.Schema({
    email: String,
    otp: String,
    createdAt: {
        type: Date,
        expires: "5m",
        default: Date.now,
    },
});

const OTP = mongoose.model("OTP", OTPSchema);

module.exports = OTP;
