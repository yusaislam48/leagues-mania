import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LeagueDetailsCard from '../LeagueDetailsCard/LeagueDetailsCard';
import './LeagueDetails.css';
import facebookLogo from '../../Images/Icon/Facebook.png';
import twitterLogo from '../../Images/Icon/Twitter.png';
import youtubeLogo from '../../Images/Icon/YouTube.png';

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
    const {strBadge, strYoutube, strTwitter, strFacebook} = league;


    return (
        <div>
            <div className='cover-img mb-5 d-flex justify-content-center align-items-center'>
                <img className='thumb-img img-fluid' src={strBadge} alt=""/>
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
                <div className="text-center socialIcon mb-5">
                    <img onClick={()=>window.open(`https://${strTwitter}`)} src={twitterLogo} alt=""/>
                    <img onClick={()=>window.open(`https://${strFacebook}`)} src={facebookLogo} alt=""/>
                    <img onClick={()=>window.open(`https://${strYoutube}`)} src={youtubeLogo} alt=""/>
                </div>

            </div>

        </div>
    );
};

export default LeagueDetails;