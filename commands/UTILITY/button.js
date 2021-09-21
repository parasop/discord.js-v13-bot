const {MessageActionRow,MessageButton}= require("discord.js")


module.exports = {
    name : "button",
    run : async (client,message,args)=> {

//there is 5 type of buttons
let raw = new MessageActionRow().addComponents(

new MessageButton()
.setLabel("PARAS DOCS")
.setStyle("LINK")
.setURL("https://discord.gg/icx"),
new MessageButton()
.setLabel("PARAS DOCS")
.setCustomId("2")
.setStyle("PRIMARY"),
new MessageButton()
.setLabel("PARAS DOCS")
.setCustomId("3")
.setStyle("SECONDARY"),
new MessageButton()
.setLabel("PARAS DOCS")
.setCustomId("4")
.setStyle("SUCCESS"),
new MessageButton()
.setLabel("PARAS DOCS")
.setCustomId("5")
.setStyle("DANGER")






);



message.channel.send({content : "_ _",components : [raw]})

    }
}