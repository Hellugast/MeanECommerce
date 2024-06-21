const mongoose = require("mongoose");

const uri = "-"

const connection = () => {
    mongoose.connect(uri, {
        
    }).then(() => { console.log("mongodb bağlantısı başarılı") }).catch((err) => { console.log("Bağlantı hatası, " + err.message) });
}

module.exports = connection;