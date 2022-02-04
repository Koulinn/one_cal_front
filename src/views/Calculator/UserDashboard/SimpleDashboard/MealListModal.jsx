import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import {
  Box,
  Modal,
  Fade,
  Button,
  Typography,
  List,
  ListItemText,
  ListItem,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 328,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "16px",
};

function MealListModal({ mealsFromToday }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ display: "flex" }}>
      <Button onClick={handleOpen} sx={{ margin: "auto", mt: 3 }}>
        Check Meals
      </Button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id='transition-modal-title' variant='h6' component='h6'>
              Today's meals
            </Typography>
            <List dense={true}>
              {mealsFromToday.map((m) => (
                <ListItem key={m.name}>
                  <ListItemText primary={m.name} secondary={m.calories} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default MealListModal;
