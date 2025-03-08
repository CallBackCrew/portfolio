import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FooterHomeOne from './FooterHomeOne.jsx';
import ZeroHomeThree from './ZeroHomeThree.jsx';
import ServicesHomeThree from './ServicesHomeThree.jsx';
import AboutHomeThree from './AboutHomeThree.jsx';
import ProjectSliderHomeThree from './ProjectSliderHomeThree.jsx';
import BlogHomeThree from './BlogHomeThree.jsx';
import ClientHomeOne from './ClientHomeOne.jsx';
import HomeThreeHeader from './HomeTwoHeader.jsx';
import VideoHomeTwo from './Video.jsx';
import OfferSectionTwo from './Offer.jsx';
import ChooseUs from './ChooseUsHomeThree.jsx';
import CallToActionHomeTwo from './CallToActionHomeTwo.jsx';
import TestimonialSectionTwo from './Testimonial.jsx';
import ContactSectionTwo from './Contact.jsx';
import FeaturesSectionFour from './FeaturesHomeFour.jsx';
import LocationsSectionTwo from './Location.jsx';
import CallToActionFour from './CallToAction.jsx';

function HomeThree() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            
            <HomeThreeHeader action={drawerAction.toggle} />
            <ZeroHomeThree />
            <ClientHomeOne />
            <ServicesHomeThree />
            <AboutHomeThree />
            <VideoHomeTwo />
            <OfferSectionTwo />
            <ProjectSliderHomeThree />
            <ChooseUs />
            <CallToActionHomeTwo />
            <TestimonialSectionTwo />
            <ContactSectionTwo />
            <FeaturesSectionFour />
            <BlogHomeThree />
            <LocationsSectionTwo />
            <CallToActionFour />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default HomeThree;
