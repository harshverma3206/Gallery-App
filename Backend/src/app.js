const express = require("express");
const multer = require("multer");
const app = express();
const uploadFile = require("./services/storage.service");
const cors = require("cors");

const upload = multer({ storage: multer.memoryStorage() });

const postModel = require("./models/post.model");

app.use(cors());
app.use(express.json());

app.post("/create-post", upload.single("image"), async (req, res) => {
    const result = await uploadFile(req.file.buffer);
    await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    res.status(201).json({
        message: "Post Created",
        result
    })
})

app.get("/", async (req, res) => {
    const data = await postModel.find();
    res.status(200).json({
        message: "fetched",
        data
    })
})

app.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await postModel.findOneAndDelete({
        _id: id
    })
    res.status(200).json({
        message: "Deleted"
    })
})

module.exports = app;