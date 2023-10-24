import React from "react";
import AddressCard from "../AddressCard.jsx/AddressCard";
import OrderTracker from "./OrderTracker";
import { Grid, Box } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { StarBorder as StarBorderIcon } from "@mui/icons-material";

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>
      <Grid container className="space-y-5">
        {[1,1,1,1,1].map((item) =><Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid item sx={6}>
            <div className="flex items-center space-x-4">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://www.ethnicplus.in/media/catalog/product/cache/1d5df636cf8c8988ea2d2c570bb7c21d/s/h/shs-raj-327002_2_.jpg"
                alt=""
              />
              <div className="space-y-2 ml-5">
                <p className="font-semibold">Title</p>
                <p className="space-x-5 opacity-50 text-xs font-semibold">
                  <span>Color: pink</span>
                  <span>Size: m</span>
                </p>
                <p>Seller</p>
                <p>Price</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <Box sx={{ color: deepPurple[500] }}>
              <StarBorderIcon
                sx={{ fontSize: "2rem" }}
                className="px-2 text-5xl"
              />
              <span>Rate & Review Product</span>
            </Box>
          </Grid>
        </Grid>)}
      </Grid>
    </div>
  );
};

export default OrderDetails;
