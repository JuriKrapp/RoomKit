const xapi = require('xapi');

var hueData = 

{
			"on": true,           // On/Off state of the light. On=true, Off=false
			"bri": 1,             // The brightness value to set the light to.Brightness is a scale from 1 (the minimum the light is capable of) to 254 (the maximum).
                            // Note: a brightness of 1 is not off.
                            // e.g. “brightness”: 60 will set the light to a specific brightness
			"hue": 0,             // The hue value to set light to.The hue value is a wrapping value between 0 and 65535. 
			                      // Both 0 and 65535 are red, 25500 is green and 46920 is blue.
                            // e.g. “hue”: 50000 will set the light to a specific hue.
			"sat": 199,           // Saturation of the light. 254 is the most saturated (colored) and 0 is the least saturated (white).
			"effect": "none",     // The dynamic effect of the light. Currently “none” and “colorloop” are supported. Other values will generate an error of type 7.
			                      // Setting the effect to colorloop will cycle through all hues using the current brightness and saturation settings.
			"xy": [               // The x and y coordinates of a color in CIE color space.The first entry is the x coordinate and the second entry is the y coordinate. 
			                      // Both x and y must be between 0 and 1.
				0.6112,             // If the specified coordinates are not in the CIE color space, the closest color to the coordinates will be chosen.
				0.3339
			],
			"ct": 153,            // The Mired color temperature of the light. 2012 connected lights are capable of 153 (6500K) to 500 (2000K).
			"alert": "none",       // The alert effect,is a temporary change to the bulb’s state, and has one of the following values:
                            // “none” – The light is not performing an alert effect.
                            // “select” – The light is performing one breathe cycle.
                            // “lselect” – The light is performing breathe cycles for 15 seconds or until an "alert": "none" command is received.
                            // Note that this contains the last alert sent to the light and not its current state. i.e. After the breathe cycle has 
                            // finished the bridge does not reset the alert to “none“.
      "colormode": "hs"                            
}

function onVolumeChange(volume) {
  console.log('Volume Change Event: ', volume);
}

function init(){
  //additional event listener for volume change
  xapi.status.on('Audio Volume', onVolumeChange);
}