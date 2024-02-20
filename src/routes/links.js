const { Router } = require("express");
const { whatsapp } = require("../lib/whatsapp");
const router = Router();

router.post("/enviarMensaje", async (req, res) => {
  const tel = '+5493515123347'
  const chatId = tel.substring(1) + "@c.us";
  const number_details = await whatsapp.getNumberId(chatId);
  if (number_details) {
    const mensaje = "Eureca!!";
    await whatsapp.sendMessage(chatId, mensaje);
    res.json({ res: true });
  } else {
    res.json({ res: false });
  }
});

module.exports = router;
