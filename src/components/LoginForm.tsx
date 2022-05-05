import { useState } from 'react'

import { Button, Stack, TextField } from '@mui/material'

import handleTextFieldChange from '../utils/handleTextFieldChange'

import PasswordTextField from '../components/PasswordTextField'

export default function LogInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = () => {
    console.log(`Logging in with email: ${email} and password: ${password}`)
  }

  return (
    <Stack spacing={2}>
      <TextField
        label="Email"
        value={email}
        onChange={handleTextFieldChange(setEmail)}
        fullWidth
      />

      <PasswordTextField
        label="Password"
        InputProps={{
          value: password,
          onChange: handleTextFieldChange(setPassword)
        }}
      />

      <Button
        onClick={handleClick}
        fullWidth
      >
        Login
      </Button>
    </Stack>
  )
}
