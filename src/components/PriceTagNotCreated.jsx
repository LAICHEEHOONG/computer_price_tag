import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { useNavigate, useLocation } from "react-router-dom";

export default function PriceTagNotCreatedPage() {
  const navigate = useNavigate();
  return (
    <Card>
      <CardContent>
        <Alert severity="info">
          <AlertTitle>Price Tag Not Created</AlertTitle>
          Sorry, the price tag you requested has not been created yet. Please go
          to the home page to create it.
        </Alert>
        {/* <Typography variant="h4" component="div">
            Price Tag Not Created
          </Typography>
          <Typography sx={{ mb: 1, fontSize: "1.2rem" }} color="text.secondary">
            Sorry, the price tag you requested has not been created yet. Please
            go to the home page to create it.
          </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate("/computer_price_tag")}>
          Create Price Tag
        </Button>
      </CardActions>
    </Card>
  );
}
