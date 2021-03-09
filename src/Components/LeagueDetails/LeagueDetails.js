import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LeagueDetailsCard from '../LeagueDetailsCard/LeagueDetailsCard';
import './LeagueDetails.css';

const LeagueDetails = () => {
    const {leagueId} = useParams();

    const [league, setLeague] = useState({});

    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague(data.leagues[0]))
    }, [leagueId]);

    // strSport, intFormedYear, strGender, strCountry, strFacebook, strTwitter, strYoutube,
    const {strLeague,  strBadge} = league;


    return (
        <div>
            <div className='cover-img mb-5 d-flex justify-content-center align-items-center'>
                <img className='thumb-img img-fluid' src={strBadge} alt=""/>
            </div>

            <div className="container">
                <h1>LeagueDetails here: {strLeague}</h1>
                    {
                        strGender === "Female"
                        ?<p>Female</p>
                        :<p>Male</p>
                    }

                    <LeagueDetailsCard strGender={strGender}></LeagueDetailsCard>
            </div>

        </div>
    );
};

export default LeagueDetails;