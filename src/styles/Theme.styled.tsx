export const gakTheme = {
    colors: {
        text: `${localStorage.getItem('textColor') ? localStorage.getItem('textColor') : '#ffffff'}`,
        background: `${localStorage.getItem('background') ? localStorage.getItem('background') : '#E9F1FA'}`,
        primary: `${localStorage.getItem('primary') ? localStorage.getItem('primary') : '#0f17eb'}`,
        secondary: `${localStorage.getItem('secondary') ? localStorage.getItem('secondary') : '#0086ff'}`,
        accent: '#060bb2'
    },
    media: {
        less1360: '@media screen and (max-width: 1360px)',
        less1080: '@media screen and (max-width: 1080px)',
        less700: '@media screen and (max-width: 700px)',
    }
}
