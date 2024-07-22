const nodemailer = require("nodemailer");
import { EMAIL } from "@/config";
import { PASS } from "@/config";

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL,
        pass: PASS
    },
    tls: {
        rejectUnauthorized: false,
    },
});

export default transporter;

