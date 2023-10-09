import React, {useState} from "react";
import styled, {css} from "styled-components";
import {GakTheme} from "../../styles/Theme.styled";
import {Logo} from "../logo/Logo";
import {ColorPicker} from "../ColorPicker/ColorPicker";

export const Header = () => {

    const [collapsed, setCollapsed] = useState<boolean>(true)
    const onclickHandler = () => {
        setCollapsed(!collapsed)
    }


    return (
        <StyledHeader $collapsed={collapsed}>
            <ColorPicker/>
            <div className="container">
                <p>settings</p>

            </div>


            <div className="container">
                <Logo/>
                <button onClick={onclickHandler}>Настройки</button>
            </div>


        </StyledHeader>
    );
};


const StyledHeader = styled.header<{ $collapsed: boolean }>`
  height: 100vh;
  z-index: 1;
  border-radius: 0 0 10px 10px;
  background-color: ${GakTheme.colors.primary_background};
  transform: translateY(calc(50px - 100vh));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 2s;


  ${(props) => props.$collapsed && css`
    transform: translateY(0);


  `}
  & .container {
    padding: 5px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;

    ${GakTheme.media.less1080} {
      gap: 15px;
    }

    ${GakTheme.media.less700} {
      flex-direction: column;
      gap: 0;
      margin-bottom: 30px;
    }
  }

`;
