import { styled } from "..";

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: 656,
    paddingBottom: "3rem",
    
  
    h1: {
      marginTop: '3rem',
      fontSize: '$2xl',
      color: '$gray100',
      lineHeight: 1.4,
    },
  
    p: {
      fontSize: '$xl',
      color: '$gray300',
      maxWidth: 560,
      textAlign: 'center',
      marginTop: '2rem',
      lineHeight: 1.4,
    },
  
    a: {
      display: 'block',
      marginTop: '5rem',
      fontSize: '$lg',
      color: '$green500',
      textDecoration: 'none',
      fontWeight: 'bold',
  
      '&:hover': {
        color: '$green300',
      }
    },

    section: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
      
      'div + div': {
        marginLeft: "calc(-140px / 2)",
       
      },

      div: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',

        span: {
          color: '$gray300',
          fontSize: '0.75rem'
        }
      }
    }
  
  });
  
  export const ImageContainer = styled('div', {
    position: 'relative',
   
    width: 140,
    height: 140,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
    borderRadius: '1000px',
    padding: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
      objectFit: 'cover',
    },
  });