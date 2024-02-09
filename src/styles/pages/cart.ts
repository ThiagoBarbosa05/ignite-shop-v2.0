import { keyframes, styled } from "..";


export const CartContainer = styled('div', {
    width: 480,
    background: '$gray800',
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 3,
    paddingInline: '3rem',
    paddingBottom: '3rem',
    boxShadow: '-4px 0px 30px 0px rgba(0, 0, 0, 0.80)',
    
    "@md": { 
        width: '100%',
        paddingInline: "1rem",
    },

    button: {
        lineHeight: 0,
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        position: 'absolute',
        right: 24,
        top: 24,
    },

    h3: {
        paddingTop: '4.5rem',
        color: '$gray100',
        fontSize: '$lg',
        fontWeight: 700,
        lineHeight: 1.6,
    },

    footer: {
        position: 'absolute',
        right: 48,
        left: 48,
        bottom: 48,
        "@md": { 
            right: 16,
            left: 16
        },

        div: {
            display: 'flex',
            alignItems: 'center',
            justifyContent:'space-between',
            lineHeight: 1.6,

            'strong:first-child': {
                fontSize: '1.125rem',
                fontWeight: 700
            },

            strong: {
                fontSize: '1.5rem',
                fontWeight: 700
            }
        },

        'div:first-child': {
            marginBottom: '0.5rem',

            'span:first-child': {
                color: '$gray100',
            },
            'span:last-child': {
                color: '$gray300',
                fontSize: '1.125rem',
            },
        },

        button: {
            marginTop: '3.45rem',
            position: 'initial',
            width: '100%',
            color: '#fff',
            fontSize: '1.125rem',
            lineHeight: 1.6,
            fontWeight: 700,
            paddingBlock: '1.25rem',
            backgroundColor: '#00875F',
            borderRadius: 8,

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            '&:not(:disabled):hover': {
                backgroundColor: '$green300',
                transition: 'background-color .2s',
            },

            '&:disabled': {
                opacity: 0.6,
                cursor: 'not-allowed'
            }
        }

    }
})

export const CartItems = styled('div', {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyItems: 'flex-start',
    gap: '1.5rem',
    
})

export const ContentItem = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',

    'div:first-child': {
        width: 100,
        background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        img: {
            objectFit: "cover",
        },
    },

    'div:last-child': {
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'flex-start',
        alignItems: 'flex-start',

        p: {
            color: '$gray300',
            fontSize: '$md',
            

            span: {
                fontSize: '0.875rem',
                display: 'block',
                color: '$gray300',
                opacity: 0.6,
                lineHeight: 1.6,
            }
        },

        strong: {
            color: '$gray100',
            fontSize: '$md',
            lineHeight: 1.6,
            fontWeight: 700,
        },

        button: {
            marginTop: '0.5rem',
            position: 'initial',
            color: '$green500',
            fontSize: '1rem',
            fontWeight: 700,
            lineHeight: 1.6,

            '&:hover': {
                color: '$green300',
            }
        }
    }
})
