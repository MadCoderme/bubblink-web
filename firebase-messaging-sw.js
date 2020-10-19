importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");
const firebaseConfig = {
    apiKey: "AIzaSyBdmV0XWOSvLh4GY1aESfZfj4lmErYNSLc",
    authDomain: "bubblink-lishup.firebaseapp.com",
    databaseURL: "https://bubblink-lishup.firebaseio.com",
    projectId: "bubblink-lishup",
    storageBucket: "bubblink-lishup.appspot.com",
    messagingSenderId: "392966741916",
    appId: "1:392966741916:web:f727e5e1e2258bd0aef259",
    measurementId: "G-KQ0SMSVYKX"
  };
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
     const promiseChain = clients
          .matchAll({
               type: "window",
               includeUncontrolled: true,
          })
          .then((windowClients) => {
               for (let i = 0; i < windowClients.length; i++) {
                    const windowClient = windowClients[i];
                    windowClient.postMessage(payload);
               }
          })
          .then(() => {
               return registration.showNotification("New Message in Bubblink");
          });
     return promiseChain;
});
self.addEventListener("notificationclick", function(event) {
     console.log(event);
});
