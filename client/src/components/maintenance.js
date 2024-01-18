import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid, Typography } from "@mui/material";
import maintenance_img from "../assets/maintenance.gif";
import styled from "@emotion/styled";

export default function Maintenance() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setOpen(true);
  }, []);

  // Define width and height variables
  const dialogWidth = "600px";
  const dialogHeight = "500px";

  //img style
  const styles = {
    width: "150px",
    height: "150px",
    marginLeft: "220px",
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
            width: dialogWidth, // Set width here
            height: dialogHeight, // Set height here
            textAlign: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <Grid>
            <img alt="maintenance_img" src={maintenance_img} style={styles} />
          </Grid>
          <Grid>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                fontFamily: "Raleway, Arial",
                color: "#E5340E",
                marginTop: "10px",
              }}
            >
              Under Maintenance..!
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: "14px",
                textAlign: "center",
                fontWeight: "bold",
                fontStyle: "italic",
                color: "#454545",
              }}
            >
              We apologize for the inconvenience. The site is currently
              undergoing maintenance, but we'll be back soon.
            </Typography>
          </Grid>

          <Grid>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                fontFamily: "sans-serif",
                fontSize: "20px",
              }}
            >
              Please check your access
            </Typography>
          </Grid>
          <Grid>
            <TextField id="filled-basic" label="Email" variant="filled" />
          </Grid>
          <Grid>
            <TextField
              id="filled-basic"
              label="Password"
              type="password"
              variant="filled"
            />
          </Grid>
          <DialogActions>
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{ marginRight: "220px" }}
            >
              CheckOut
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
