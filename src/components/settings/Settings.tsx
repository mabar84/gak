import React from 'react';
import {ChooseColor} from '../choose-color/chooseColor';
import {styled} from 'styled-components';
import {gakTheme} from '../../styles/Theme.styled';
import {DemoSettings} from '../demo/DemoSettings';
import {SetSettings} from './set-settings/SetSettings';

export const Settings = () => {
    return (
        <StyledSettings className={'settings'}>
            <h4>Настройки приложения</h4>

            <div className="flex-container">
                <SetSettings/>

                <DemoSettings/>
            </div>


        </StyledSettings>
    );
};

const StyledSettings = styled.div`
  h4 {
    margin-bottom: 10px;
    text-transform: uppercase;
    text-align: center;
  }

  .flex-container {
    display: flex;
    gap: 20px;
    justify-content: space-between;
  }

`