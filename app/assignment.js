const pt = require('puppeteer') //Puppeteer library

async function confirmAlert() {

    const browser = await pt.launch({ headless: false }) 
    const page = await browser.newPage(); 
    await page.setViewport({ width: 1280, height: 800 });

    page.on('dialog', async dialog => {  
        console.log(dialog.message()); 
        console.log('Alert detected'); 
    })

    await page.goto('https://pupperteer-popup-martin-huck.vercel.app/')

}

confirmAlert()
