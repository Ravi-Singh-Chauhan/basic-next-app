import User from "@/models/userModel";
import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {
        //created hashed token
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);
        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpiry: Date.now() + 3600000,
            });
        } else if (emailType == "RESET") {
            await User.findByIdAndUpdate(userId, {
                forgetPasswordToken: hashedToken,
                forgetPasswordTokenExpiry: Date.now() + 3600000,
            });
            
        }
        console.log(Date.now() + 3600000);
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: process.env.MAILTRAP_USER,
                pass: process.env.MAILTRAP_PASS,
            },
        }); 
        const mailOptions = {
            from:"forallotherthingsha@gmail.com",
            to:email,
            subject: emailType==="VERIFY"?"Verify Your Email":"Reset your password",
            html:`<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}"> here </a> to ${emailType==="VERIFY"?"Verify Your Email":"Reset your password"} </p>`


        }
        const mailresponst = await transport.sendMail(mailOptions)
        return mailresponst
    } catch (error: any) {
        throw new Error(error.message);
    }
};
