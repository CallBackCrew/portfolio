import React from 'react';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import HeroPageTitle from './HeroPageTitle.jsx';
import ProjectSliderHomeOne from '../HomeOne/ProjectSliderHomeOne.jsx';
import AboutSectionSix from '../HomeFour/About2.jsx';
import IndustriesSection from '../HomeFive/Industries.jsx';
import TeamSectionTwo from '../HomeFour/Team.jsx';
import ClientHomeOne from '../HomeOne/ClientHomeOne2.jsx';

function AboutUs() {

    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="About Us"
                breadcrumb={[
                    { Link : '/', title: 'Home' },
                    { Link : '/about-us', title: 'About us' },
                ]}
            />
            <AboutSectionSix />
            <IndustriesSection />
            <ProjectSliderHomeOne />
            <TeamSectionTwo />
            <ClientHomeOne />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default AboutUs;
