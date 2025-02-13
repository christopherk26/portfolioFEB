import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import ThemeToggle from './ThemeToggle';

const NavContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${props => props.theme.spacing.medium};
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: ${props => props.theme.spacing.large};
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavItem = styled(Link)`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: ${props => props.isActive ? '600' : '400'};
  position: relative;
  text-decoration: none;
  font-size: 1rem;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${props => props.theme.colors.primary};
    transform: scaleX(${props => props.isActive ? 1 : 0});
    transition: transform 0.3s ease;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;

const SocialAndTheme = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.medium};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.medium};
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 1rem;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    color: ${props => props.theme.colors.primary};
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const Navigation = () => {
  const location = useLocation();

  return (
    <NavContainer>
      <NavContent>
        <NavList>
          <li><NavItem to="/" isActive={location.pathname === '/'}>Home</NavItem></li>
          <li><NavItem to="/contact" isActive={location.pathname === '/contact'}>Contact</NavItem></li>
          <li><NavItem to="/coursework" isActive={location.pathname === '/coursework'}>Coursework</NavItem></li>
          <li><NavItem to="/photography" isActive={location.pathname === '/photography'}>Photography</NavItem></li>
          <li><NavItem to="/projects" isActive={location.pathname === '/projects'}>Projects</NavItem></li>
          <li><NavItem to="/tech-stack" isActive={location.pathname === '/tech-stack'}>Tech Stack</NavItem></li>
        </NavList>

        <SocialAndTheme>
          <ThemeToggle />
          <SocialLinks>
            <SocialLink
              href="https://www.linkedin.com/in/christopher-kurdoghlian-77b20927a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon /> LinkedIn
            </SocialLink>
            <SocialLink
              href="https://github.com/christopherk26"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon /> GitHub
            </SocialLink>
          </SocialLinks>
        </SocialAndTheme>
      </NavContent>
    </NavContainer>
  );
};

export default Navigation;