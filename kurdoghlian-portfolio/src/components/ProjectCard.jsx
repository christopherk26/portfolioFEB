import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 8px;
  padding: ${props => props.theme.spacing.large};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;
const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const ProjectTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.small};
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.lightText};
  font-size: 0.9rem;
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <Card
      whileHover={{ y: -5 }}
      onClick={() => window.open(projectUrl, '_blank')}
    >
      <ProjectImage src={imageUrl} alt={title} />
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
    </Card>
  );
};

export default ProjectCard;