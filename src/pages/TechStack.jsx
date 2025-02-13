import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const TechStackContainer = styled.div`
  padding: ${props => props.theme.spacing.xlarge};
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.large};
`;

const Category = styled(motion.div)`
  margin-bottom: ${props => props.theme.spacing.xlarge};
`;

const CategoryTitle = styled.h2`
  color: ${props => props.theme.colors.secondary};
  font-size: 1.5rem;
  margin-bottom: ${props => props.theme.spacing.medium};
  padding-bottom: ${props => props.theme.spacing.small};
  border-bottom: 2px solid ${props => props.theme.colors.accent};
`;

const ToolGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.medium};
`;

const ToolCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.cardBackground};
  padding: ${props => props.theme.spacing.medium};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ToolName = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-size: 1.1rem;
  margin-bottom: ${props => props.theme.spacing.small};
`;

const ToolDescription = styled.p`
  color: ${props => props.theme.colors.lightText};
  font-size: 0.9rem;
  line-height: 1.5;
`;

const tools = {
    "Programming Languages": [
      { name: "Python", description: "Advanced proficiency with data science libraries, web development, and automation" },
      { name: "Java", description: "Strong foundation from both college and high school coursework" },
      { name: "C", description: "Systems programming and low-level development" },
      { name: "Bash", description: "Shell scripting and automation" }
    ],
    "Data Science & ML": [
      { name: "NumPy", description: "Numerical computing and array operations" },
      { name: "Pandas", description: "Data manipulation and analysis" },
      { name: "Matplotlib", description: "Data visualization" },
      { name: "Scikit-learn", description: "Machine learning implementations" },
      { name: "BigQuery", description: "SQL and large-scale data analysis" }
    ],
    "Cloud & Backend": [
      { name: "AWS Services", description: "Cloud computing and deployment" },
      { name: "Firebase", description: "Backend as a Service, real-time database, and authentication" },
      { name: "PostgreSQL", description: "Database management" },
      { name: "Django", description: "Python web framework" }
    ],
    "Development Tools": [
      { name: "Git", description: "Version control and collaboration" },
      { name: "Unix Command Line", description: "System administration and automation" },
      { name: "ORM Tools", description: "Object-relational mapping" },
      { name: "React", description: "Frontend development" },
      { name: "Streamlit", description: "Data application development" }
    ],
    "Productivity Suites": [
      { name: "Google Workspace", description: "Collaborative tools and document management" },
      { name: "Microsoft Office", description: "Professional document creation and analysis" }
    ]
  };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};

const TechStack = () => {
  return (
    <TechStackContainer>
      <Title>Tech Stack</Title>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Object.entries(tools).map(([category, items]) => (
          <Category key={category} variants={itemVariants}>
            <CategoryTitle>{category}</CategoryTitle>
            <ToolGrid>
              {items.map((tool, index) => (
                <ToolCard 
                  key={`${category}-${index}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <ToolName>{tool.name}</ToolName>
                  <ToolDescription>{tool.description}</ToolDescription>
                </ToolCard>
              ))}
            </ToolGrid>
          </Category>
        ))}
      </motion.div>
    </TechStackContainer>
  );
};

export default TechStack;