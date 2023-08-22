import { styled } from ".";

export const ArrowContainer = styled("div", {
  width: "100%",
  position: "absolute",
  top: "50%",
  display: "flex",
  justifyContent: "space-between",

  button: {
    border: "none",
    cursor: "pointer",
    "&:disabled": {
      display: "none",
      opacity: 0,
    },
  },
});

export const ArrowRight = styled("button", {
  background: 'none',
  paddingRight: "1rem",
  paddingLeft: "3rem",
  position: "absolute",
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 1,
  
});

export const ArrowLeft = styled("button", {
  paddingLeft: "1rem",
  paddingRight: "3rem",
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  background: 'none',
  zIndex: 1,
});
