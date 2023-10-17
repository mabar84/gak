import React from 'react';
import {styled} from 'styled-components';
import {ColorPicker} from '../ColorPicker/ColorPicker';

type ChooseColorPropsType = {
    text: string
    color: string
    customColor: (c: string) => void
}

export const ChooseColor = (props: ChooseColorPropsType) => {
    return (
        <StyledChooseColor>
            <span>{props.text}</span>
            <ColorPicker customColor={props.customColor} color={props.color}/>
        </StyledChooseColor>
    );
};

const StyledChooseColor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`