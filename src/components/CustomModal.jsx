// CustomModal.js

import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for fade-in and fade-out animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; }
`;

// Styled components for the Modal
const ModalWrapper = styled.div`
  position: fixed;
  font-family: 'Pretendard-Medium';
  color: white;
  top: 0;
  left: 0;
  font-size: 1.35vw;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${(props) => (props.show ? fadeIn : fadeOut)} 0.5s forwards;
`;

const ModalContent = styled.div`
  border: solid 1px #E5E5E5;
  background: #222222;
  padding: 2vw;
  border-radius: 10px;
  text-align: center;
  width: 30vw;
  animation: ${(props) => (props.show ? fadeIn : fadeOut)} 0.5s forwards;
`;

const ModalButton = styled.button`
  margin-top: 2vw;
  width: 7vw;
  height: 3.4vw;
  background-color: rgba(255, 255, 255, 0.8);
  color: #080808;
  font-family: 'Pretendard-Medium';
  border-radius: 0.8vw;
  border: 1px solid #787878;
  transition: 0.5s ease;
  text-align: center;
  font-size: 1.14vw;
  cursor: pointer;

  &:hover {
    border: 1px solid white;
    color: #080808;
    background-color: white;
    transition: 0.5s ease;
  }
`;

// The reusable Modal component
export const CustomModal = ({ show, onClose, children }) => {
    const [visible, setVisible] = useState(show);

    useEffect(() => {
        if (show) {
            setVisible(true);
        } else {
            const timer = setTimeout(() => setVisible(false), 500); // Match the fade-out duration
            return () => clearTimeout(timer);
        }
    }, [show]);

    if (!visible) return null;

    return (
        <ModalWrapper show={show}>
            <ModalContent show={show}>
                {children}
                <ModalButton onClick={onClose}>닫기</ModalButton>
            </ModalContent>
        </ModalWrapper>
    );
};

