const prisma = require("../../utils/prisma")

exports.transactionCheck = async (req, res, next) => {
    const {transId} = req.params
    console.log("TRAN ID", transId)
    if(transId){
        try{
            const transaction = await prisma.orderTransactions.findUnique({
                where: {transactionId: transId}
            })
            console.log("TRANSACTION", transaction)
            if(transaction?.transactionId && !transaction.paid){
                const strData = transaction?.data
                const data = await JSON.parse(strData)
                req.body = data
                const transactionUpdate = await prisma.orderTransactions.update({
                    where: {transactionId: transaction.transactionId},
                    data: {paid: true}
                })
                next()
            }
            else{
                res.send({status: 404, data: 'Not found'})
            }
        }
        catch(error){
            res.send({status: 500, data: 'Error'})
        }
        finally {
            await prisma.$disconnect()
        }
    }
}