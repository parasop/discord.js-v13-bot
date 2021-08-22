module.exports = {

    name : "removepro",
    run : async (client,message,args)=>{



client.db.set(`premium_${args[0]}`,false)



return message.channel.send(`removed premium from that server`)

    }
}