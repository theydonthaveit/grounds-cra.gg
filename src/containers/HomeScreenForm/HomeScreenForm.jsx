import React, { useState } from 'react';


function HomeScreenForm({ setScreen }) {
    let typingTimer = null
    const DONETYPINGINTERVAL = 1000

    const [summonerNameFormStatus, setSummonerNameFormStatus] = useState()
    const [summonerName, setSummonerName] = useState();
    const [summonerNameStatus, setSummonerNameStatus] = useState();
    const [postcode, setPostcode] = useState();
    const [postcodeStatus, setPostcodeStatus] = useState();
    const [region, setRegion] = useState('EUW');

    function isSummonerName(summonerName) {
        return summonerName !== '' ? true : false
    }

    function validateSummonerName(summonerName) {
        if (!isSummonerName(summonerName)) {
            setSummonerNameFormStatus("Summoner name not provided")
            setSummonerNameStatus(false)
            return
        }

        let summonerUrl = 'http://localhost:5001/grounds-e8ab7/us-central1/checkSummonerName'

        fetch(summonerUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "serverRegion": region,
                "summonerName": summonerName
            })
        }).then(res => res.json()).then(json => {
            if (json.validSummonerName) {
                console.log(json)
                setSummonerNameStatus(true)
                setSummonerName(summonerName)
                setSummonerNameFormStatus(null)
            } else {
                setSummonerNameFormStatus("Summoner name invalid")
            }
        }).catch(err => {
            console.log(err)
            setSummonerNameFormStatus("we might have an error")
        })
    }

    function isPostcode(postcode) {
        return postcode !== '' ? true : false
    }

    function validatePostcode(postcode) {
        if (!isPostcode(postcode)) {
            setPostcodeStatus(false)
            return
        }
        fetch(`http://api.postcodes.io/postcodes/${postcode}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            setPostcodeStatus(true)
            setPostcode(postcode)
            console.log(json)
        })
    }

    function handleKeyDown() {
        clearTimeout(typingTimer)
    }

    function handleKeyUpPostcode(value) {
        clearTimeout(typingTimer)
        typingTimer = setTimeout(() => {
            validatePostcode(value)
        }, DONETYPINGINTERVAL)
    }

    function handleKeyUpSummonerName(value) {
        clearTimeout(typingTimer)
        typingTimer = setTimeout(() => {
            validateSummonerName(value)
        }, DONETYPINGINTERVAL)
    }

    function handleFormSubmission(event) {
        event.preventDefault()
        console.log({ summonerName, postcode })
        setScreen('error')

        // let storeBaseProfileDetails = ''

        // fetch(storeBaseProfileDetails, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         region,
        //         summonerName,
        //         postcode
        //     })
        // }).then(res => {
        //     if (res.ok) {
        //         setHomeScreenForm('hello')
        //          setFormStatus()
        //     }
        // })
    }

    return (
        <form className="pure-form pure-form-stacked" onSubmit={handleFormSubmission}>
            <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}>
                <option value="EUW">EUW</option>
                <option value="EUNE">EUNE</option>
            </select>

            <input
                placeholder="e.g. meow side"
                onKeyUp={(evt) => handleKeyUpSummonerName(evt.target.value)}
                onKeyDown={handleKeyDown} />
            {
                summonerNameStatus === undefined
                    || summonerNameStatus === true
                    ? <></>
                    : <h2>{summonerNameFormStatus}</h2>
            }
            <br />
            <input
                placeholder="Postcode"
                onKeyUp={(evt) => handleKeyUpPostcode(evt.target.value)}
                onKeyDown={handleKeyDown} />
            {
                postcodeStatus === undefined || postcodeStatus === true
                    ? <></>
                    : <h2>bad postcode</h2>
            }
            <br />
            <button type="submit" className="pure-button pure-button-primary" disabled={postcodeStatus && summonerNameStatus ? false : true} >Claim your turf</button>
        </form>
    );
}

export default HomeScreenForm