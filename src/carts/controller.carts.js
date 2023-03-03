const { Router } = require("express");

const router = Router();

router.post("/", (req, res) => {
  const { products } = req.body;
  const newCart = {
    products,
  };
  res.json({ newCart });
});

router.get("/:cid", (req, res) => {
  const cid = req.params.cid;
  res.json({ message: `carrito con el id : ${cid}` });
});

router.post("/:cid/product/:pid", (req, res) => {
  const cid = req.params.cid;
  const pid = req.params.pid;
  res.json({
    message: `producto con el id : ${pid} fue agregado al carrito con el id : ${cid}`,
  });
});

module.exports = router;
