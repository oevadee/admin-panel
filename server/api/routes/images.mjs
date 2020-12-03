import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import Image from "../models/image.mjs";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  dest: "uploads/",
});

// Handle incoming GET requests to /images
router.get("/", (req, res, next) => {
  Image.find()
    .select("_id image")
    .exec()
    .then((docs) => {
      console.log(docs);
      const response = {
        count: docs.length,
        images: docs.map((doc) => {
          return {
            _id: doc._id,
            image: doc.image,
            request: {
              type: "GET",
              url: "http://localhost:8080/images/" + doc._id,
            },
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

router.post("/", upload.single("image"), (req, res, next) => {
  const image = new Image({
    _id: new mongoose.Types.ObjectId(),
    image: req.file.path,
  });
  image
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Image stored",
        createdOrder: {
          _id: result._id,
          image: result.image,
        },
        request: {
          type: "GET",
          url: "http://localhost:8080/images/" + result._id,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

export default router;
