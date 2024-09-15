const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("electron", {
    AbrirPapo: (codigo) => {
        ipcRenderer.send("AbrirPapo", codigo)
    },
    
})