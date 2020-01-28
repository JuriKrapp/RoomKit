const xapi = require('xapi');

/*
 * Handler for the root - level events 
*/
function onPanelClicked(event) {
  try {
    console.debug('Panel Clicked Event: ', JSON.stringify(event));
    if (event.PanelId == 'buttonRed') {
      console.debug('Red  button clicked.');
    } else if (event.PanelId == 'buttonGreen') {
      console.debug('Green  button clicked.');
    }
  } catch(e) {
    console.error('Error in UI handler',e);
  }
}

/*
 * Init function, used as entry point 
*/
function init(){
  
  try {

    xapi.event.on('UserInterface Extensions Panel Clicked', onPanelClicked);

  } catch(e) {
    console.error('Error in init:',e);
  }
}

init();
console.debug('Hue integration loaded');
