import React from 'react';
import './styles.css';
import logoImg from '../../assets/images/main/logo.svg';
import landingImg from '../../assets/images/main/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';


function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Your online studyng tool.</h2>
                </div>
                <img src={landingImg} alt="study platform" className="hero-image"/>
                <div className="buttons-container">
                    <a href="" className="study">
                      <img src={studyIcon} alt="study"/>
                        Study
                    </a>
                    <a href="" className="give-classes">
                      <img src={giveClassesIcon} alt="study"/>
                        Give Classes
                    </a>
                </div>
                <span className="total-connections">
                    Total of 200 successful connections <img src={purpleHeartIcon} alt="heart"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;