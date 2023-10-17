import React, {useState} from 'react';
import {GlobalStyles} from './styles/GlobalStyles';
import {Header} from './components/header/Header';
import {gakTheme} from './styles/Theme.styled';
import {styled} from 'styled-components';

const App = () => {

    const [textColor, setTextColor] = useState<string>(`${localStorage.getItem('textColor') ? localStorage.getItem('textColor') : '#ffffff'}`)
    const store = {
        colors: {...gakTheme.colors},
        media: {...gakTheme.media}
    }

    return (
        <StyledApp className="App" $textColor={textColor}>
            <Header/>
            <GlobalStyles $textColor={textColor}/>
        </StyledApp>
    );

}

export default App;

type StyledAppPropsType = {
    $textColor: string
}

const StyledApp = styled.div<StyledAppPropsType>`
    //color: ${(props) => props.$textColor}

`;

