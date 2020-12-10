import firebase from 'firebase';

var fbConfig = {
    apiKey: config.apiKey,
    projectId: config.projectId,
    databaseURL: config.databaseURL,
    appId: config.appId
};

firebase.initializeApp(fbConfig);
export const db = firebase.database(); 