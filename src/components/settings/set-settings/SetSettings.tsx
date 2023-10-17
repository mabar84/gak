import React from 'react';
import {ChooseColor} from '../../choose-color/chooseColor';
import {gakTheme} from '../../../styles/Theme.styled';
import {styled} from 'styled-components';

type SetSettingsPropsType = {
    setTextColor: (c: string) => void
}


export const SetSettings = ({setTextColor}: SetSettingsPropsType) => {
    return (
        <StyledSetSettings>
            <ChooseColor setTextColor={setTextColor} text={'Цвет текста'} color={gakTheme.colors.text}/>
            {/*<ChooseColor text={'Общий фон'} color={gakTheme.colors.background}/>*/}
            {/*<ChooseColor text={'Основной цвет'} color={gakTheme.colors.primary}/>*/}
            {/*<ChooseColor text={'Дополнительный цвет'} color={gakTheme.colors.secondary}/>*/}
        </StyledSetSettings>
    );
};

const StyledSetSettings = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 10px;


`;