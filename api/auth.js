export default function handler(req, res) {
    const { host } = req.headers;
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const REDIRECT_URI = `${protocol}://${host}/api/callback`;
    const CLIENT_ID = process.env.OAUTH_GITHUB_CLIENT_ID;

    const authURL =
        `https://github.com/login/oauth/authorize` +
        `?client_id=${CLIENT_ID}` +
        `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
        `&scope=repo,user`;

    res.redirect(authURL);
}
