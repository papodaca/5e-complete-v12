const fs = require("fs");

const dir = fs.readdirSync("./src")

for (let database of dir) {
  let items = fs.readdirSync(`./src/${database}`)
  let database_data = ""
  for (let ii in items) {
    let item = items[ii]
    let item_data = fs.readFileSync(`./src/${database}/${item}`)
    let item_json = JSON.parse(item_data)
    if (ii > 0) {
      database_data = `${database_data}\n`
    }
    database_data = `${database_data}${JSON.stringify(item_json)}`
  }
  fs.writeFileSync(`./packs/${database}.db`, database_data, 'utf-8')
}
