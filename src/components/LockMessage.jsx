import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function LockMessage() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">
            <AlertTitle>
              Account Locked Due to Multiple Login Attempts
            </AlertTitle>
            You have attempted to log in multiple times, which has resulted in
            your account being locked. Please try again tomorrow.
          </Alert>
        </Stack>
      </CardContent>
    </Card>
  );
}
