import React from 'react';
import {styled} from 'styled-components';
import {gakTheme} from '../../styles/Theme.styled';
import {Button} from '../button/Button';

export const DemoSettings = () => {
    return (
        <StyledDemoSettings>
            <h4>Демонстрация</h4>

            <Button/>

        </StyledDemoSettings>
    );
};

const StyledDemoSettings = styled.div`
  width: 100%;
  background: ${gakTheme.colors.background};
  border: 1px solid #000000;
  border-radius: 10px;

  h4 {
    padding: 5px;
    margin: 0 auto 30px;
    background-color: ${gakTheme.colors.primary};
    color: ${gakTheme.colors.text};
    width: calc(100% - 40px);
    border-radius: 0 0 10px 10px;
  }

  button {
    margin: 0 auto;
    display: block;
    background-color: ${gakTheme.colors.secondary};
  }

`