import { apiClient } from './client'
import { config } from '@/config/env'

/**
 * Calls Odoo JSON-RPC endpoint.
 * @param {string} model - e.g. 'res.partner'
 * @param {string} method - e.g. 'search_read'
 * @param {Array}  args
 * @param {Object} kwargs
 */
export async function odooCall(model, method, args = [], kwargs = {}) {
  const payload = {
    jsonrpc: '2.0',
    method: 'call',
    params: {
      model,
      method,
      args,
      kwargs: { context: { lang: 'en_US' }, ...kwargs },
    },
  }

  const response = await apiClient.post('/web/dataset/call_kw', payload)

  if (response.error) {
    throw new Error(response.error.data?.message ?? 'Odoo RPC error')
  }

  return response.result
}

export async function odooAuth(login, password) {
  const payload = {
    jsonrpc: '2.0',
    method: 'call',
    params: { db: config.odooDb, login, password },
  }

  const response = await apiClient.post('/web/session/authenticate', payload)

  if (response.error || !response.result?.uid) {
    throw new Error('Invalid credentials')
  }

  return response.result
}
