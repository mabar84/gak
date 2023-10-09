export const gakTheme = {
    colors: {
        text: `${localStorage.getItem('textColor') ? localStorage.getItem('textColor') : '#ffffff'}`,
        body_background: `${localStorage.getItem('textColor') ? localStorage.getItem('textColor') : '#E9F1FA'}`,
        primary_background: `${localStorage.getItem('textColor') ? localStorage.getItem('textColor') : '#0f17eb'}`,
        secondary_background: `${localStorage.getItem('textColor') ? localStorage.getItem('textColor') : '#0086ff'}`,
        accent: '#060bb2'
    },
    media: {
        less1360: '@media screen and (max-width: 1360px)',
        less1080: '@media screen and (max-width: 1080px)',
        less700: '@media screen and (max-width: 700px)',
    }
}
