const functions = require('firebase-functions')
const https = require('https')


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.checkSummonerName = functions.https.onRequest((req, res) => {
    // TODO: do not push with these creds, setup env file
    const riotApiKey = "RGAPI-40a4fe54-daf2-4935-8163-ede14a31dc58"
    const headers = {
        "Origin": "",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Riot-Token": riotApiKey,
        "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
        "User-Agent": ""
    }
    const riotEndpoints = {
        'EUW': 'euw1.api.riotgames.com'
    }
    const options = {
        hostname: riotEndpoints[req.body.serverRegion],
        path: encodeURI(`/lol/summoner/v4/summoners/by-name/${req.body.summonerName}`),
        method: 'GET',
        headers
    }

    const request = https.request(options, (response) => {
        if (response.statusCode !== 200) {
            console.log(`${response.statusCode} - ERROR`)
            return
        }

        response.on('data', (d) => {
            // TDOD: store the D data
            const Response = { "status": 200, "validSummonerName": true }
            res.send(JSON.stringify(Response))
        })
    })

    request.on('error', (error) => {
        console.error(error)
    })

    request.end()
})
