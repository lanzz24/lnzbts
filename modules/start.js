const config = require('../config')
const axios = require('axios')

async function get(battery, phn_info) {

    if (battery.plugged) {
        var batttxt = `${battery.battery}% (Charging)`
    } else {
        var batttxt = `${battery.battery}%`
    }

    return ({
        msg: `*FADHLAN BOTS* _(1.8, 0)_\n\nThis chat is Powered By *FadhlanBots*\n\n*Battery:* ${batttxt}\n*Device:* ${phn_info.device_manufacturer} ${phn_info.device_model}\n*WA Version:* ${phn_info.wa_version}\n*Pmpermit:* ${config.pmpermit_enabled}\n*Mutetime:* ${config.pmpermit_mutetime/60} Minutes\n\n*Official Repository Url 👇*\n` + "```https://github.com/lanzz24/lnzbts```",
        mimetype: "image/jpeg",
        data: Buffer.from(((await axios.get('https://i.ibb.co/jTKG9SC/IMG-20210812-121619-261.jpg', { responseType: 'arraybuffer' })).data)).toString('base64'),
        filename: "start.jpg"
    })
}

module.exports = {
    get
}
