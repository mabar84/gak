import React, {useState} from 'react';
import {styled} from 'styled-components';
import {gakTheme} from '../../styles/Theme.styled';

type ColorPickerPropsColor = {
    color: string
    setTextColor: (c: string) => void
}

export const ColorPicker = (props: ColorPickerPropsColor) => {
    const [color, setColor] = useState(props.color);

    const handleChange = (e: any) => {
        setColor(e.target.value)
        props.setTextColor(color);

    };

    return (
        <StyledColorPicker type="color" value={color} onChange={handleChange}>

        </StyledColorPicker>
    );
};

const StyledColorPicker = styled.input`
  width: 30px;
  height: 28px;
  padding: 0px 2px;
  border: none;
  border-radius: 5px;
  cursor: pointer;



`
