import { Box, Popover, TextField } from '@mui/material';
import { bindPopover, bindTrigger, usePopupState } from 'material-ui-popup-state/hooks';
import React, { ChangeEvent } from 'react';
import { GithubPicker, TwitterPicker } from 'react-color';

interface InputColorPickerProps {
  value: string;
  onChange: (val: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  label?: string;
  fullWidth?: boolean;
  picker: 'GithubPicker' | 'TwitterPicker';
}

const InputColorPicker = React.forwardRef((props: InputColorPickerProps, ref: any) => {
  const { value, onChange, picker, ...other } = props;

  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoPopover',
  });

  return (
    <Box>
      <TextField
        ref={ref}
        value={value}
        onChange={(event) => onChange(event)}
        {...other}
        {...bindTrigger(popupState)}
      />
      <Popover {...bindPopover(popupState)} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
        {picker === 'GithubPicker' && (
          <Box sx={{ mt: '6px' }}>
            <GithubPicker
              color={value}
              onChangeComplete={(color, event) => {
                event.target.value = color.hex;
                onChange(event);
              }}
            />
          </Box>
        )}
        {picker === 'TwitterPicker' && (
          <Box sx={{ mt: '10px' }}>
            <TwitterPicker
              color={value}
              onChangeComplete={(color, event) => {
                event.target.value = color.hex;
                onChange(event);
              }}
            />
          </Box>
        )}
      </Popover>
    </Box>
  );
});
export default InputColorPicker;
