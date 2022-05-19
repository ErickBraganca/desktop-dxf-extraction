import fs from "fs";
import { generators } from "./generators";

const { dialog } = require("@electron/remote");

let files = null;
//Setting parser index codes
const index = ["35001", "35002", "35003", "34001", "34005", "34006", "34007"];
let dbParser = [];

const rawDate = new Date();
const newDate = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "short",
  timeStyle: "short",
}).format(rawDate);

async function uploadFile(callback) {
  dialog
    .showOpenDialog({
      title: "Upload Attachments",
      buttonLabel: "Upload",
      filters: [
        { name: "DXF Files", extensions: ["dxf"] },
        { name: "Text Files", extensions: ["txt"] },
        { name: "All Files", extensions: ["*"] },
      ],
      properties: ["openFile"],
    })
    .then((file) => {
      const filePath = file.filePaths[0];
      const pathArray = filePath.split("\\");
      const newFile = {
        name: pathArray[pathArray.length - 1],
        path: filePath,
        date: newDate,
      };
      files = newFile;
      if (filePath) {
        callback(files);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

async function readFile(callback) {
  const filePath = files.path;
  const content = fs.readFileSync(filePath).toString();
  index.forEach((key) => {
    const string = new RegExp(key, "g");
    const result = content.match(string);
    if (result) {
      const count = result.length;
      const tag = result[0];
      dbParser.push([count, tag]);
    }
  });
  generators.occurrenceParser(dbParser, callback);
  dbParser = [];
}

export { uploadFile, readFile };
