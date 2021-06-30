var firebaseConfig = {
    apiKey: "AIzaSyAFCcHHtL-IEabIt3S_LAPdlNq43VpTr7c",
    authDomain: "fir-rtc-5d632.firebaseapp.com",
    projectId: "fir-rtc-5d632",
    storageBucket: "fir-rtc-5d632.appspot.com",
    messagingSenderId: "1034025922364",
    appId: "1:1034025922364:web:68587a58fcd9fffe743839"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var fire = database.ref().child("Lab_details");
var val;

function getlab(roomId) {
    val = roomId;
    fire.on("value", gotData);
    function gotData(data) {
        data = data.val();
        let keys = Object.keys(data);
        for (var i = 0; i < keys.length; i++) {
            if (keys[i] == roomId) {
                document.getElementById("lab").setAttribute("src", keys[i].two);
            }
        }
    }
}