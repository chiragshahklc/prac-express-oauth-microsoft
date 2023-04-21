import { IOIDCStrategyOptionWithoutRequest } from "passport-azure-ad"

const tenant_id = process.env.TENANT_ID || ""
const client_id = process.env.CLIENT_ID || ""
const redirect_url = process.env.REDIRECT_URL || ""

export default {
  identityMetadata: `https://login.microsoftonline.com/${tenant_id}/v2.0/.well-known/openid-configuration`,
  clientID: client_id,
  responseType: "id_token",
  responseMode: "form_post",
  redirectUrl: redirect_url,
  allowHttpForRedirectUrl: true,
  passReqToCallback: false,
  useCookieInsteadOfSession: true,
  cookieEncryptionKeys: [
    { key: "12345678901234567890123456789012", iv: "123456789012" },
    { key: "abcdefghijklmnopqrstuvwxyzabcdef", iv: "abcdefghijkl" },
  ],
  loggingLevel: "info",
} as IOIDCStrategyOptionWithoutRequest
