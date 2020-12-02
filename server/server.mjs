import express from "express";
import multer from "multer";
import mongoose from "mongoose";
import Form from "./models/form.mjs";

mongoose.connect(
  "mongodb+srv://admin:admin@admin-panel-app.pz94t.mongodb.net/image-app-backend?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  dest: "uploads/",
});

const app = express();
const port = process.env.PORT || 8080;

//Middlewares
app.use("/uploads", express.static("uploads"));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Orifin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE");
    return res.status(200).json({});
  }
  next();
});

app.get("/", (req, res) => {
  res.send("Hello ");
});

app.post("/profile", upload.single("image"), (req, res) => {
  console.log(req.body);
  // console.log(req.file);
  const form = new Form({
    _id: new mongoose.Types.ObjectId(),
    image: req.file.path,
  });
  form
    .save()
    .then((result) => {
      // console.log(result._id, result/image);
      res.status(201).json({
        info: "Image was send to the server",
        data: {
          _id: result._id,
          image: result.image,
        },
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        err: err
      })
    });
});

app.get("/profile", (req, res) => {
  // console.log(req.body);
});

app.listen(port, () => console.log(`Demon słucha na: ${port}`));
