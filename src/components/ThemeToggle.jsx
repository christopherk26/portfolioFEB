import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '../context/ThemeContext';

const ToggleButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${props => props.theme.fonts.secondary};
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
`;

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme}>
      <Icon>
        {isDark ? (
          // Sun icon
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
        ) : (
          // Moon icon
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </Icon>
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </ToggleButton>
  );
};

export default ThemeToggle;