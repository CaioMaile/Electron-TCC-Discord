const { app, BrowserWindow, ipcMain } = require("electron")
const { join } = require("path")
const { userInfo } = require("os")

app.whenReady()
    .then (() => {
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
        let nome = userInfo().username
    })