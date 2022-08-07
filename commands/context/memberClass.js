const discord = require('discord.js');

/**
* @callback InteractionCallback
* @param {discord.Client} client
* @param {discord.UserContextMenuInteraction} interaction
* @param {...any} [args]
* @returns {void}
*/
/**
* @typedef ContextMenuData
* @prop {string} customid
* @prop {'BUTTON'|'SELECT_MENU'|'MODAL'} type
*/

module.exports = {
    /** @type {discord.ApplicationCommandData|ContextMenuData} */
    data: { name: 'Memberクラス', type: 'USER' },
    /** @type {InteractionCallback} */
    exec: async (client, interaction) => {
        const embed = new discord.MessageEmbed()
            .setAuthor({ name: `${interaction.targetUser.tag} のMemberクラス`, iconURL: interaction.targetUser.displayAvatarURL() })
            .setDescription('```json\n' + JSON.stringify(interaction.targetMember, null, 2) + '```')
            .setColor('WHITE');
        interaction.reply({ embeds: [embed] });
    },
};