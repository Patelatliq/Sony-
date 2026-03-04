export default async function handler(req, res) {
    const { code } = req.query;

    if (!code) {
        return res.status(400).send('Missing code parameter');
    }

    const CLIENT_ID = process.env.OAUTH_GITHUB_CLIENT_ID;
    const CLIENT_SECRET = process.env.OAUTH_GITHUB_CLIENT_SECRET;

    try {
        const response = await fetch('https://github.com/login/oauth/access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                code,
            }),
        });

        const data = await response.json();

        if (data.error) {
            return res.status(400).send(`OAuth Error: ${data.error_description}`);
        }

        const token = data.access_token;
        const provider = 'github';

        // Send the token back to the CMS via postMessage
        const html = `
      <html><body><script>
        (function() {
          function receiveMessage(e) {
            console.log("receiveMessage %o", e);
            window.opener.postMessage(
              'authorization:${provider}:success:${JSON.stringify({ token, provider })}',
              e.origin
            );
          }
          window.addEventListener("message", receiveMessage, false);
          window.opener.postMessage("authorizing:${provider}", "*");
        })();
      </script></body></html>
    `;

        res.setHeader('Content-Type', 'text/html');
        res.send(html);
    } catch (error) {
        console.error('OAuth callback error:', error);
        res.status(500).send('Authentication failed');
    }
}
