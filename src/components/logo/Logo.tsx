import React from "react";
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {GakTheme} from "../../styles/Theme.styled";

export const Logo = () => {
    return (
        <StyledLogo href="https://www.gomelagro.com/" target={'_blank'}>
            <span>
              <Icon iconId={'logo'} width={'30'} height={'30'} viewBox={'0 0 50 50'}/>
            </span>
            <h1 className="title">ОАО "Гомельагрокомплект"</h1>
        </StyledLogo>
    );
};

const StyledLogo = styled.a`
  display: flex;
  align-items: center;
  gap: 20px;

  &:hover {
    span {
      background-color: #0f17eb;

      svg {
        fill: #ffffff;
      }
    }

    h1 {
      opacity: 0.8;

    }
  }

  span {
    padding: 2px;
    border-radius: 2px;
    background-color: #ffffff;
    transition: background-color 1s;

    svg {
      fill: #0f17eb;
      transition: fill 1s;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }


  h1 {
    transition: opacity 0.5s;

    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
  }



`