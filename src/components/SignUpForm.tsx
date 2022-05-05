import { Dispatch, SetStateAction, useState } from 'react'

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'

import handleTextFieldChange from '../utils/handleTextFieldChange'

export default function SignUpForm() {
  const [DialogOpen, setDialogOpen] = useState(false)

  const handleDialogOpen = () => setDialogOpen(true)

  return (
    <>
      <Button onClick={handleDialogOpen}>Sign Up</Button>

      <DialogForm DialogOpen={DialogOpen} setDialogOpen={setDialogOpen} />
    </>
  )
}

interface DialogFormProps {
  DialogOpen: boolean,
  setDialogOpen: Dispatch<SetStateAction<boolean>>
}

function DialogForm({ DialogOpen, setDialogOpen }: DialogFormProps) {
  const handleClose = () => setDialogOpen(false)

  return (
    <Dialog open={DialogOpen} onClose={handleClose}>
      <DialogTitle>Sign Up</DialogTitle>

      <DialogContent>
        <TextField label="Email" fullWidth />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Sign Up</Button>
      </DialogActions>
    </Dialog>
  )
}
