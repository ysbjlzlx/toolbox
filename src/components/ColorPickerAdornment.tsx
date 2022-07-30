import PaletteIcon from '@mui/icons-material/Palette';
import { Box, IconButton, InputAdornment, Popover } from '@mui/material';
import { bindPopover, bindTrigger, usePopupState } from 'material-ui-popup-state/hooks';
import { FC } from 'react';
import { CompactPicker } from 'react-color';

interface Props {
  value: string;
  onChange: (val: string) => void;
}

const ColorPickerAdornment: FC<Props> = ({ value, onChange }) => {
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoPopover',
  });
  return (
    <>
      <InputAdornment position="end">
        <IconButton {...bindTrigger(popupState)}>
          <PaletteIcon sx={{ color: value }} />
        </IconButton>
      </InputAdornment>
      <Popover {...bindPopover(popupState)} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
        <Box>
          <CompactPicker
            color={value}
            onChangeComplete={(color) => {
              onChange(color.hex);
            }}
          />
        </Box>
      </Popover>
    </>
  );
};

export default ColorPickerAdornment;
