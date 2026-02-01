const fs = require('fs');
const path = require('path');

const projects = [
    'astonmartin',
    'underarmour',
    'bbcstories',
    'jaguartcs',
    'alainfc',
    'toughmudder',
    'nikewellfest',
    'azimuth',
    'laurynhill',
    'budgetcarrental',
    'myprotein',
    'vivobarefoot'
];

const template = (title) => `<!DOCTYPE html>
<html class="scroll-smooth" lang="en">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>${title.toUpperCase()} | WORK | Human Creative</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
    <link href="https://fonts.googleapis.com" rel="preconnect"/>
    <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
    <link href="https://fonts.googleapis.com/css2?family=Anton&amp;family=Azeret+Mono:wght@400&amp;family=Inter:wght@300;400;500;600;700&amp;family=Space+Mono:wght@400;700&amp;display=swap" rel="stylesheet"/>
    <script src="../design_config.js"></script>
    <link rel="stylesheet" href="../style.css">
</head>
<body class="bg-background-light dark:bg-background-dark font-sans antialiased text-black dark:text-gray-100 transition-colors duration-300">
    <header class="w-full">
        <nav class="bg-black text-white h-[130px] flex items-center overflow-hidden min-w-full">
            <div class="flex items-center min-w-max pl-[75px]">
                <a href="../index.html" class="block w-[271px] shrink-0 py-[20px]">
                    <img src="file:///C:/Users/Scott/.gemini/antigravity/brain/a00316bb-e9ec-4b6f-a5ca-7c2653bfc855/uploaded_media_1769787825261.png" alt="HUMAN." class="w-full h-auto">
                </a>
                <div class="w-[129px] shrink-0"></div>
                <div class="flex items-center">
                    <a href="../manifesto.html" class="text-primary nav-link-style shrink-0">MANIFESTO</a>
                    <div class="w-[243px] shrink-0"></div>
                    <a href="../work.html" class="text-primary nav-link-style shrink-0">WORK</a>
                    <div class="w-[243px] shrink-0"></div>
                    <a href="../enquire.html" class="text-primary nav-link-style shrink-0">ENQUIRE</a>
                    <div class="w-[243px] shrink-0"></div>
                    <a href="../impact.html" class="text-primary nav-link-style shrink-0">IMPACT</a>
                    <div class="w-[243px] shrink-0"></div>
                    <a href="../shop.html" class="text-primary nav-link-style shrink-0">SHOP</a>
                </div>
            </div>
        </nav>
    </header>

    <main class="bg-background-dark min-h-screen text-white flex flex-col justify-center items-center">
        <h1 class="font-display text-8xl text-primary uppercase text-center max-w-4xl">${title}</h1>
        <p class="font-mono text-xl mt-4">Project detail page under construction</p>
    </main>
</body>
</html>`;

projects.forEach(project => {
    fs.writeFileSync(path.join('work', `${project}.html`), template(project));
    console.log(`Created work/${project}.html`);
});
