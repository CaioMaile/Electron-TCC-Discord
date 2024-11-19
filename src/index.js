const { app, BrowserWindow, ipcMain } = require("electron")
const { join } = require("path")

require("./functions/conexão.js")
const ObterModelo = require("./functions/modelo.js")

app.whenReady()
    .then (() => {
        let username = ""
        let modelo = null
        const janela = new BrowserWindow ({
            autoHideMenuBa: true,
            minHeight: 580,
            icon: join(__dirname, "./public/icon.png"),
            frame: false,
            title: "Descent",
            minWidth: 920,
            webPreferences: {
                preload: join(__dirname, "preload.js")
            }       

        })
        janela.loadFile( join(__dirname, "./public/PaginaInicio.html"))

        ipcMain.on("maximizar", () => {
            janela.isMaximized() ? janela.unmaximize() : janela.maximize()
        })
        ipcMain.on("minimizar", () => {
            janela.minimize()
        })
        ipcMain.on("fechar", () => {
            app.quit()
        })

        ipcMain.on("AbrirPapo", async (evento, nome, codigo) => {
            username = nome
            modelo = ObterModelo(codigo)
            janela.loadFile( join(__dirname, "/public/PaginaPapo.html"))
        })
        ipcMain.on("EnviarMensagem", async (evento, mensagem) => {
            const novaMensagem = new modelo({ 'nome': username, 'mensagem':mensagem })
            await novaMensagem.save()
        })
        ipcMain.handle("ReceberMensagem", async () => {
            const mensagens = await modelo.find().sort({ tempo: "desc" }).lean()
            return mensagens
        })     
    })