const express = require("express");
const mongoose = require("mongoose");
const { hashGenerator, hashValidate } = require("./hashing.js");
const User = require("./models/user");
const OTP = require("./models/otp.js");
require("dotenv").config();
const cors = require("cors");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5002;

app.listen(port, () => {
    console.log(`Server is running in ${port}`);
});

mongoose
    .connect(process.env.CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Successfully connected");
    })
    .catch((error) => {
        console.log("Error: ", error);
    });

app.get("/", (req, res) => {
    console.log("App is calling");
    res.send("App is running");
});

app.post("/api/signup", async (req, res) => {
    try {
        const { fullname, email, password, mobileNumber } = req.body;
        const hashedPassword = await hashGenerator(password);
        const user = await User.create({
            fullname,
            email,
            password: hashedPassword,
            mobileNumber,
        });
        res.status(200).json(user);
        console.log("Successfully posted: ", user);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log("Error in post: ", error.message);
    }
});

app.post("/api/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email }).exec();
        if (!existingUser) {
            res.status(404).json("Email ID not found");
            return;
        }

        const isPasswordMatches = await hashValidate(
            password,
            existingUser.password
        );

        if (!isPasswordMatches) {
            res.status(500).json("Password doesnot Match");
            return;
        }

        res.status(200).json("User Verified");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post("/api/generate-otp", async (req, res) => {
    const { email } = req.body;

    const existingUser = await User.findOne({ email }).exec();

    if (!existingUser) {
        res.status(404).json("Email ID not found");
        return;
    }

    const otp = otpGenerator.generate(4, {
        digits: true,
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
    });

    try {
        await OTP.create({ email, otp });
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.ADMIN_MAIL,
                pass: process.env.ADMIN_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: "noreplyinrdeveloper@gmail.com",
            to: email,
            subject: "OTP Verification",
            text: `Kindly verify yourself with the OTP: ${otp} `,
        });

        res.status(200).json("OTP send Successfully");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post("/api/verify-otp", async (req, res) => {
    const { email, otp } = req.body;
    try {
        const isOTPfound = await OTP.findOne({ email, otp });
        if (isOTPfound) {
            res.status(200).json("OTP verified");
        } else {
            res.status(400).json("Invalid OTP");
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.put("/api/reset-password", async (req, res) => {
    try {
        const { email, newPassword } = req.body;
        console.log(req.body);
        const hashedPassword = await hashGenerator(newPassword);
        const updatedUser = await User.updateOne(
            { email: email },
            { $set: { password: hashedPassword } }
        );
        console.log(updatedUser);
        res.status(200).json("Password Updated");
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
});
