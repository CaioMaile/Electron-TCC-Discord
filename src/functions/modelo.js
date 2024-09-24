const { Schema, model } = require("mongoose")

function ObterModelo(codigo) {
    const esquema = new Schema(
        {
            nome: String,
            mensagem: String,
            tempo: { type: Date, default: Date.now}
        },
        {
            collection: codigo
        }
    )
    const modelo = model("modelo", esquema)
    return modelo
}
module.exports = ObterModelo