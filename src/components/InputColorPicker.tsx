import { Box, Popover, TextField } from '@mui/material';
import { bindPopover, bindTrigger, usePopupState } from 'material-ui-popup-state/hooks';
import { GithubPicker, TwitterPicker } from 'react-color';

interface InputColorPickerProps {
  value: string;
  onChange: (val: string) => void;
  label?: string;
  fullWidth?: boolean;
  picker: 'GithubPicker' | 'TwitterPicker';
}

const InputColorPicker = ({ value, onChange, picker, ...otherProps }: InputColorPickerProps) => {
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoPopover',
  });

  return (
    <Box>
      <TextField
        value={value}
        onChange={(event) => onChange(event.target.value)}
        {...otherProps}
        {...bindTrigger(popupState)}
      />
      <Popover {...bindPopover(popupState)} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
        {picker === 'GithubPicker' && (
          <Box sx={{ mt: '6px' }}>
            <GithubPicker color={value} onChangeComplete={(color) => onChange(color.hex)} />
          </Box>
        )}
        {picker === 'TwitterPicker' && (
          <Box sx={{ mt: '10px' }}>
            <TwitterPicker color={value} onChangeComplete={(color) => onChange(color.hex)} />
          </Box>
        )}
      </Popover>
    </Box>
  );
};
export default InputColorPicker;
