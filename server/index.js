import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,     
    pass: process.env.EMAIL_PASS      
  }
})

app.post('/api/contact', async (req, res) => {
  const { fullName, email, message } = req.body

  if (!fullName || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  try {
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`, 
      to: process.env.EMAIL_RECEIVER, 
      subject: `New Contact from ${fullName}`,
      replyTo: email,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Description:</strong><br>${message}</p>
      `
    })

 
    res.status(200).json({ success: true, message: 'Email sent successfully' })

  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false, error: 'Failed to send email' })
  }
})


app.listen(5000, () => {
  console.log('Server running on port 5000')
})
