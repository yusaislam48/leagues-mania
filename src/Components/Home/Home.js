import React, { useEffect, useState } from 'react';
import League from '../League/League';

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    const newLeagues = leagues.slice(0, 30);

    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
    }, []);
    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    newLeagues.map(league => <League key={league.idLeague} league={league}></League>)
                }
            </div>
        </div>
    );
};

export default Home;