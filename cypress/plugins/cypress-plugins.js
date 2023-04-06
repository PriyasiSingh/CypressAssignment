// module.exports = require('./cypress-plugins')

// const cypressIframe = require('cypress-iframe').plugin

// module.exports = (on, config) => {
//     on('before:browser:launch', (browser = {}, launchOptions) => {
//         if (browser.family === 'chromium') {
//             launchOptions.args.push('--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process')
//         }

//         return launchOptions
//     })

//     cypressIframe(on);
// }