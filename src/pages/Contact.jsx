import React from 'react';
import styled from '@emotion/styled';
import castle from '../assets/images/castle.png';

const ContactContainer = styled.div`
  padding: ${props => props.theme.spacing.xlarge};
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactInfo = styled.div`
  margin-bottom: ${props => props.theme.spacing.xlarge};
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.large};
`;

const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.medium};
  margin-bottom: ${props => props.theme.spacing.xlarge};
`;

const EmailLink = styled.a`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-family: ${props => props.theme.fonts.secondary};
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const CastleImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
`;

const EmailLabel = styled.span`
  color: ${props => props.theme.colors.secondary};
  font-size: 0.9rem;
  font-family: ${props => props.theme.fonts.secondary};
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactInfo>
        <Title>Contact</Title>
        <EmailContainer>
          <div>
            <EmailLabel>Personal Email: </EmailLabel>
            <EmailLink href="mailto:ckurdoghlian@gmail.com">
              ckurdoghlian@gmail.com
            </EmailLink>
          </div>
          <div>
            <EmailLabel>Academic Email: </EmailLabel>
            <EmailLink href="mailto:ckurdoghlian@cpp.edu">
              ckurdoghlian@cpp.edu
            </EmailLink>
          </div>
        </EmailContainer>
      </ContactInfo>
      
      <CastleImage src={castle} alt="Castle" />
    </ContactContainer>
  );
};

export default Contact;