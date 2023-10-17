import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {gakTheme} from '../../styles/Theme.styled';
import {Logo} from '../logo/Logo';
import {StyledButton} from '../button/Button';
import {Settings} from '../settings/Settings';

export type HeaderPropsType = {
    setTextColor: (c: string) => void
    setBackground: (c: string) => void
    setPrimary: (c: string) => void
    setSecondary: (c: string) => void
}

export const Header = (props: HeaderPropsType) => {

    const [opened, setOpened] = useState<boolean>(true) //open\close settings

    const onclickHandler = () => {
        setOpened(!opened)
    }


    return (
        <StyledHeader className="container" $opened={opened}>

            <Settings {...props}/>

            <div className={'headerBottom'}>
                <Logo/>

                <StyledButton onClick={onclickHandler}>
                    {opened ? 'Свернуть' : 'Настройки'}
                </StyledButton>

            </div>


        </StyledHeader>
    );
};


const StyledHeader = styled.header<{ $opened: boolean }>`
  height: 100vh;
  padding: 10px 20px 0;

  z-index: 1;
  border-radius: 0 0 10px 10px;
  background-color: ${gakTheme.colors.primary};
  transform: translateY(calc(44px - 100vh));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 2s;


  .headerBottom {
    padding: 5px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;

    ${gakTheme.media.less1080} {
      gap: 15px;
    }

    ${gakTheme.media.less700} {
      flex-direction: column;
      gap: 0;
      margin-bottom: 30px;
    }
  }

  ${(props) => props.$opened && css`
    transform: translateY(0);
  `}
`;
