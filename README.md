# hacksingapore2023
SMUChamp's Project Submission for HackSingapore 2023


## Quickstart
Run `npm start` to start the development server.
We use `https://www.npmjs.com/package/@craco/craco` from teleportHQ
Don't have NPM? use `https://nodejs.org/en/download`.

## Initalise firebase
Make sure you have a `.env` file in the root directory, credentials are in telegram, don't push any published .env to a git repo!
```js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```js
Replace .env-sample with the proper values, and rename it as `.env`
```
REACT_APP_API_KEY=
REACT_APP_AUTH_DOMAIN=
REACT_APP_PROJECT_ID=
REACT_APP_STORAGE_BUCKET=
REACT_APP_MESSAGING_SENDER_ID=
REACT_APP_APP_ID=
REACT_APP_MEASUREMENT_ID=
REACT_APP_DATABASEURL=
```
