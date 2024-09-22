const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("electron", {
    AbrirPapo: (codigo) => {
        ipcRenderer.send("AbrirPapo", codigo)
    },
    MinmizarJanela: () => {ipcRenderer.send("minimizar")},
    MaximizarJanela: () => {ipcRenderer.send("maximizar")},
    FecharJanela: () => {ipcRenderer.send("fechar")},

    EnviarMensagem: (mensagem) => {
        ipcRenderer.send("EnviarMensagem", mensagem)
    },
    ReceberMensagem: () => {
        return ipcRenderer.invoke("ReceberMensagem")
    }
    
})