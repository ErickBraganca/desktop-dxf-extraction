import fs from "fs";
const { dialog } = require("@electron/remote");

let files = [];

async function uploadFile(callback) {
  dialog
    .showOpenDialog({
      title: "Upload Attachments",
      buttonLabel: "Upload",
      filters: [
        { name: "Text Files", extensions: ["txt"] },
        { name: "DXF Files", extensions: ["dxf"] },
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
      };
      files.unshift(newFile);
      if (filePath) {
        callback(true);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

async function readFile(callback) {
  const filePath = files[0].path;
  const content = fs.readFileSync(filePath).toString();
  console.log(content);
  callback(files);
}

export { uploadFile, readFile };
