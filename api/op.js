export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';

  // Проверяем, есть ли слово Roblox в заголовке
  if (userAgent.includes('Roblox')) {
    // ТВОЙ КОД СКРИПТА ТУТ
    const luaScript = `
        print("Synity Loaded!")
        loadstring(game:HttpGet("https://raw.githubusercontent.com/lixeal/xllr/refs/heads/rb/synity/version/synity-main.lua"))()
    `;

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    return res.status(200).send(luaScript);
  } else {
    // Если зашли через браузер — посылаем куда подальше
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.status(403).send(`
        <body style="background:#02040a; color:red; display:flex; justify-content:center; align-items:center; height:100vh; font-family:sans-serif;">
            <h1>403 | ACCESS DENIED</h1>
            <p style="margin-left:20px; color:gray;">Synity security system: Roblox environment not detected.</p>
        </body>
    `);
  }
}
