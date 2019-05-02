import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import Projects from "../views/Projects";
import About from "../views/About";
import Contact from "../views/Contact";

import avatar from "../images/avatar.jpg";

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Utsav Bhavsar.
        </BigTitle>
        <Subtitle>Full stack developer based in Ahmedabad.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Wizarding World"
            link="https://www.wizardingworld.com"
            bg="linear-gradient(to right, #1F1F1F 0%, #BEAE7D 100%)"
          >
            <b>Role</b>: Full Stack Developer
            <br />
            The official home for all fans of Harry Potter and Fantastic Beasts.
          </ProjectCard>
          <ProjectCard
            title="Happiness Factory"
            link="https://happinessfactory.app/"
            bg="linear-gradient(to right, #FFC101 0%, #FE5801 100%)"
          >
            <b>Role</b>: Full Stack Developer
            <br />
            Happiness Factory is an React Native(Android, IOS) app with to do a
            little good for the world. It came to Solve for Happy.
          </ProjectCard>
          <ProjectCard
            title="PMC"
            bg="linear-gradient(to right, #000000 0%, #012B74 100%)"
          >
            <b>Role</b>: Front-End Developer
            <br />
            Read data from TANK with Modbus and display it on real time graphs.
          </ProjectCard>
          <ProjectCard
            title="Nurse Care Platform"
            bg="linear-gradient(to right, black 0%, yellow 100%)"
          >
            <b>Role</b>: Full Stack Developer, Dev-ops Engineer
            <br />
            Communications in hospitals and senior housing facilities have long
            been handled by multiple devices. Nurse Call Messaging, VoIP phone
            systems and nurse to nurse individual and group chat.
          </ProjectCard>
          <ProjectCard
            title="Upload My Products"
            link="http://uploadmyproducts.com/"
            bg="linear-gradient(to right, #5B9024 0%, #FEFEFE 100%)"
          >
            <b>Role</b>: Web Developer
            <br />
            Upload Your Products to Multiple Marketplaces. Work as a middleware
            where it pull user's data and push to different platforms like eBay,
            Amazon, Google Shopping, Rakuten etc.
          </ProjectCard>
          <ProjectCard
            title="Rishtey TV"
            link="//www.colorsrishtey.com"
            bg="linear-gradient(to right, #0B0B10 0%, #F6A422 100%)"
          >
            <b>Role</b>: Web Developer
            <br />
            This project is my entry to Adobe's #ChallengeYourPerspective
            contest.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Utsav Bhavsar" />
          <AboutSub>
            {`I'm Full Stack Developer for `}
            <a href="https://techholding.co" target="__blank">
              Tech Holding
            </a>
            {` in Ahmedabad. Previously, worked as a Full Stack Developer at Quark Studios and as Web Developer at Thinktanker and got my Diploma and Bachelor of Engineering at Gujrat Technological University in Informatino Technology. For more info, check out my `}
            <a href="https://drive.google.com/file/d/19Ol93RRslU34AIRt_8WWtFr2ZNwDeF5u/view" target="__blank">
              resume.
            </a>
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          {`I enjoy turning complex problems into simple and Loves to write Neat and Pixel-Perfect code. In free time I loves to try new food, watch movies, bike riding and explore new places.`}
          <br />
          <br />
          {`Good code is it's own best documentation. - Steve McConell`}
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:utsavb96@gmail.com">Hi</a> or find me on other
            platforms: <a href="http://twitter.com/utsavbh">Twitter</a> &{" "}
            <a href="http://linkedin.nl/in/utsavb96/">Linkedin</a>
          </ContactText>
        </Inner>
        <Footer>&copy; 2019 by Utsav Bhavsar.</Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;
