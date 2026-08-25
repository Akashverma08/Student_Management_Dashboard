"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

interface ConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function ConfirmDialog({
  open,
  onClose,
  onConfirm,
}: ConfirmDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle>
        Delete Student
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this student?
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button
          onClick={onConfirm}
          color="error"
          variant="contained"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}