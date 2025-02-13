import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import chris from '../assets/images/chris0.png';

const HomeContainer = styled.div`
  padding: ${props => props.theme.spacing.xlarge};
  max-width: 1200px;
  margin: 0 auto;
`;

const Hero = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.xlarge};
  margin-bottom: ${props => props.theme.spacing.xlarge};
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HeroContent = styled.div`
  flex: 1;
`;

const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const Subtitle = styled.h2`
  color: ${props => props.theme.colors.secondary};
  font-size: 1.5rem;
  margin-bottom: ${props => props.theme.spacing.large};
`;

const Section = styled.section`
  margin-bottom: ${props => props.theme.spacing.xlarge};
`;

const SectionTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.medium};
  font-size: 1.3rem;
`;

const Text = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.6;
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const InterestsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${props => props.theme.spacing.large};
  margin-top: ${props => props.theme.spacing.large};
`;

const InterestCard = styled.div`
  padding: ${props => props.theme.spacing.medium};
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
`;



const InterestTitle = styled.h4`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing.small};
`;


const SiteSection = styled(Link)`
  display: block;
  padding: ${props => props.theme.spacing.medium};
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: ${props => props.theme.spacing.medium};
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero>
        <HeroContent>
          <Title>Christopher Kurdoghlian</Title>
          <Subtitle>Computer Science Student & Developer</Subtitle>
          <Text>
            Welcome! I'm a Computer Science major with a minor in Data Science at California
            Polytechnic State University Pomona.
          </Text>
        </HeroContent>
        <ImageContainer>
          <ProfileImage src={chris} alt="Christopher Kurdoghlian" />
        </ImageContainer>
      </Hero>

      <Section>
        <SectionTitle>About Me</SectionTitle>
        <Text>
          Beyond my academic pursuits, I enjoy reading, running, LEGO, and photography.
        </Text>

  
      </Section>


      <Section>
        <SectionTitle>Explore My Website</SectionTitle>
        <SiteSection to="/projects">
          <InterestTitle>Projects</InterestTitle>
          <Text>Explore my technical projects, including web applications and software solutions.</Text>
        </SiteSection>
        <SiteSection to="/coursework">
          <InterestTitle>Coursework</InterestTitle>
          <Text>View my academic journey through Computer Science and Data Science courses.</Text>
        </SiteSection>
        <SiteSection to="/photography">
          <InterestTitle>Photography</InterestTitle>
          <Text>Browse through my collection of photographs capturing various moments and scenes.</Text>
        </SiteSection>
        <SiteSection to="/tech-stack">
          <InterestTitle>Tech Stack</InterestTitle>
          <Text>Discover the programming languages, frameworks, and tools I use to build solutions.</Text>
        </SiteSection>
        <SiteSection to="/contact">
          <InterestTitle>Contact</InterestTitle>
          <Text>Get in touch with me for collaborations or opportunities.</Text>
        </SiteSection>
      </Section>
    </HomeContainer>
  );
};

export default Home;