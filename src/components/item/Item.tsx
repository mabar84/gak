import React from 'react';
import {styled} from 'styled-components';
import {gakTheme} from '../../styles/Theme.styled';

export const Item = () => {
    return (
        <StyledItem>
            Пункт конфигуратора
        </StyledItem>
    );
};

const StyledItem = styled.div`
  min-width: 80px;
  width: max-content;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${gakTheme.colors.secondary};
  color: ${gakTheme.colors.text};
  border-radius: 10px;
  cursor: pointer;
  border: none;
  outline: none;
  font-weight: 500;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`


