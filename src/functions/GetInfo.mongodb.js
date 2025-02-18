use("test")
export const Eu = db.getCollectionNames()

const infor = db.asd.aggregate([
    {
        $match: { nome: "caio"}
    },
    {
        $group: {_id: "$mensagem"}
    }
])

console.log(Eu)
console.log("E")
console.log(infor)

