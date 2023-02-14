//import * as google from "googleapis"
import * as dialogflow from "googleapis";

const { google } = require("googleapis");

export const googleApi = async () => {
    //lconst { google } = require('googleapis');
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const client = auth.then().getClient();

    const googleSheets = google.sheets({version: "v4", auth: client});
    const spreadsheetId = "/1rHoMT4cE9Gr-diIa8HhdsNH3Z5Bpqk14Zn8HZYtm7zU";
    const metaData = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId,
        }
    )

    console.log(metaData)
}

const auth = require('google-auth-library');
const oauth2client = new auth.OAuth2Client(process.env.REACT_APP_CLIENT_ID, process.env.REACT_APP_CLIENT_SECRET);

export async function verifyGoogleToken(token) {
    try {
        const ticket = await oauth2client.verifyIdToken({
            idToken: token,
            audience: process.env.REACT_APP_CLIENT_ID,
        });
        return { payload: ticket.getPayload() };
    } catch (error) {
        return { error: "Invalid user detected. Please try again" };
    }
}

const authUrl = oauth2client.generateAuthUrl({
    access_type: 'offline',
    scope: [    // scopes for Dialogflow
        'https://www.googleapis.com/auth/cloud-platform',
        'https://www.googleapis.com/auth/dialogflow'
    ]
});
// redirect user to authUrl and wait for them coming back to callback_uri

// in callback_uri handler, get the auth code from query string and obtain a token:
//const tokenResponse = await oauth2client.getToken(code);
//oauth2client.setCredentials(tokenResponse.tokens);

// now use this oauth2client!
const sessionClient = new dialogflow.SessionsClient({ auth: oauth2client }); // <-- auth passed here