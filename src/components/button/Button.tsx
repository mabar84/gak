import React from 'react';
import {styled} from 'styled-components';
import {gakTheme} from '../../styles/Theme.styled';

export const Button = () => {
    return (
        <StyledButton>
            Демонстрация
        </StyledButton>
    );
};

export const StyledButton = styled.button`
  min-width: 80px;
  padding: 5px;
  background: ${gakTheme.colors.secondary};
  color: ${gakTheme.colors.text};
  border-radius: 5px;
  cursor: pointer;
  border: none;
  box-shadow: 0px 1px ${gakTheme.colors.background};
  outline: none;
  font-weight: 500;

  &:active {
    box-shadow: none;
    border: none;
    outline: none;
    transform: translateY(1px);
  }
`
