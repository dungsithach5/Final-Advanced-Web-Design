// backend/server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import foodRoute from './routes/foodRoute.js';
import appetizersRoute from './routes/appetizersRoute.js';
import beveragesRoute from './routes/beveragesRoute.js';
import dessertsRoute from './routes/dessertsRoute.js';
import reservationRoute from './routes/reservationRoute.js';

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Connect email service
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
});

// Send email
function sendEmail(toEmail) {
    const mailOptions = {
        from: 'dungsithach8@gmail.com',
        to: toEmail, 
        subject: 'Thông báo tự động', 
        text: 'Chào bạn, đây là email tự động từ hệ thống của chúng tôi.'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Lỗi khi gửi email: ', error);
        } else {
            console.log('Email đã được gửi: ' + info.response);
        }
    });
}

// Route send email
app.post('/send-email', (req, res) => {
    const { email } = req.body;
    if (email) {
        sendEmail(email);
        res.status(200).send({ message: `Email đã được gửi đến ${email}` });
    } else {
        res.status(400).send({ error: 'Vui lòng cung cấp email.' });
    }
});

// Routes
app.use('/api/foods', foodRoute);
app.use('/api/appetizers', appetizersRoute);
app.use('/api/beverages', beveragesRoute);
app.use('/api/desserts', dessertsRoute);
app.use('/api/reservation', reservationRoute);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
