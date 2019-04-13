import * as functions from 'firebase-functions';
import { Server }  from "./server";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const appServer = new Server();
appServer.appExecute();

export const webApi = functions.https.onRequest(appServer.main);

