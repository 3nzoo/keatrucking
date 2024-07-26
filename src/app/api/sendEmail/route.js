import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASS
      }
    })

    const mailOption = {
      from: process.env.ZOHO_EMAIL,
      to: process.env.CONTACT_EMAIL,
      subject: "Keatrucking Contact form submission",
      html: `
        <h3>Hello KEATrucking Corp</h3>
        <li> name: ${name}</li>
        <li> email: ${email}</li>
        <li> message: ${message}</li> 
        `
    }
    await transporter.sendMail(mailOption)

    return NextResponse.json({ message: "Email Sent Successfully", success: true }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Failed to Send Email", error: true }, { status: 500 })
  }
}