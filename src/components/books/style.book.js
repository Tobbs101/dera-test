export const bookGrid_ = {
  marginTop: "20px",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: "25px",
  "@media screen and (max-width:1000px)": {
    gridTemplateColumns: "repeat(2,1fr)",
  },
  "@media screen and (max-width:500px)": {
    gridTemplateColumns: "repeat(1,1fr)",
  },
};

export const book_ = {
  border: "1px solid #ccc",
  padding: "10px 15px",
  borderRadius: "5px",
  boxShadow: "0 0 5px 0 #ccc",
  backgroundColor: "#fff",
  minHeight: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export const title_ = {
  textAlign: "center",
  width: "100%",
  border: "1px solid #ccc",
  boxShadow: "0 0 5px 0 #ccc inset",
  padding: "3px 0",
  borderRadius: "5px",
  fontWeight: "500",
};

export const cardFooter_ = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "3px",
};
