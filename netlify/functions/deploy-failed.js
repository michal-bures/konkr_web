const { notifyDiscord } = require('../lib/deployNotification')

// Discord rejects messages over 2000 characters
const MAX_ERROR_LENGTH = 1500

exports.handler = (event) => notifyDiscord(event, (payload, title) => {
    const message = (payload.error_message ?? '').slice(0, MAX_ERROR_LENGTH)
    const error = message ? `\n> ${message.split('\n').join('\n> ')}` : ''
    return `❌ Deploy failed: ${title}${error}`
})
