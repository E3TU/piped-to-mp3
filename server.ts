import fs from "fs";
import ytdl from "ytdl-core";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import multer from "multer";

const app: Express = express();
const upload = multer({ storage: multer.memoryStorage() });


// let url: string = "https://youtube.com/watch?v=XW6-00SqPHM";

// ytdl(url, {filter: "audioonly", quality: "highest" })
//     .pipe(fs.createWriteStream("video.mp3"));

app.use(cors());
app.use(express.json());


const port = process.env.PORT || 3000;

app.post("/upload", upload.single("file"), (req: Request, res: Response) => {
  const file = req.file.buffer;
  const fileContent = file.toString("utf-8");
  console.log(fileContent);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
