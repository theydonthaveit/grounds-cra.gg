import React, { useState } from 'react';

function HomeScreenForm({ setHomeScreenForm }) {
    const [summonerName, setSummonerName] = useState(null);
    const [postcode, setPostcode] = useState(null);
    const [region, setRegion] = useState('EUW');

    function handleFormSubmission(event) {
        event.preventDefault()
        setHomeScreenForm()
    }

    return (
        <form class="pure-form pure-form-stacked" onSubmit={handleFormSubmission}>
            <fieldset>
                <legend>Claim your ground</legend>

                <label>Summoner Name</label>
                <input
                    placeholder="e.g. meow side"
                    onBlur={(e) => setSummonerName(e.target.value)} />
                <span class="pure-form-message">This is a required field.</span>

                <label>Postcode</label>
                <input
                    placeholder="Postcode"
                    onBlur={(e) => setPostcode(e.target.value)} />
                <span class="pure-form-message">This is a required field.</span>

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