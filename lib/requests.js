const fs = require('fs')
const file_path = './requests.json'

exports.readRequests = () => {
    const ip = '121:222'
    fs.readFileSync(file_path, 'utf-8', (error, jsonString) => {
        if(error){
            console.log("JSON READ ERROR", error)
        }
        else{
            let data = JSON.parse(jsonString)
            data = data.map(item => {
                if(item.ip === ip) item.clicks += 1;
                return item
            })
            fs.writeFileSync(file_path, JSON.stringify(data), error => {
                if(error){console.log("JSON WRITE ERROR", error)}
                else{
                    console.log("Json written successfully")
                }
            } )
        }
    })

    fs.readFile(file_path, 'utf-8', (error, jsonString) => {
        if(error){
            console.log("JSON ERR", error)
        }
        else{
            const data = JSON.parse(jsonString)
            console.log("DATA", data)
        }
    })

}

