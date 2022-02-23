const http = require("http")

const server = http.createServer((req, res) => {
    let url, method, dataResponse

    res.setHeader("Content-Type", "application/json");
    url = req.url;
    
    method = req.method?? "get"  // ambil method nya jika tidak ada maka diubah get

    if(url === "/"){
        dataResponse = {
            data: "Ini adalah HomePage"
        };
    }else if (url.toLowerCase() === "/home") {
        dataResponse = {
            data: "ini adalah halaman HomePage"
        }
    }else if (url.toLowerCase() === "/login") {
        if(method.toLowerCase() === "post") {
            dataResponse = {
                data: "Anda Login dengan Method Post"
            }
        }else {
            dataResponse = {
                data: "ubah menjadi method post dulu"
            }
        }
    }else{
        dataResponse = {
            data: "404 not found"
        }
    }

    return res.end(JSON.stringify(dataResponse));
});
server.listen(6000);