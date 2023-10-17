import React from 'react';
import {styled} from 'styled-components';
import {gakTheme} from '../../styles/Theme.styled';
import {Item} from '../item/Item';

export const DemoSettings = () => {
    const q1 = () => {
        localStorage.setItem('textColor', 'red')
        localStorage.setItem('background', '#000000')

    }
    return (
        <StyledDemoSettings className={'demo'}>
            <p className={'text'}>Демонстрация</p>

            <Item/>

            <button onClick={q1}>123</button>

        </StyledDemoSettings>
    );
};

const StyledDemoSettings = styled.div`
  width: 100%;
  background: ${gakTheme.colors.background};
  border: 1px solid #000000;
  border-radius: 10px;

  p {
    padding: 5px;
    margin: 0 auto 30px;
    text-align: center;
      // background-color: ${gakTheme.colors.primary};
      // color: ${gakTheme.colors.text};
    width: calc(100% - 40px);
    border-radius: 0 0 10px 10px;
    text-transform: uppercase;
    font-weight: 500;
  }

  button {
    margin: 0 auto;
    display: block;
    background-color: ${gakTheme.colors.secondary};
  }

`