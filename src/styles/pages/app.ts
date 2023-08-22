import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  div: {
    position: 'relative',

    span: {
      width: 24,
      height: 24,
      borderRadius: 9999,
      position: 'absolute',
      background: '$green500',
      lineHeight: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: '0.75rem',
      border: '2px solid #000',
      top: '-10px',
      right: '-5px',
    }
  },
  
  button: {
    lineHeight: 0,
    padding: '0.875rem',
    backgroundColor: '#202024',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',

    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    }
   
  }
})
