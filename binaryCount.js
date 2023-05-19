const fs = require("fs");
const path = require("path");

let countResult;

function countInBinary(num) {
  const writeStream = fs.createWriteStream("./count.txt");

  for (let i = 0; i <= num; i++) {
    countResult = i.toString(3).padStart(20, "0");
    writeStream.write(countResult + "\n");
  }

  writeStream.end();

  writeStream.on("finish", () => {
    console.log("Data has been written to the file.");
  });

  writeStream.on("error", (err) => {
    console.error("Error writing to file:", err);
  });
}

// Example usage
countInBinary(537824);
