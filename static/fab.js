var fab = {};
fab.connected = function(response) {
    if(response.status === 'connected'){
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
          console.log('Good to see you, ' + response.name + '.');
        });
        console.log('Access token:' + response.authResponse.accessToken)
    }
}