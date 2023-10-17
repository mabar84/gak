import React from 'react';
import {styled} from 'styled-components';
import {gakTheme} from '../../styles/Theme.styled';

export const StyledButton = styled.button`
  min-width: 80px;
  padding: 5px;
  background: ${gakTheme.colors.secondary};
  color: ${gakTheme.colors.text};
  border-radius: 5px;
  cursor: pointer;
  border: none;
  outline: none;
  font-weight: 500;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    box-shadow: none;
    border: none;
    outline: none;
    transform: translateY(1px);


  }
`
