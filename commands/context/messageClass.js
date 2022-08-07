const discord = require('discord.js');

/**
* @callback InteractionCallback
* @param {discord.Client} client
* @param {discord.MessageContextMenuInteraction} interaction
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
    data: { name: 'Messageクラス', type: 'MESSAGE' },
    /** @type {InteractionCallback} */
    exec: async (client, interaction) => {
        const embed = new discord.MessageEmbed()
            .setTitle('Messageクラス')
            .setDescription('```json\n' + JSON.stringify(interaction.targetMessage, null, 2) + '```')
            .setColor('WHITE');
        interaction.reply({ embeds: [embed] });
    },
};