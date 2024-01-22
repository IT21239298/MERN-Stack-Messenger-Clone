import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import maintenance_img from "../assets/maintenance.gif";

export default function Maintenance() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  
  const dialogWidth = isMobile ? "100%" : "600px";
  const dialogHeight = isMobile ? "100%" : "500px";

  // Image styles
  const imgStyles = {
    width: isMobile ? "70px" : "150px",
    height: isMobile ? "70px" : "150px",
    marginLeft: isMobile ? "120px" : "220px",
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
            width: dialogWidth, 
            height: dialogHeight, 
            textAlign: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <Grid>
            <img alt="maintenance_img" src={maintenance_img} style={imgStyles} />
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
                fontSize: isMobile ? "16px" : "20px",
              }}
            >
              Please check your access
            </Typography>
          </Grid>
          
          <Grid>
            <TextField
              id="filled-basic"
              label="Password"
              type="password"
              variant="filled"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              sx={{
                width: isMobile ? "80%" : "350px",
              
               
              }}
            />
          </Grid>
          <DialogActions>
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{ margin: isMobile ? "auto" : "auto" }}
            >
              Available
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
