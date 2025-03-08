import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FooterHomeOne from './FooterHomeOne.jsx';
import ZeroHomeOne from './ZeroHomeTwo.jsx';
import FeatureHomeTwo from './FeatureHomeTwo.jsx';
import AboutHomeTwo from './AboutHomeTwo.jsx';
import FunfactHomeTwo from './FunfactHomeTwo.jsx';
import ProjectSliderHomeTwo from './ProjectSliderHomeTwo.jsx';
import ContactHomeTwo from './ContactHomeTwo.jsx';
import BlogHomeTwo from './BlogHomeTwo.jsx';
import CallToActionHomeTwo from './CallToActionHomeTwo.jsx';
import ClientHomeOne from './ClientHomeOne.jsx';
import MapHomeTwo from './MapHomeTwo.jsx';
import HomeTwoHeader from './HomeTwoHeader.jsx';
import OfferSectionTwo from './Offer.jsx';
import AboutSectionFour from './About2nd.jsx';
import FeaturesSectionThree from './Feature2HomeTwo.jsx';
import ServicesSectionTwo from './ServiceHomeTwo.jsx';
import LocationsSection from './Location.jsx';
import WhyChooseUs from './ChooseUs.jsx';

function HomeTwo() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            
            <HomeTwoHeader action={drawerAction.toggle} />
            <ZeroHomeOne />
            <FeatureHomeTwo />
            <AboutHomeTwo />
            <ProjectSliderHomeTwo />
            <OfferSectionTwo />
            <FunfactHomeTwo />
            <AboutSectionFour />
            <ClientHomeOne />
            <FeaturesSectionThree />
            <ServicesSectionTwo />
            <LocationsSection />
            <WhyChooseUs />
            <ContactHomeTwo />
            <BlogHomeTwo />
            <CallToActionHomeTwo />
            <MapHomeTwo />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default HomeTwo;