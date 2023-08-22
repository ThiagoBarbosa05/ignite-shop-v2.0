import { styled } from ".";

export const EmptyBag = styled('div', {
    width: '100%',
    marginTop: '5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    strong: {
        fontSize: '$lg',
        textAlign: 'center',
        marginTop: "2rem",
        lineHeight: 1.6,
    },

    button: {
        position: 'initial',
        marginTop: '2rem',
        padding: '1.75rem 2rem',
        borderRadius: 8,
        backgroundColor: '$green500',
        fontSize: '1.125rem',
        color: '$gray100',
        fontWeight: 700,

        '&:hover': {
            backgroundColor: '$green300',
            transition: 'background-color .2s'
        }
    }
})