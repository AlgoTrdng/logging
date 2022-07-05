import { serve } from 'https://deno.land/std@0.140.0/http/server.ts'

import { createResponse } from './utils/createResponse.ts'

const PORT = Number(Deno.env.get('PORT')) || 8000

serve((req) => {
  if (req.method !== 'POST') {
    return createResponse({ error: 'Not found' }, { status: 404 })
  }

  const test = 1

  console.log(req.body)

  return new Response(JSON.stringify({
    test,
  }))
}, { port: PORT })
