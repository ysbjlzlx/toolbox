import { Box, TextField, TextFieldProps } from '@mui/material';
import { GithubPicker, GithubPickerProps } from 'react-color';

interface InputColorPickerProps {
  textField: TextFieldProps;
  colorPicker: GithubPickerProps;
}

const InputColorPicker = (props: InputColorPickerProps) => {
  return (
    <Box>
      <TextField />
      <GithubPicker />
    </Box>
  );
};

export default InputColorPicker;
