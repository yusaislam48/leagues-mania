import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const LeagueDetails = () => {
    const {leagueId} = useParams();

    const [league, setLeague] = useState({});

    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague(data.leagues[0]))
    }, [leagueId]);

    const {strLeague, strSport, intFormedYear, strGender, strCountry, strFacebook, strTwitter, strYoutube, strBadge} = league;


    return (
        <div>
            <h1>LeagueDetails here: {strLeague}</h1>
            {
                strGender === "Female"
                ?<p>Female</p>
                :<p>Male</p>
            }
        </div>
    );
};

export default LeagueDetails;