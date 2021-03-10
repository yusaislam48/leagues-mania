import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import './LeagueCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const LeagueCard = (props) => {
    
  const {idLeague, strLeague, strSport} = props.cardDetails;
  const {strBadge} = props.leagueDetails;

  const history = useHistory();
  const exploreBtnHandler = (idLeague) => {
      history.push(`/league/${idLeague}`);
  };

    return (
        <div >
            <div className="card h-100">
                <img src={strBadge} className="card-img-top strBadge img-fluid strBadge" alt={strLeague} />
                <div className="card-body">
                    <h3 className="card-title">{strLeague}</h3>
                    <h5 className="card-text">Sports Details: {strSport}</h5><br/>
                    <Button onClick={()=>exploreBtnHandler(idLeague)} variant="contained" color="secondary"><span>Explore <FontAwesomeIcon icon={faArrowRight} /></span></Button>
                </div>
            </div>
        </div>
    );
};

export default LeagueCard;