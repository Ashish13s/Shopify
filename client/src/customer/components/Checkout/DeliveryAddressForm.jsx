import { Button, Grid, Box, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard.jsx/AddressCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../../State/Order/Action";

const DeliveryAddressForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {auth} = useSelector(store => store);

  const handleSumbit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const address = {
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        streetAddress: data.get("address"),
        city: data.get("city"),
        state: data.get("state"),
        zipCode: data.get("zip"),
        mobile: data.get("phoneNumber")
    }
    const orderData = {address, navigate};
    console.log(orderData);
    dispatch(createOrder(orderData));
  };
  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          className="border rounded-e-md shoadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            {console.log(auth)}
            {auth?.user?.address.map((item) => <AddressCard address={item} />)}
            <Button
              sx={{ mt: 2, backgroundColor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
            >
              Deliever Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounde-s-md shadow-md p-5">
            <form onSubmit={handleSumbit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal Code"
                    fullWidth
                    autoComplete="shipping postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    sx={{ py: 1.5, mt: 2, backgroundColor: "RGB(145 85 253)" }}
                    size="large"
                    variant="contained"
                    type="sumbit"
                  >
                    Deliever Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
