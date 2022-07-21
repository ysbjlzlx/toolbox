import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Popover,
  Select,
  Tab,
  Tabs,
  TextField,
} from '@mui/material';
import React, { FC, useState } from 'react';
import { GithubPicker } from 'react-color';
import { Controller, useForm } from 'react-hook-form';

import { PlaceholderConfig } from '../components/placeholder';
import DummyImage from '../components/placeholder/DummyImage';
import HrefLuImage from '../components/placeholder/HrefLuImage';
import PlaceholderImage from '../components/placeholder/PlaceholderImage';

const defaultValues = {
  width: 320,
  height: 320,
  suffix: '.png',
  bgColor: '#cccccc',
  textColor: '#969696',
  text: 'img',
};

const suffixOptions = [
  { label: '.png', value: '.png' },
  { label: '.jpg', value: '.jpg' },
  { label: '.gif', value: '.gif' },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const PlaceholderImg: FC = () => {
  const [provider, setProvider] = useState<number>(0);
  const [bgColorPicker, setBgColorPicker] = useState<boolean>(false);
  const [bgColorAnchorEl, setBgColorAnchorEl] = useState(null);
  const [textColorPicker, setTextColorPicker] = useState<boolean>(false);
  const [textColorAnchorEl, setTextColorAnchorEl] = useState(null);
  const [placeholderConfig, setPlaceholderConfig] = useState<PlaceholderConfig>(defaultValues);
  const { register, handleSubmit, control, setValue } = useForm({ defaultValues });

  return (
    <Container sx={{ mt: 2 }}>
      <form onChange={handleSubmit(setPlaceholderConfig)}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField type="number" label="宽度" fullWidth {...register('width')} />
          </Grid>
          <Grid item xs={4}>
            <TextField type="number" label="高度" fullWidth {...register('height')} />
          </Grid>
          <Grid item xs={4}>
            <Controller
              name="suffix"
              control={control}
              render={({ field }) => {
                return (
                  <FormControl fullWidth>
                    <InputLabel>后缀名</InputLabel>
                    <Select
                      {...field}
                      label="后缀名"
                      onChange={(event) => {
                        setPlaceholderConfig({ ...placeholderConfig, suffix: event.target.value });
                      }}
                    >
                      {suffixOptions.map((item) => {
                        return (
                          <MenuItem key={item.label} value={item.value}>
                            {item.label}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                );
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={4}>
            <TextField
              label="背景颜色"
              fullWidth
              {...register('bgColor')}
              onClick={(e) => {
                // @ts-ignore
                setBgColorAnchorEl(e.currentTarget);
                setBgColorPicker(true);
              }}
            />
            <Popover
              open={bgColorPicker}
              anchorEl={bgColorAnchorEl}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              onClose={() => {
                setBgColorAnchorEl(null);
                setBgColorPicker(false);
              }}
            >
              <Box sx={{ mt: '6px' }}>
                <GithubPicker
                  color={placeholderConfig.bgColor || ''}
                  onChange={(color) => {
                    setValue('bgColor', color.hex);
                    setPlaceholderConfig({ ...placeholderConfig, bgColor: color.hex });
                    setBgColorPicker(false);
                  }}
                />
              </Box>
            </Popover>
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="文本颜色"
              fullWidth
              {...register('textColor')}
              onClick={(e) => {
                // @ts-ignore
                setTextColorAnchorEl(e.currentTarget);
                setTextColorPicker(true);
              }}
              onFocus={() => {}}
            />
            <Popover
              open={textColorPicker}
              anchorEl={textColorAnchorEl}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              onClose={() => {
                setTextColorAnchorEl(null);
                setTextColorPicker(false);
              }}
            >
              <Box sx={{ mt: '6px' }}>
                <GithubPicker
                  color={placeholderConfig.textColor || ''}
                  onChange={(color) => {
                    setValue('textColor', color.hex);
                    setPlaceholderConfig({ ...placeholderConfig, textColor: color.hex });
                    setTextColorPicker(false);
                  }}
                />
              </Box>
            </Popover>
          </Grid>
          <Grid item xs={4}>
            <TextField label="文本" fullWidth {...register('text')} />
          </Grid>
        </Grid>
      </form>
      <Box>
        <Tabs value={provider} onChange={(e, value) => setProvider(value)} aria-label="basic tabs example">
          <Tab label="iph.href.lu" {...a11yProps(0)} />
          <Tab label="via.placeholder.com" {...a11yProps(1)} />
          <Tab label="dummyimage.com" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={provider} index={0}>
          <HrefLuImage {...placeholderConfig} />
        </TabPanel>
        <TabPanel value={provider} index={1}>
          <PlaceholderImage {...placeholderConfig} />
        </TabPanel>
        <TabPanel value={provider} index={2}>
          <DummyImage {...placeholderConfig} />
        </TabPanel>
      </Box>
    </Container>
  );
};

export default PlaceholderImg;
