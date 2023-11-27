import nodemailer from "nodemailer"

export interface IEmailSender {
    from: string
    to: string
    subject: string
    text?: string
    html?: string
}

/**
 * 邮件发送函数
 * @param IEmailSender
 * @returns
 */
export const sendMail = async ({
    from,
    to,
    subject,
    text,
    html,
}: IEmailSender) => {
    const host = process.env.EMAIL_SENDER_HOST
    const port = process.env.EMAIL_SENDER_PORT
    const user = process.env.EMAIL_SENDER_USER
    const pass = process.env.EMAIL_SENDER_PASSWORD

    if (!host || !user || !pass) {
        throw new Error("Set environment variable for email first!")
    }

    const transporter = nodemailer.createTransport({
        host,
        port: 465 || port,
        secure: true,
        auth: {
            user,
            pass,
        },
    })

    // TODO 对返回值进行处理
    return await transporter.sendMail({
        from,
        to,
        subject,
        text,
        html,
    })
}
