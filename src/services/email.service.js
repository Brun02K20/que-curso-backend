import { Resend } from 'resend';
// configurar dotenv
import dotenv from "dotenv"
dotenv.config()

const resend = new Resend(process.env.API_KEY);

const enviarEmail = async (body) => {
    const { data, error } = await resend.emails.send({
        from: 'Que curso <onboarding@resend.dev>',
        to: [process.env.EMAIL],
        subject: body.nombre,
        html: `<p>El usuario ${body.nombre} nos dió una calificación de ${body.stars} estrellas y nos dió las siguientes sugerencias: ${body.resena}</p>`,
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