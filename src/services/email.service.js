import { Resend } from 'resend';
// configurar dotenv
import dotenv from "dotenv"
dotenv.config()

const resend = new Resend(process.env.API_KEY);

const enviarEmail = async (body) => {
    const { data, error } = await resend.emails.send({
        from: 'Que curso <onboarding@resend.dev>',
        to: ["bvirinni@gmail.com", "encontrar_liendojuanesteban@outlook.com"],
        subject: body.nombre,
        html: `<strong>${body.resena}</strong>`,
    });

    console.log("datos: ", data)
    console.log("errores: ", error)

    if (error) {
        return false
    }

    return true
}

const emailServices = {
    enviarEmail
}

export { emailServices }