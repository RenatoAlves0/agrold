const config = await import('./config.json', { assert: { type: "json" } }).then(module => module.default)

if (config.language == 'agro') {
    const agro = await import('./initialization/agro.js').then(module => module.default)
    agro()
} else {
    const dtdl = await import('./initialization/dtdl.js').then(module => module.default)
    dtdl()
}