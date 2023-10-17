import React from 'react';
import {ChooseColor} from '../../choose-color/chooseColor';
import {gakTheme} from '../../../styles/Theme.styled';
import {styled} from 'styled-components';
import {HeaderPropsType} from '../../header/Header';

export const SetSettings = (props: HeaderPropsType) => {
    return (
        <StyledSetSettings>
            <ChooseColor customColor={props.setTextColor} text={'Цвет текста'} color={gakTheme.colors.text}/>
            <ChooseColor customColor={props.setBackground} text={'Общий фон'} color={gakTheme.colors.background}/>
            <ChooseColor customColor={props.setPrimary} text={'Основной цвет'} color={gakTheme.colors.primary}/>
            <ChooseColor customColor={props.setSecondary} text={'Дополнительный цвет'}
                         color={gakTheme.colors.secondary}/>
        </StyledSetSettings>
    );
};

const StyledSetSettings = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 10px;


`;