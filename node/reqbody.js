/**
 * Request Body
 * 
 * learn parsing data body dari request
 * 
 */

/**
 * bentuk transaksi client ada 2 yaitu upload dan download
 *      1. Mulai dari inisiasi data pada tujuan
 *      2. Pemisahan data yang akan dikirim menjadi bagian kecil (chunks)
 *      3. Pengiriman data chunks ke tujuan disebut dengan Buffering
 *      4. Setelah data selesai dibuffer semua, proses data agar menjadi utuh kembali
 */

const http = require("http")
const querystring = require("querystring")
const server = http.createServer((req, res) => {
    let urlReq, methodReq, dataRequest

    const chunkArr = []
    const dataResponse = {}

  res.setHeader("Content-Type", "application/json")

  // untuk mendapatkan kosong dari url
  urlReq = req.url

  // kalau methodnya kosong isi dengan get
  methodReq = req.method ?? "get"

  // kita akan membuat routing ke login

  if (urlReq.toLowerCase() === "/login") {
      if(methodReq.toLowerCase()  === "get"){
        // tandai halaman login
        dataResponse.data = "Ini adalah Halaman Login"
      }else if (methodReq.toLowerCase() === "post") {
        req.on("data", (chunk) => {
            // tambahkan data chunk ke chunkArr
            chunkArr.push(chunk);
          })
      }else {
          dataResponse.data = "hanya Menerima Methid GET dan POST"
      }
  }else{
      // kalau endpointnya bukan login
      dataResponse.data = "Gunakan endpoint /login"
  }

  // setelah data request selesai akan diterima oleh server
  req.on("end", ()=>{
      // jika chunk ada datanya
      if (chunkArr.length !== 0) {
          dataRequest = Buffer.concat(chunkArr).toString()
          // ambil dataRequest nya
          console.log(dataRequest)

          let requestObj = querystring.parse(dataRequest)

          // masukan object tersebut ke responnya
          dataResponse.data = requestObj
      }
      return res.end(JSON.stringify(dataResponse))
  })


})
server.listen(2000)      