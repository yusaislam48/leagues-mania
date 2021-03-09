import React, { useEffect, useState } from 'react';
import Leagues from '../League/Leagues';
import './Home.css';

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    const newLeagues = leagues.slice(0, 30);

    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
    }, []);

    return (
        <div>
            <div className='cover-img mb-5 d-flex justify-content-center align-items-center'>
                <h1 className='text-center cover-text fs-1'>Leagues Mania</h1>
            </div>
            <div className='container'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        newLeagues.map(league => <Leagues key={league.idLeague} league={league}></Leagues>)
                    }
                </div>
            </div>
        </div>
        
    );
};

export default Home;