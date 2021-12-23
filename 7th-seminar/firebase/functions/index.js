const admin = require("firebase-admin");
const serviceAccount = require("./wesopt29-c077b-firebase-adminsdk-pqljs-9637d7bf6e");
const dotenv = require("dotenv");

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
  firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  firebase = admin.app();
}

module.exports = {
  api: require("./api"),
};