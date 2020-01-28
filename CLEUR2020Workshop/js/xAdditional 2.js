const xapi = require('xapi');


/* Some examples on how the lights can automatically change based on the codec states: */
xapi.event.on('CallDisconnect', (event) => {
  // set ready color
});

xapi.status.on('Call RemoteNumber', (remoteNumber) => {
  // set calling  color
});


xapi.status.on('Standby State', (state) => {
  if(state === 'Standby'){
    // set standby light
  } else if(state === 'Halfwake'){
    // set halfwake light
  } else if(state === 'Off'){
    // set off light
  } 
});

