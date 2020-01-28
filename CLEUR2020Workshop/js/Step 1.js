const xapi = require('xapi');

/*
 * Handler for the widget events
*/
function onWidgetAction(event) {
  console.log('Widget Action Event: ',   JSON.stringify(event) );
}

/*
 * Handler for the root - level events 
*/
function onPanelClicked(event) {
  console.debug('Panel Clicked Event: ', JSON.stringify(event));
}

/* Event listeners for manual light controls from the touch 10 */
xapi.event.on('UserInterface Extensions Widget Action', onWidgetAction);

xapi.event.on('UserInterface Extensions Panel Clicked', onPanelClicked);
