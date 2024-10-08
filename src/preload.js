const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("electron", {
    AbrirPapo: (nome, codigo) => {
        ipcRenderer.send("AbrirPapo", nome, codigo)
    },
    MinmizarJanela: () => {ipcRenderer.send("minimizar")},
    MaximizarJanela: () => {ipcRenderer.send("maximizar")},
    FecharJanela: () => {ipcRenderer.send("fechar")},

    EnviarMensagem: (mensagem, nome) => {
        ipcRenderer.send("EnviarMensagem", mensagem)
    },
    ReceberMensagem: () => {
        return ipcRenderer.invoke("ReceberMensagem")
    },
})