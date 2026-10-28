const { notifyDiscord } = require('../lib/deployNotification')

// Netlify runs functions named after deploy events on that event
exports.handler = (event) => notifyDiscord(event, (payload, title) => {
    const seconds = payload.deploy_time ? ` in ${payload.deploy_time} s` : ''
    return `Deployed${seconds}: ${title}`
})
