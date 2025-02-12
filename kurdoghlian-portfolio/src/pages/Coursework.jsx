import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const CourseworkContainer = styled.div`
  padding: ${props => props.theme.spacing.xlarge};
  max-width: 1000px;
  margin: 0 auto;
`;



const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.large};
`;

const Semester = styled(motion.div)`
  margin-bottom: ${props => props.theme.spacing.xlarge};
`;

const SemesterTitle = styled.h2`
  color: ${props => props.theme.colors.secondary};
  font-size: 1.5rem;
  margin-bottom: ${props => props.theme.spacing.medium};
  padding-bottom: ${props => props.theme.spacing.small};
  border-bottom: 2px solid ${props => props.theme.colors.accent};
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.spacing.medium};
`;


const CourseCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.cardBackground};
  padding: ${props => props.theme.spacing.medium};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: ${props => props.theme.spacing.medium};
  transition: transform 0.3s ease, background-color 0.3s ease;
`;

const CourseCode = styled.span`
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  min-width: 100px;
`;

const CourseTitle = styled.span`
  color: ${props => props.theme.colors.text};
`;

const coursework = {
  "Spring 2025": [
    { code: "CS3010", title: "Numerical Methods and Computing" },
    { code: "CS4080", title: "Concepts of Programming Languages" },
    { code: "CS4200", title: "Artificial Intelligence" },
    { code: "CS4800", title: "Software Engineering" }
  ],
  "Winter 2025": [
    { code: "CS3560", title: "Object-Oriented Design and Programming" }
  ],
  "Fall 2024": [
    { code: "CS2640", title: "Computer Organization and Assembly Programming" },
    { code: "CS3110", title: "Formal Languages and Automata" },
    { code: "CS3750", title: "Computers and Society" },
    { code: "CS4990", title: "Data Mining; Special Topics for UD Students" }
  ],
  "Spring 2024": [
    { code: "CS2400", title: "Data Structures & Advanced Programming" },
    { code: "CS2600", title: "Systems Programming" }
  ],
  "Fall 2023": [
    { code: "CS1300", title: "Discrete Structures" },
    { code: "CS1400", title: "Intro Programming & Problem Solving" },
    { code: "STA2260", title: "Probability and Statistics for CS" }
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

const Coursework = () => {
  return (
    <CourseworkContainer>
      <Title>Computer Science & Statistics Coursework</Title>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Object.entries(coursework).map(([semester, courses]) => (
          <Semester key={semester} variants={itemVariants}>
            <SemesterTitle>{semester}</SemesterTitle>
            <CourseGrid>
              {courses.map((course, index) => (
                <CourseCard 
                  key={`${semester}-${index}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                >
                  <CourseCode>{course.code}</CourseCode>
                  <CourseTitle>{course.title}</CourseTitle>
                </CourseCard>
              ))}
            </CourseGrid>
          </Semester>
        ))}
      </motion.div>
    </CourseworkContainer>
  );
};

export default Coursework;