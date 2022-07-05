type ResponseBody = Record<string, any>

export const createResponse = (body: ResponseBody, responseConfig: ResponseInit) => (
  new Response(JSON.stringify(body), {
    ...responseConfig,
    headers: {
      'content-type': 'application/json',
    },
  })
)
