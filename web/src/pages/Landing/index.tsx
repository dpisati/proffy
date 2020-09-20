import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/images/main/logo.svg';
import landingImg from '../../assets/images/main/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(res => {
            const { total } = res.data;
            setTotalConnections(total);
        })
    }, [])

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Your online studyng tool.</h2>
                </div>
                <img src={landingImg} alt="study platform" className="hero-image"/>
                <div className="buttons-container">
                    <Link to="/study" className="study">
                      <img src={studyIcon} alt="study"/>
                        Study
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                      <img src={giveClassesIcon} alt="study"/>
                        Give Classes
                    </Link>
                </div>
                <span className="total-connections">
                    Total of {totalConnections} successful connections <img src={purpleHeartIcon} alt="heart"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;