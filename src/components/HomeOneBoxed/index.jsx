import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FooterHomeOne from './FooterHomeOne.jsx';
import ZeroHomeOne from './ZeroHomeOne.jsx';
import AboutHomeOne from './AboutHomeOne.jsx';
import ServiceHomeOne from './ServiceHomeOne.jsx';
import ProjectSliderHomeOne from './ProjectSliderHomeOne.jsx';
import FaqHomeOne from './FaqHomeOne.jsx';
import ClientHomeOne from './ClientHomeOne.jsx';
import BlogHomeOne from './BlogHomeOne.jsx';
import CallToActionHomeOne from './CallToActionHomeOne.jsx';
import HomeOneHeader from './HomeOneHeader.jsx';
import Offer from './Offer.jsx';
import TestimonialSection from './TestimonialHomeOne.jsx';
import FunfactSection from './Funfact.jsx';
import TeamSection from './Team.jsx';
import Call from './Call.jsx';
import MapSection from './Map.jsx';

function HomeOne() {
    const [drawer, drawerAction] = useToggle(false);

    useEffect(() => {
        // Set body attributes
        document.body.classList.add('tm-boxed-layout');
        document.body.setAttribute('data-tm-bg-img', '../src/assets/images/pattern/p13.png');

        // Cleanup function to remove attributes on component unmount
        return () => {
            document.body.classList.remove('tm-boxed-layout');
            document.body.removeAttribute('data-tm-bg-img');
        };
    }, []);

    return (
        <>
            <HomeOneHeader action={drawerAction.toggle} />
            <ZeroHomeOne />
            <AboutHomeOne />
            <ServiceHomeOne />
            <Offer />
            <CallToActionHomeOne />
            <ProjectSliderHomeOne />
            <TestimonialSection />
            <FunfactSection />
            <TeamSection />
            <ClientHomeOne />
            <FaqHomeOne />
            <BlogHomeOne />
            <Call />
            <MapSection />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default HomeOne;
