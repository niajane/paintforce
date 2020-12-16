import firebase from 'firebase';

var config = {
    apiKey: process.env.REACT_APP_API_KEY,
    projectId: process.env.REACT_APP_PROJECT_ID,
    databaseURL: process.env.REACT_APP_DB_URL,
    appId: process.env.REACT_APP_APP_ID
};


firebase.initializeApp(config);
export const db = firebase.database(); 