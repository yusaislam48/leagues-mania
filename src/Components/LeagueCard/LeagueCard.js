import { Button } from '@material-ui/core';
import React from 'react';
import './LeagueCard.css';

const LeagueCard = (props) => {
    
  const {strLeague, strSport} = props.cardDetails;
  const {strBadge} = props.leagueDetails;

    return (
        <div >
            {/* <img className='strBadge' src={strBadge} alt=""/>
            <h2>{strLeague}</h2>
            <h5>Sports Details: {strSport}</h5> */}

            <div className="card h-100">
                <img src={strBadge} className="card-img-top strBadge img-fluid" alt={strLeague} />
                <div className="card-body">
                    <h3 className="card-title">{strLeague}</h3>
                    <h5 className="card-text">Sports Details: {strSport}</h5><br/>
                    <Button variant="contained" color="secondary">Explore</Button>
                </div>
            </div>
        </div>
    );
};

export default LeagueCard;