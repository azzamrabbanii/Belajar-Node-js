/**
 * url Query String
 * 
 * contoh :
 * URL dari google https://www.google.com/
 * kemudian kita masukan keyword Indonesia di kolom pencarian Google
 * Ketika URL nya menjadi https://www.google.com/search?q=Indonesia
 * 
 * q = key
 * Indonesia = Value
 * 
 * digunakan untuk mengirim data ke server dengan method GET.
 * 
 */

const http = require("http")
const url = require("url")
const querystring = require("querystring")
const { json } = require("stream/consumers")

const server = http.createServer((req, res) => {

let urlRequest,     // berisi path yang terdapat di request
    urlObj,        // berisi url yang telah diproses
    urlQuery,      // object dari Query
    dataResponse    // object dari query yang udah di parshing

res.setHeader("Content-Type", "application/json")

urlRequest = req.url

// convert urlRequest menjadi object
urlObj = url.parse(urlRequest)
console.log(urlObj)

// kita ambil property yang kita dapat di object url
urlQuery = urlObj.query

if(!urlQuery){
    dataResponse = {
        data: "Query tidak ditemukan"
    }
    return res.end(JSON.stringify(dataResponse))
}
dataResponse = querystring.parse(urlQuery)
return res.end(JSON.stringify(dataResponse))

})
server.listen(7000)