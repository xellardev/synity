    // Проверяем, является ли запрос запросом из Roblox
    // Обычно Roblox присылает User-Agent: Roblox/WinInet или подобное
    if (userAgent.toLowerCase().includes('roblox')) {
        // Если просит роблокс — перенаправляем на "сырой" файл библиотеки
        // Замени ссылку ниже на прямую ссылку к твоему .lua файлу
        res.redirect('https://raw.githubusercontent.com/lixeal/xllr/refs/heads/home/walk.lua');
    } else {
        // Если зашел человек через браузер — кидаем на твой гитхаб
        res.redirect('https://github.com/lixeal/xllr/tree/home');
    }
}
