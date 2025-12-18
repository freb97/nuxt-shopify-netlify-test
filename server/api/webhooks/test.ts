export default defineWebhookEventHandler(async (event) => {
    const body = await readBody(event)

    const topic = getWebhookTopic(event)
    const shop = getWebhookShopDomain(event)

    console.log(`Received ${topic} webhook from ${shop}`)
    console.log('Payload:', body)

    return { success: true }
})
