const admin = require('firebase-admin');
const firebase = require('firebase');
const config = require('../util/config');

firebase.initializeApp(config);

admin.initializeApp();

const db = firebase.firestore();

module.exports = { admin, db };
