export default defineEventHandler((event) => {
    const headers = getRequestHeaders(event)
    const proxyHeaders = getProxyRequestHeaders(event)

    return {
        headers,
        proxyHeaders,
    }
})
