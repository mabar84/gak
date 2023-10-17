import React from 'react';
import {styled} from 'styled-components';
import {ColorPicker} from '../ColorPicker/ColorPicker';


type ChooseColorPropsType = {
    text: string
    color: string
    setTextColor: (c: string) => void
}

export const ChooseColor = ({text, color, setTextColor}: ChooseColorPropsType) => {
    return (
        <StyledChooseColor>
            <span>{text}</span>
            <ColorPicker setTextColor={setTextColor} color={color}/>
        </StyledChooseColor>
    );
};

const StyledChooseColor = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`