import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LeagueDetailsCard from '../LeagueDetailsCard/LeagueDetailsCard';
import './LeagueDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons'


const LeagueDetails = () => {
    const {leagueId} = useParams();

    const [league, setLeague] = useState({});

    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague(data.leagues[0]))
    }, [leagueId]);

    // strSport, intFormedYear, , strCountry, strFacebook, strTwitter, strYoutube,
    const {strBadge, strYoutube, strTwitter, strFacebook, strBanner} = league;

    const leagueDetailsBannerStyle = {
        width: "100%",
        height: "300px",
        backgroundImage: `url(${strBanner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
    };


    return (
        <div>
            <div style={leagueDetailsBannerStyle} className=' mb-5 d-flex justify-content-center align-items-center'>
                {/* <div className="thumb-img-div"> */}
                    <img className='thumb-img img-fluid' src={strBadge} alt=""/>
                {/* </div> */}
            </div>

            <div className="container ">
                <div>
                    <LeagueDetailsCard league={league}></LeagueDetailsCard>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iusto dignissimos sapiente eius repellendus maxime quibusdam earum, nobis delectus, reprehenderit sequi magni ducimus suscipit ea assumenda eum. Nobis, similique, officiis deserunt error nulla praesentium excepturi quisquam ipsam eveniet itaque at dolore deleniti quam, earum illo quibusdam neque saepe quaerat obcaecati quas quis nostrum! Rem, laudantium eveniet unde tenetur distinctio voluptatem!</p>
                    <br/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat mollitia magni optio saepe incidunt illum expedita itaque minus nam corporis ducimus excepturi vel aperiam inventore hic quis placeat nihil blanditiis quibusdam, perspiciatis porro fugiat culpa laborum. Velit, earum mollitia! Aliquam tenetur at ab tempora voluptatum perspiciatis, asperiores temporibus quae aut adipisci error laboriosam debitis corporis ducimus sequi? Fuga, iste consectetur.</p>
                </div><br/>
                <div className=" d-flex justify-content-center aling-item-center socialIcon mb-5">
                    <h1 style={{color:"#00ACEE"}} onClick={()=>window.open(`https://${strTwitter}`)}><FontAwesomeIcon icon={faTwitterSquare} /></h1>

                    <h1 style={{color:"#3b5998"}} onClick={()=>window.open(`https://${strFacebook}`)}><FontAwesomeIcon icon={faFacebook} /></h1>

                    <h1 style={{color:"#c4302b"}} onClick={()=>window.open(`https://${strYoutube}`)}><FontAwesomeIcon icon={faYoutube} /></h1>
                    
                </div>

            </div>

        </div>
    );
};

export default LeagueDetails;