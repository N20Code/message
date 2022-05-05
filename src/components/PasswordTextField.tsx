import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  OutlinedInputProps
} from '@mui/material'
import { useState } from 'react'

interface Props {
  InputProps?: OutlinedInputProps,
  label?: string
}

export default function PasswordTextField({...props}: Props) {
  const [visibility, setVisibility] = useState(false)

  const handleVisibilityClick = () => setVisibility(!visibility)

  const handleMouseDown = () =>
    (event: React.MouseEvent<HTMLButtonElement>) =>
    event.preventDefault()

  return <FormControl variant="outlined">
    <InputLabel htmlFor="outlined-adornment-password">
      {props.label || ''}
    </InputLabel>

    <OutlinedInput
      {...props.InputProps}
      id="outlined-adornment-password"
      type={visibility ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleVisibilityClick}
            onMouseDown={handleMouseDown}
            edge="end"
          >
            {visibility ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
      label="Password"
    />
  </FormControl>
}
