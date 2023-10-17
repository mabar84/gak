import React from 'react';
import {styled} from 'styled-components';

export const DemoSettings = () => {

    return (
        <StyledDemoSettings className={'demo'}>
            <p className={'text primary'}>Демонстрация</p>

            <button className={'text item'}>
                Пункт конфигуратора
            </button>
        </StyledDemoSettings>
    );
};

const StyledDemoSettings = styled.div`
  width: 100%;
  border: 1px solid #000000;
  border-radius: 10px;

  p {
    padding: 5px;
    margin: 0 auto 30px;
    text-align: center;
    width: calc(100% - 40px);
    border-radius: 0 0 10px 10px;
    text-transform: uppercase;
    font-weight: 500;
  }

  button {
    margin: 0 auto;
    min-width: 80px;
    width: max-content;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    outline: none;
    font-weight: 500;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }

`