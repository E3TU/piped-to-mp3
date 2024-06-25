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
  const file: any = req.file.buffer;
  const fileContent: string = file.toString("utf-8");

  const lines: any = fileContent.split("\n");

  const pipedLink: string = "https://piped.video/watch?v=";

  for (let i: number = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    // console.log(line);
    if(line.includes(pipedLink)) {
      console.log("Ok");
      break;
    }
    else{
      console.log("File needs to contain piped links");
      break;
    }
  }
  
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
