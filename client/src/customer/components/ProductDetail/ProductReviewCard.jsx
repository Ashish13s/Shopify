import React from "react";
import { Box, Grid, Rating, Avatar } from "@mui/material";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: "56px", height: "56px", backgroundColor: "#9155fd" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
            <div className="space-y-2">
                <div>
                    <p className="font-semibold text-lg">Raam</p>
                    <p className="opacity-70">April 5, 2023</p>
                </div>
            </div>

            <Rating value={4.5} name="half-rating" readOnly precision={0.1}/>
            <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet soluta ex est deleniti veritatis fugit hic unde consequuntur voluptatum nihil rerum aliquam iusto vel dolorum, officiis fuga quis provident facilis.</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
