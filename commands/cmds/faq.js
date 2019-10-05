const { getMember, formatDate } = require("../../functions.js");
const { RichEmbed } = require("discord.js");

module.exports = {
    name: "help",
    category: "cmds",
    description: "Returns the server info",
    run: async (client, message, args) => {
        const member = getMember(message, args.join(" "));

        const embed = new RichEmbed()
            .setTitle("Frequently Asked Questions")
            .setColor("#1abc9c")
            .setDescription(":soontm:")
            .setFooter("Developed by TotallyNotArchie#0001")

            .setTimestamp()

                message.channel.send(embed);
    }
}