// Netlify runs this after every successful deploy (event-triggered function, matched by its name)
// and posts the deploy to Discord. DISCORD_DEPLOY_WEBHOOK is set in the Netlify environment variables
exports.handler = async (event) => {
    const webhook = process.env.DISCORD_DEPLOY_WEBHOOK
    if (!webhook) {
        console.warn('DISCORD_DEPLOY_WEBHOOK is not set, skipping the deploy notification')
        return { statusCode: 200 }
    }
    const { payload } = JSON.parse(event.body)
    const title = (payload.title || payload.commit_ref || payload.id).split('\n')[0]
    const seconds = payload.deploy_time ? ` in ${payload.deploy_time} s` : ''
    const response = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            content: `Deployed${seconds}: ${title}`,
            allowed_mentions: { parse: [] }
        })
    })
    if (!response.ok) {
        // Discord rejects bad messages with a 400 and Netlify doesn't surface it, so it goes to the function log
        console.error(`discord webhook failed: ${response.status} ${await response.text()}`)
    }
    return { statusCode: 200 }
}
