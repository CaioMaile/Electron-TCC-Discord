const mongoose = require("mongoose")
const endereco = "mongodb+srv://caiomailesla:DQ2PWqRrA7RcEdai@chat.l33wj.mongodb.net/"
const configuracao = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("strictQuery", false)

mongoose.connect(endereco, configuracao)
    .then(() => {
        console.log("Conectando com o banco de dados...")
    })
    .catch((erro) => {
        console.log(erro.message)
    })