export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';

  if (userAgent.includes('Roblox')) {
    // ТУТ ДОЛЖЕН БЫТЬ ТВОЙ LUA КОД
    const luaScript = `
        print("Synity Hub Loaded!")
        -- Вставь сюда свой основной скрипт чита
    `;

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    return res.status(200).send(luaScript);
  } else {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.status(403).send('<h1>403 | Access Denied</h1>');
  }
}
