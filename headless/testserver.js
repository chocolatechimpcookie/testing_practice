// const {ChromeLauncher} = require('lighthouse/lighthouse-cli/chrome-launcher');
//
// /**
//  * Launches a debugging instance of Chrome on port 9222.
//  * @param {boolean=} headless True (default) to launch Chrome in headless mode.
//  *     Set to false to launch Chrome normally.
//  * @return {Promise<ChromeLauncher>}
//  */
// function launchChrome(headless = true)
// {
//     const launcher = new ChromeLauncher(
//     {
//         port: 9222,
//         autoSelectChrome: true, // False to manually select which Chrome install.
//         additionalFlags: [
//           '--window-size=412,732',
//           '--disable-gpu',
//           headless ? '--headless' : ''
//         ]
//     });
//
//   return launcher.run().then(() => launcher)
//     .catch(err =>
//     {
//         return launcher.kill().then(() =>
//         { // Kill Chrome if there's an error.
//             throw err;
//         }, console.error);
//     });
// }
//
//
// launchChrome();

// const lighthouse = require('lighthouse');
// const chromeLauncher = require('lighthouse/chrome-launcher/chrome-launcher');
//
// function launchChromeAndRunLighthouse(url, flags, config = null) {
//   return chromeLauncher.launch().then(chrome => {
//     flags.port = chrome.port;
//     return lighthouse(url, flags, config).then(results =>
//       chrome.kill().then(() => results)
//     );
//   });
// }
//
// // In use:
// const flags = {output: 'json'};
// launchChromeAndRunLighthouse('https://example.com', flags)
// 	.then(results => console.log(results));


const chrome = require('chrome-remote-interface');


//runs JS
function onPageLoad(Runtime) {
  //const js = "document.querySelector('title').textContent";
  let js = `
  `;

  // ^put js to manipulate  interface

  // Evaluate the JS expression in the page.
  return Runtime.evaluate({expression: js}).then(result => {
    console.log('Title of page: ' + result.result);
  });
}




//launches the page
launchChrome().then(launcher => {

  chrome(protocol => {
    // Extract the parts of the DevTools protocol we need for the task.
    // See API docs: https://chromedevtools.github.io/devtools-protocol/
    const {Page, Runtime} = protocol;

    // First, need to enable the domains we're going to use.
    Promise.all([
      Page.enable(),
      Runtime.enable()
    ]).then(() => {
      Page.navigate({url: ''});
//^Page url
      // Wait for window.onload before doing stuff.
      Page.loadEventFired(() => {
        onPageLoad(Runtime).then(() => {
          protocol.close();
          launcher.kill(); // Kill Chrome.
        });
      });

    });

  }).on('error', err => {
    throw Error('Cannot connect to Chrome:' + err);
  });

});
