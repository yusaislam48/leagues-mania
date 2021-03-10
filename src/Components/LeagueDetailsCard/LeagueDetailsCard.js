import React from 'react';
import malePhoto from '../../Images/Photo/male.png'
import feMalePhoto from '../../Images/Photo/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack, faFlag, faVolleyballBall, faMars } from '@fortawesome/free-solid-svg-icons'


const LeagueDetailsCard = (props) => {
  const {strLeague, strGender, strSport, intFormedYear, strCountry} = props.league;
  return (
      <div className="card mb-3 p-2 bg-warning" style={{maxWidth: "100%", backgroundColor:"white", border:""}}>
        <div className="row g-0">

          <div className="col-md-7">
            <div className="card-body">
              <h2 style={{color:"white"}} className="card-title">{strLeague}</h2><br/>
              <p style={{fontWeight:"500"}} className="card-text"><FontAwesomeIcon icon={faThumbtack} /> Founded: {intFormedYear}</p>
              <p style={{fontWeight:"500"}}  className="card-text"><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
              <p style={{fontWeight:"500"}}  className="card-text"><FontAwesomeIcon icon={faVolleyballBall} /> Sports type: {strSport}</p>
              <p style={{fontWeight:"500"}}  className="card-text"><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
            </div>
          </div>

          {
              strGender === "Female"
                ?<div className="col-md-5">
                  <img style={{width:"100%"}} src={feMalePhoto} alt="..."/>
                </div>
                :<div className="col-md-5">
                  <img style={{width:"100%"}} src={malePhoto} alt="..."/>
                </div>
          }

        </div>
      </div>
  );
};

export default LeagueDetailsCard;