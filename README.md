# FireNotif

About -
1) FCM - sending recieving notifications 
2) FireStore Database -  storing users and tokens 
3) Based on Angular

TBD -
1) Friends frontend;
2) Sending notifications to groups;

To send notification to some token using your server id - (Fill in the blanks and run in terminal)
curl -X POST -H "Authorization: key=YOUR-SERVER-KEY" -H "Content-Type: application/json" -d '{
  "notification": {
    "title": "Portugal vs. Denmark",
    "body": "5 to 1",
    "icon": "firebase-logo.png",
    "click_action": "http://localhost:8081"
  },
  "to": "YOUR-IID-TOKEN"
}' "https://fcm.googleapis.com/fcm/send"


Important links -
https://github.com/firebase/quickstart-js
