

// index.esm.js:10756 WebSocket connection to 'wss://s-usc1c-nss-204.firebaseio.com/.ws?v=5&ls=2MJgZnx3oAVLGPhoVb0djV7bcFB9BXwt&ns=final-project-nghia' failed: Error in connection establishment: net::ERR_INTERNET_DISCONNECTED
// e.open @ index.esm.js:10756
// (anonymous) @ index.esm.js:11168
// index.esm.js:10756 WebSocket connection to 'wss://s-usc1c-nss-208.firebaseio.com/.ws?v=5&ls=wcUfHkJhlFK4vVITYWv5ejmmHlXF09Xi&ns=dienthuduc' failed: Error in connection establishment: net::ERR_INTERNET_DISCONNECTED
// e.open @ index.esm.js:10756
// (anonymous) @ index.esm.js:11168
// index.esm.js:10756 WebSocket connection to 'wss://s-usc1c-nss-237.firebaseio.com/.ws?v=5&ls=xIcB6jPIrU4yNbQiwHNNrUOn1z52oI8r&ns=diengovap-6962f' failed: Error in connection establishment: net::ERR_INTERNET_DISCONNECTED
// e.open @ index.esm.js:10756
// (anonymous) @ index.esm.js:11168


var _websocket;

function wsConnect() {
  if (_websocket) {
    _websocket.close(3001);
  } else {
    _websocket = new WebSocket("wss://s-usc1c-nss-204.firebaseio.com/.ws?v=5&ls=2MJgZnx3oAVLGPhoVb0djV7bcFB9BXwt&ns=final-project-nghia");
    _websocket.onopen = function() {
    //   console.log('connected');
    };
    _websocket.onmessage = function(msg) {
    //   console.log(msg);
    };
    _websocket.onclose = function(evt) {
        if (evt.code == 3001) {
            // console.log('ws closed');
            _websocket = null;
        } 
        else {
            _websocket = null;
            // console.log('ws connection error');
            JSAlert.alert('Lỗi kết nối! Hãy kiểm tra kết nối mạng và thử lại...' + evt.type, null, JSAlert.Icons.Failed)
                // .then(function()
                // {
                //     window.location = "";
                // });
        }
    };
    _websocket.onerror = function(evt) {
      if (_websocket.readyState == 1) {
        // console.log('ws normal error: ' + evt.type);
        }
        JSAlert.alert('Lỗi kết nối! Hãy kiểm tra kết nối mạng và thử lại...', null, JSAlert.Icons.Failed)
            // .then(function()
            // {
            //     window.location = "";
            // });
    };
  }
}

wsConnect();