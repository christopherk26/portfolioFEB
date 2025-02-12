import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const ProjectsContainer = styled.div`
  padding: ${props => props.theme.spacing.xlarge};
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.large};
`;

const Description = styled.p`
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.xlarge};
  font-size: 1.1rem;
  max-width: 800px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.large};
  padding: ${props => props.theme.spacing.medium} 0;
`;

const ProjectCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid ${props => props.theme.colors.accent};
`;

const ProjectContent = styled.div`
  padding: ${props => props.theme.spacing.medium};
`;

const ProjectTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.small};
  font-family: ${props => props.theme.fonts.secondary};
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.lightText};
  font-size: 0.9rem;
  line-height: 1.5;
  transition: color 0.3s ease;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <Title>Projects</Title>
      <Description>
        Here are some of the projects I have worked on over the years. 
        Click on any project to view it in detail.
      </Description>
      
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            onClick={() => window.open(project.projectUrl, '_blank')}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <ProjectImage src={project.imageUrl} alt={project.title} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;