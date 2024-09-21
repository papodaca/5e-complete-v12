const fs = require("fs");

const dir = fs.readdirSync("./packs")

for (let d of dir) {
  let file = fs.readFileSync(`./packs/${d}`)
  let files = file.toString().split("\n")
  for (let file of files) {
    if (file.length < 2) {
      continue
    }
    let file_data = JSON.parse(file)
    let file_dir = `./src/${d.split(".")[0]}`
    if (!fs.existsSync(file_dir)) {
      fs.mkdirSync(file_dir);
    }
    let file_name = file_data.name.replace(/[\/\s]/g, "-")
    fs.writeFileSync(`${file_dir}/${file_name}.json`, JSON.stringify(file_data, null, 2))
  }
}
