import React from "react";
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";
import {Logo} from "../logo/Logo";

export const Header = () => {
    return (
        <StyledHeader>
            <div className="container">
                <Logo/>

            </div>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  height: 50px;
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: end;
  gap: 50px;
  border-radius: 0 0 10px 10px;
  background-color: ${myTheme.colors.primary_background};
  color: ${myTheme.colors.text};

  & .container {
    padding: 5px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;

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
