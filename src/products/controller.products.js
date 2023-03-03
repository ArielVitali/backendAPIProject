const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "get products funciona" });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ message: `producto con el id : ${id}` });
});

router.post("/", (req, res) => {
  const {
    title,
    description,
    code,
    price,
    status,
    stock,
    category,
    thumbnails,
  } = req.body;

  const newProduct = {
    title,
    description,
    code,
    price,
    status,
    stock,
    category,
    thumbnails,
  };
  res.json({ newProduct });
});

router.put("/:pid", (req, res) => {
  const pid = req.params.pid;
  const parametrosAmodificar = req.body;
  res.json({ message: `producto con el id : ${pid} fue actualizado` });
});

router.delete("/:pid", (req, res) => {
  const pid = req.params.pid;
  res.json({ message: `producto con el id : ${pid} fue eliminado` });
});

module.exports = router;
