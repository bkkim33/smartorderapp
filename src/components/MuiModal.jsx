import React, { useState } from 'react';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import PropTypes from "prop-types";
// import styles from "../styles/components/muimodal.module.scss";
import { Button } from "./Button";

MuiModal.propTypes = {};

MuiModal.defaultProps = {

};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


export function MuiModal({ propOpen, children }) {
  const [open, setOpen] = useState(propOpen);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <h4>TITLE</h4>
            <Button
              icon="Delete"
              iconposition=""
              none
              onClick={() => {}}
              size="icon_s"
              iconStyle={{
                fill: "var(--c99)",
              }}
            >
              Close
            </Button>
          </div>
          <div>{children}</div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
  

  
export default MuiModal;
  