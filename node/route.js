// Basic routing

const http = require("http")
const server = http.createServer((req, res)=>{
    let url, dataResponse

    res.setHeader("Content-Type", "application/json");

    url = req.url;

    /**
     * membuat routing yg dibutuhkan sesuai client
     * homepage, login 404 not found 
     * */
    
     if (url === "/") {
        dataResponse = {
          data: "Ini adalah Homepage",
        };
      } else if (url.toLowerCase() === "/login") {
        // routing login
        // penggunaan toLowerCase untuk mengurangi kesalahan karena case-sensitive
        dataResponse = {
          data: "Ini adalah halaman Login",
        };
      } else if (url.toLowerCase() === "/register") {
        // routing register
        dataResponse = {
          data: "Ini adalah halaman Register",
        };
      } else {
        // Selain url diatas dianggap 404 not found
        dataResponse = {
          data: "Halaman Tidak Ditemukan",
        };
      }
      return res.end(JSON.stringify(dataResponse))
});
server.listen(2000)