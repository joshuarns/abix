export const config = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8069',
  odooDb: import.meta.env.VITE_ODOO_DB ?? 'odoo',
  appName: import.meta.env.VITE_APP_NAME ?? 'Abix',
  env: import.meta.env.MODE,
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
}
