import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { photos } from '../assets/photography';

const PhotoContainer = styled.div`
  padding: ${props => props.theme.spacing.xlarge};
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.large};
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.medium};
  padding: ${props => props.theme.spacing.medium} 0;
`;

const PhotoCard = styled(motion.div)`
  position: relative;
  aspect-ratio: 3/2;
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${PhotoCard}:hover & {
    transform: scale(1.05);
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: ${props => props.theme.spacing.xlarge};
`;

const ModalContent = styled(motion.div)`
  max-width: 90vw;
  max-height: 90vh;
  position: relative;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
`;

const Caption = styled.p`
  color: white;
  text-align: center;
  margin-top: ${props => props.theme.spacing.medium};
  font-family: ${props => props.theme.fonts.secondary};
`;

const Photography = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <PhotoContainer>
      <Title>Photography</Title>
      
      <PhotoGrid>
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <PhotoImage src={photo.src} alt={photo.alt} />
          </PhotoCard>
        ))}
      </PhotoGrid>

      <AnimatePresence>
        {selectedPhoto && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <ModalContent
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <CloseButton onClick={() => setSelectedPhoto(null)}>×</CloseButton>
              <ModalImage src={selectedPhoto.src} alt={selectedPhoto.alt} />
              <Caption>{selectedPhoto.caption}</Caption>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </PhotoContainer>
  );
};

export default Photography;