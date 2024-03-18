import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useLocation } from "react-router-dom";

export default function PriceTagNotCreatedPage() {
  const navigate = useNavigate();
  return (
    <Card sx={{ minWidth: 375 }}>
      <CardContent>
        <Typography variant="h4" component="div">
          Price Tag Not Created
        </Typography>
        <Typography sx={{ mb: 1, fontSize: "1.2rem" }} color="text.secondary">
          Sorry, the price tag you requested has not been created yet. Please go
          to the home page to create it.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate("/computer_price_tag")}>
          Create Price Tag
        </Button>
      </CardActions>
    </Card>
  );
}
