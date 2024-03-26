import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    const htmlResponse = '<html><head><title>Backend</title></head><body>Para probar la API</body></html>';
    res.send(htmlResponse);
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en: http://localhost:${PORT}`);
});