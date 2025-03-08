import React from 'react';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import HeroPageTitle from './HeroPageTitle.jsx';
import Projects from './Projects.jsx';

function ProjectsPages() {

    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="Projects"
                breadcrumb={[
                    { Link : '/', title: 'Home' },
                    { Link : '/projects', title: 'Projects' },
                ]}
            />
            <Projects />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default ProjectsPages;
