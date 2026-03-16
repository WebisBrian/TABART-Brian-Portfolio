type ContactEmailTemplateParams = {
  name: string
  email: string
  message: string
  ip: string
  sentAt: string
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

export function getContactEmailTemplate({
  name,
  email,
  message,
  ip,
  sentAt,
}: ContactEmailTemplateParams) {
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />")
  const safeIp = escapeHtml(ip)
  const safeSentAt = escapeHtml(sentAt)

  return `
    <!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nouveau message portfolio</title>
      </head>
      <body style="margin:0; padding:0; background-color:#0a0a0a; font-family:Arial, Helvetica, sans-serif; color:#e5e7eb;">
        <div style="max-width:720px; margin:0 auto; padding:32px 16px;">
          <div style="border:1px solid #27272a; border-radius:16px; overflow:hidden; background-color:#111111;">
            <div style="padding:24px 24px 16px; border-bottom:1px solid #27272a;">
              <p style="margin:0 0 8px; font-size:12px; letter-spacing:0.18em; text-transform:uppercase; color:#a1a1aa;">
                Contact portfolio
              </p>
              <h1 style="margin:0; font-size:24px; line-height:1.3; color:#fafafa;">
                Nouveau message reçu
              </h1>
            </div>

            <div style="padding:24px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse; margin-bottom:24px;">
                <tr>
                  <td style="padding:0 0 12px; font-size:13px; color:#a1a1aa; width:140px;">Nom</td>
                  <td style="padding:0 0 12px; font-size:14px; color:#fafafa;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding:0 0 12px; font-size:13px; color:#a1a1aa;">Email</td>
                  <td style="padding:0 0 12px; font-size:14px; color:#fafafa;">${safeEmail}</td>
                </tr>
                <tr>
                  <td style="padding:0 0 12px; font-size:13px; color:#a1a1aa;">Date</td>
                  <td style="padding:0 0 12px; font-size:14px; color:#fafafa;">${safeSentAt}</td>
                </tr>
                <tr>
                  <td style="padding:0; font-size:13px; color:#a1a1aa;">IP</td>
                  <td style="padding:0; font-size:14px; color:#fafafa;">${safeIp}</td>
                </tr>
              </table>

              <div style="margin-top:24px;">
                <p style="margin:0 0 12px; font-size:13px; color:#a1a1aa;">Message</p>
                <div style="border:1px solid #27272a; border-radius:12px; background-color:#18181b; padding:16px; font-size:14px; line-height:1.7; color:#e5e7eb; white-space:normal; word-break:break-word;">
                  ${safeMessage}
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `
}