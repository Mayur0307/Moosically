// FirebaseUI config.
var uiConfig = {
  signInSuccessUrl: 'mode.html',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,

  ],

  tosUrl: 'mode.html'
};


var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', uiConfig);
