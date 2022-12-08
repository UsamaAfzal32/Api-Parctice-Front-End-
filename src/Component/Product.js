import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const reponse = await axios.get("https://dummyjson.com/products");

      setData(reponse.data.products);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ height: "5%", width: "14%", pt: "5%", ml: "3%" }}>
        <Typography fontWeight="bold" variant="h5" pr={"10px"}>
          Available Items
        </Typography>
      </Box>

      <Grid container spacing={1} sx={{ mt: "40px" }}>
        {data.map((value, index) => {
          if (index <= 3) {
            return (
              <Grid item lg={3}>
                <Card
                  sx={{
                    height: "95%",
                    width: "80%",
                    borderRadius: "20px",
                    display: "flex",
                    flexDirection: "column",
                    mx: "auto",
                  }}
                  key={index}
                >
                  <Box sx={{ height: "50%", width: "100%" }}>
                    <img
                      height={"100%"}
                      width={"100%"}
                      src={value.thumbnail}
                      alt="phone"
                    ></img>
                  </Box>
                  <Box
                    sx={{
                      pl: "8px",
                      height: "40%",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Typography variant="h6" fontSize="25px">
                      {" "}
                      {value.title}
                    </Typography>
                    <Typography fontSize="15px" sx={{ textAlign: "start" }}>
                      {value.description}
                    </Typography>
                    <Typography variant="h6" mt={"10px"}>
                      {value.price}
                    </Typography>
                  </Box>
                  <Button
                    size="small"
                    sx={{
                      ":hover": { background: "green" },
                      borderRadius: "20px",
                      background: "#f58a42",
                      color: "white",
                      mt: "5px",
                      width: "80%",
                      ml: "5px",
                    }}
                  >
                    Add To Cart
                  </Button>
                </Card>
              </Grid>
            );
          } else {
            return "";
          }
        })}
      </Grid>
    </Box>
  );
};

export default Product;
