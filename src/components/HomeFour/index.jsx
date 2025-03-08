import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FooterHomeOne from './FooterHomeOne.jsx';
import BlogHomeThree from './Blog.jsx';
import ClientHomeOne from './ClientHomeOne.jsx';
import HeaderFour from './HeaderFour.jsx';
import ChooseUs from './ChooseUs.jsx';
import ContactSectionTwo from './Contact.jsx';
import CallToActionFour from './CallToAction.jsx';
import BannerSectionThree from './Banner.jsx';
import CallToActionTwo from './CallTo.jsx';
import ServicesHomeFour from './ServicesHomeFour.jsx';
import AboutSectionSix from './About.jsx';
import ProjectSliderHomeThree from './Project.jsx';
import WorkTabs from './Work.jsx';
import TestimonialCarousel from './Testimonial.jsx';
import FeaturesSectionFive from './Feature.jsx';
import IndustriesSection from './Industries.jsx';
import TeamSectionTwo from './Team.jsx';

function HomeFour() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            
            <HeaderFour action={drawerAction.toggle} />
            <BannerSectionThree />
            <CallToActionTwo />
            <ServicesHomeFour />
            <AboutSectionSix />
            <ProjectSliderHomeThree />
            <WorkTabs />
            <TestimonialCarousel />
            <FeaturesSectionFive />
            <ChooseUs />
            <IndustriesSection />
            <TeamSectionTwo />
            <ClientHomeOne />
            <BlogHomeThree />
            <ContactSectionTwo />
            <CallToActionFour />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default HomeFour;
