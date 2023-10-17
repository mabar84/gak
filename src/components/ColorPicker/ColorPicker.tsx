import React, {useState} from 'react';
import {styled} from 'styled-components';

type ColorPickerPropsColor = {
    color: string
    customColor: (c: string) => void
}

export const ColorPicker = (props: ColorPickerPropsColor) => {
    const [color, setColor] = useState(props.color);
    console.log(props)

    const handleChange = (e: any) => {
        setColor(e.target.value)
        props.customColor(color);
    };

    return (
        <StyledColorPicker type="color" value={color} onChange={handleChange}>
        </StyledColorPicker>
    );
};

const StyledColorPicker = styled.input`
  width: 30px;
  height: 28px;
  padding: 0 2px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
