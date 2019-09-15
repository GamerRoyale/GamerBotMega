('message', message => {

    if (message.content === 'ping') {

       message.reply(`${message.client.ping}`)
