import { ChangeEvent, Dispatch, SetStateAction } from 'react'

export default (setValue: Dispatch<SetStateAction<string>>) => 
  (event: ChangeEvent<HTMLInputElement>) =>
  setValue(event.target.value)
