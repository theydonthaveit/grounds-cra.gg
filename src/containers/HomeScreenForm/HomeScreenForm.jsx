import React, { useState } from 'react';


function HomeScreenForm({ setHomeScreenForm }) {
    const [summonerName, setSummonerName] = useState();
    const [summonerNameStatus, setSummonerNameStatus] = useState();
    const [postcode, setPostcode] = useState();
    const [postcodeStatus, setPostcodeStatus] = useState();
    const [region, setRegion] = useState('EUW');

    function isSummonerName(summonerName) {
        return summonerName !== '' ? true : false
    }

    function handleSummonerNameRequest(summonerName) {
        if (!isSummonerName(summonerName)) {
            setSummonerNameStatus(false)
            return
        }

        if (postcodeStatus) {
            return
        }

        fetch(
            `http://api.postcodes.io/postcodes/${postcode}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(json => {
                setPostcodeStatus(true)
                setSummonerName(summonerName)
            })
    }

    function isPostcode(postcode) {
        return postcode !== '' ? true : false
    }

    function handlePostcodeRequest(postcode) {
        if (!isPostcode(postcode)) {
            setPostcodeStatus(false)
            return
        }

        if (postcodeStatus) {
            return
        }

        fetch(
            `http://api.postcodes.io/postcodes/${postcode}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(json => {
                setPostcodeStatus(true)
                setPostcode(postcode)
            })
    }

    function handleFormSubmission(event) {
        event.preventDefault()
        // setHomeScreenForm()
    }

    return (
        <form class="pure-form pure-form-stacked" onSubmit={handleFormSubmission}>
            <fieldset>
                <legend>Claim your ground</legend>

                <label>Summoner Name</label>
                <input
                    placeholder="e.g. meow side"
                    onBlur={(e) => { handleSummonerNameRequest(e.target.value) }} />
                <span class="pure-form-message">This is a required field.</span>
                {
                    summonerNameStatus === undefined
                        || summonerNameStatus === true
                        ? <></>
                        : <h2>bad summoner name</h2>
                }

                <label>Postcode</label>
                <input
                    placeholder="Postcode"
                    onBlur={(e) => handlePostcodeRequest(e.target.value)} />
                <span class="pure-form-message">This is a required field.</span>
                {
                    postcodeStatus === undefined || postcodeStatus === true
                        ? <></>
                        : <h2>bad postcode</h2>
                }

                <label>Region</label>
                <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}>
                    <option value="EUW">EUW</option>
                    <option value="EUNE">EUNE</option>
                </select>

                <button type="submit" class="pure-button pure-button-primary">Find out how much turf you own</button>
            </fieldset>
        </form>
    );
}

export default HomeScreenForm