import fs from "fs";
import ytdl from "ytdl-core";
import express, { Express, Request, Response } from "express";
import cors from "cors";


let url: string = "https://youtube.com/watch?v=XW6-00SqPHM";

// ytdl(url, {filter: "audioonly", quality: "highest" })
//     .pipe(fs.createWriteStream("video.mp3"));

const app: Express = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.get("/test", (req: Request, res: Response) => {
  res.send({ hello: "Hello world" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
