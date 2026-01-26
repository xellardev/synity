export default async function handler(req, res) {
    const userAgent = req.headers['user-agent'] || '';

    if (userAgent.toLowerCase().includes('roblox')) {
        // Вместо редиректа, скачиваем код сами
        const response = await fetch('https://raw.githubusercontent.com/lixeal/xllr/refs/heads/home/walk.lua');
        const luaCode = await response.text();
        
        // Отдаем код как обычный текст
        res.setHeader('Content-Type', 'text/plain');
        res.send(luaCode);
    } else {
        res.redirect('https://github.com/lixeal/xllr/tree/home');
    }
}
