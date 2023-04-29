export const container_ = {
  border: "1px solid #ccc",
  backgroundColor: "#fff",
  boxShadow: "0 0 5px 0 #ccc",
  padding: "10px",
  borderRadius: "5px",
};

export const gridStyle_ = {
  gridTemplateColumns: "repeat(4,1fr)",
  gap: "25px",
  "@media screen and (max-width:1000px)": {
    gridTemplateColumns: "repeat(2,1fr)",
  },
  "@media screen and (max-width:500px)": {
    gridTemplateColumns: "repeat(1,1fr)",
  },
};

export const title_ = {
  marginBottom: "15px",
  borderBottom: "1px solid #ccc",
  paddingBottom: "5px",
};
