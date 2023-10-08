import React, {useState} from "react";
import styled, {css} from "styled-components";
import {myTheme} from "../../styles/Theme.styled";
import {Logo} from "../logo/Logo";

export const Header = () => {

    const [collapsed, setCollapsed] = useState<boolean>(false)
    const onclickHandler = () => {
        console.log(123)
        console.log(collapsed)
        setCollapsed(!collapsed)
    }


    return (
        <StyledHeader $collapsed={collapsed}>


            <div className="container">
                <p>settings</p>
                <p>settings</p>
                <p>settings</p>
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
  color: ${myTheme.colors.text};
  background-color: ${myTheme.colors.primary_background};
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

    ${myTheme.media.less1080} {
      gap: 15px;
    }

    ${myTheme.media.less700} {
      flex-direction: column;
      gap: 0;
      margin-bottom: 30px;
    }
  }

`;
