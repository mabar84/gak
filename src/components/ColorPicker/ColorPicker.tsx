import React, {useState} from "react";
import {styled} from "styled-components";
import {gakTheme} from "../../styles/Theme.styled";

export const ColorPicker = () => {
    const [color, setColor] = useState(gakTheme.colors.primary_background);

    const handleChange = (e: any) => {
        setColor(e.target.value);
    };

    return (
        <StyledColorPicker type="color" value={color} onChange={handleChange}>
            {/*<div*/}
            {/*    style={{*/}
            {/*        backgroundColor: color,*/}
            {/*        width: "100px",*/}
            {/*        height: "100px",*/}
            {/*        marginTop: "10px",*/}
            {/*    }}*/}
            {/*></div>*/}
        </StyledColorPicker>
    );
};

const StyledColorPicker = styled.input`
  padding: 0px;
  background-color: transparent;
  border: none;
  //border-radius: 5px;


`
