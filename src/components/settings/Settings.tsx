import React from 'react';
import {styled} from 'styled-components';
import {DemoSettings} from '../demo/DemoSettings';
import {SetSettings} from './set-settings/SetSettings';
import {StyledButton} from '../button/Button';

type SettingsPropsType = {
    setTextColor: (c: string) => void
}

export const Settings = ({setTextColor}: SettingsPropsType) => {
    return (
        <StyledSettings className={'settings'}>
            <h4>Настройки приложения</h4>

            <div className="flex-container">
                <SetSettings setTextColor={setTextColor}/>

                <DemoSettings/>
            </div>

            <div className="buttons-container">
                <StyledButton>
                    Сохранить
                </StyledButton>
                <StyledButton>
                    Отмена
                </StyledButton>
                <StyledButton>
                    Установить настройки по умолчанию
                </StyledButton>
            </div>


        </StyledSettings>
    );
};

const StyledSettings = styled.div`
  h4 {
    margin-bottom: 20px;
    text-transform: uppercase;
    text-align: center;
  }

  .flex-container {
    margin-bottom: 20px;
    display: flex;
    gap: 20px;
    justify-content: space-between;
  }

  .buttons-container {
    display: flex;
    gap: 10px;
  }

`