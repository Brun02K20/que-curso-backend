import express from "express";
import { emailServices } from "../services/email.service.js";
const router = express.Router();

router.post("", async (req, res, next) => {
    try {
        const seEnvio = await emailServices.enviarEmail(req.body)
        if (seEnvio) {
            return res.status(200).json({ exito: "El mail se envio correctamente" })
        } else {
            res.status(400).json({ error: "Ups, parece que pasó algo" })
        }
    } catch (error) {
        next(error)
    }
})

const emailRouter = { router }
export { emailRouter }
