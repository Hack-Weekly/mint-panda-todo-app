import React from 'react'
import { Snackbar } from '@mui/material'

const message = 'asdf'

function Toast({ openToast, setOpenToast, message }) {

  const handleClose = () => setOpenToast(false);

  return (
    <Snackbar 
    anchorOrigin={{vertical: 'top', horizontal: 'right'}} 
    message={message} 
    autoHideDuration={4000} 
    open={openToast}
    onClose={handleClose} />
  )
}

export default Toast