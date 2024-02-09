import { styled } from "..";



export const HomeContainer = styled("main", {
  minHeight: 656,
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  marginLeft: "auto",
})

export const Product = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  display: "flex",
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: 8,
  overflow: 'hidden',
  '@md': {
    paddingInline: "2rem"
  },
  img: {
        objectFit: "cover",
      },
  
  a: {
    height: "100%",
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },

  footer: {
    position: 'absolute',
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "1.25rem",
    lineHeight: 1.4,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 6,
    display: 'flex',
    justifyItems: 'space-between',
    alignItems: 'center',
    '@lg': {
      transform: "translateY(110%)",
      opacity: 0,
      transition: "all 0.2s ease-in-out",
    },

    strong: {
      fontSize: "$lg",
      color: "$gray100",
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },

    div: {
      flex: '1',
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },

    button: {
      padding: "0.75rem",
      background: '#00875F',
      lineHeight: 0,
      border: 0,
      borderRadius: 6,
      cursor: "pointer",
    },
  },

  '@lg': {
    "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
  }
  
})
