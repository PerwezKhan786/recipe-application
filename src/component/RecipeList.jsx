import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";

const BoxButton = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  justifyContent: "space-between",
  flexWrap: "wrap",
  // [theme.breakpoints.down("sm")]: {
  //   flexDirection: "column",
  //   alignItems: "stretch",
  // },
}));

const ButtonStyle = styled(Button)({
  textTransform: "none",
  padding: "5px 15px",
  borderRadius: "3px",
  flex: "1",
  minWidth: "100px",
});

const RecipeList = ({ array }) => {
  return (
    <Grid container rowSpacing={2} columnSpacing={2} textAlign="center">
      {array.map((recipe, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card
            sx={{
              backgroundColor: "#F9F6EE",
              height: "100%", // allow content height
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <Box sx={{ mb: 2 }}>
                <img
                  src={recipe.image_url}
                  alt="recipe"
                  style={{ width: "100%", height: "150px", objectFit: "cover" }}
                />
                <Typography variant="h6" component="div" sx={{ mt: 1 }}>
                  {recipe.title.length > 30
                    ? recipe.title.slice(0, 30) + "..."
                    : recipe.title}
                </Typography>
                <Typography variant="body2">{recipe.publisher}</Typography>
              </Box>
              <BoxButton>
                <ButtonStyle
                  variant="contained"
                  size="small"
                  component={Link}
                  to={`/recipe/${recipe.recipe_id}`}
                >
                  Details
                </ButtonStyle>

                <ButtonStyle
                  variant="contained"
                  color="success"
                  href={recipe.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Recipe URL
                </ButtonStyle>
              </BoxButton>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipeList;
