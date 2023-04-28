//HEADER CONTAINER STYLING
export const headerBar_ = {
  backgroundColor: "#fff",
  padding: "5px 30px",
  width: "100%",
  border: "1px solid #ccc",
  borderRadius: "5px",
  boxShadow: "0 0 5px 0 #ccc",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row", // default value
  "@media screen and (max-width: 768px)": {
    flexDirection: "column",
  },
};

//LOGO STYLING
export const logo_ = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
};

//LOGO TEXT STYLING
export const logoText_ = {
  fontFamily: "'Stylish', sans-serif",
  fontSize: "28px",
  fontWeight: "500",
};

//LOGO ICON STYLING
export const logoIcon_ = "text-secondary text-2xl";

//SEARCH STYLING
export const search_ = {
  border: "1px solid #ccc",
  outline: "none",
  height: "30px",
  transitionDuration: ".3s",
  width: "250px",
  fontSize: "10px",
  paddingLeft: "10px",
  "&:focus": { border: "1px solid #404caf", paddingLeft: "15px" },
  "@media screen and (max-width: 768px)": {
    width: "50%",
  },
};
