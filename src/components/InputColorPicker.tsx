import { Box, Popover, TextField } from '@mui/material';
import { bindPopover, bindTrigger, usePopupState } from 'material-ui-popup-state/hooks';
import { GithubPicker } from 'react-color';

interface InputColorPickerProps {
  value: string;
  onChange: (val: string) => void;
  label?: string;
  fullWidth?: boolean;
}

const InputColorPicker = ({ value, onChange, ...otherProps }: InputColorPickerProps) => {
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
        <Box sx={{ mt: '6px' }}>
          <GithubPicker color={value} onChangeComplete={(color) => onChange(color.hex)} />
        </Box>
      </Popover>
    </Box>
  );
};
export default InputColorPicker;
