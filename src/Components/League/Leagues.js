import React, { useEffect, useState } from 'react';
import LeagueCard from '../LeagueCard/LeagueCard';

const Leagues = (props) => {
    const {idLeague} = props.league;
    const [league, setLeague] = useState({});
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague(data.leagues[0]))
    }, [idLeague]);

    return (
        <div>
            <div className="col mb-4">
                <LeagueCard cardDetails={props.league} leagueDetails={league}></LeagueCard>
            </div>
        </div>
    );
};

export default Leagues;