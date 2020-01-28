const xapi = require('xapi');

const HUE_USER_ID = 'oXQ0LgP9VLOZ0GxF8DOxFdPu-tWVeuQ3e-3BaXPX'; /* Philips Hue user id */

const HUE_BRIDGE_ADDRESS  = '172.17.250.95';                   /* IP of hue bridge.  */

const HUE_API_REST_HEADER = 'Content-Type: application/json';

const HTTP_TIMEOUT = 1; /* How fast (in seconds) the HTTP rest commands should fail with timeout error. */

const LIGHT_ID = '1';

const LIGHTINTENSITY_OFF = 0;
const LIGHTINTENSITY_FULL = 254;
const LIGHTINTENSITY_HALF = 128;


const COLOR_XY_RED = [0.674,0.322];
const COLOR_XY_ORANGE = 	[0.5916,0.3824];
const COLOR_XY_YELLOW = [0.4697,0.4718];
const COLOR_XY_GREEN = [0.408,0.517];
const COLOR_XY_BLUE = [0.1704,0.0457];
const COLOR_XY_VIOLET = [0.251,0.106];
const COLOR_XY_PINK = [0.545,0.232];
const COLOR_XY_LIGHT_BLUE = [0.214,0.250];

const SATURATION_FULL = 199;
const SATURATION_RELAXED = 140;

/*
 * Send HTTP Put to switch Hue light 
*/
function switchLight(lightid, data) {
  console.log('switchLight: ',  lightid, JSON.stringify(data) );
  var url = 'http://' + HUE_BRIDGE_ADDRESS + '/api/' + HUE_USER_ID + '/lights/' + lightid + '/state';

  return xapi.command('HttpClient Put', {
    'Url': url,
    'Header': HUE_API_REST_HEADER,
    'Timeout': HTTP_TIMEOUT },
    JSON.stringify(data)
  ).catch(e => console.error('Command error',e));
}

/*
 * Handler for the root - level events 
*/
function onPanelClicked(event) {
  console.log('Panel Clicked Event: ', JSON.stringify(event));
  //select only onw button 
  if (event.PanelId == 'buttonRed') {
      switchLight(LIGHT_ID, { on: true, bri: 128, sat: 254, xy: COLOR_XY_RED });
  }
}

function init(){
  xapi.config.set('HttpClient Mode', 'On'); //this needs to be set to on to allow HTTP Post

  xapi.event.on('UserInterface Extensions Panel Clicked', onPanelClicked);
}

init();
console.debug('Reference integration loaded');
