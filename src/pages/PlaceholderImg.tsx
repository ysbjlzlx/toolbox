import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Select, Tab, Tabs, TextField } from '@mui/material';
import React, { ChangeEvent, FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import InputColorPicker from '../components/InputColorPicker';
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
  const [placeholderConfig, setPlaceholderConfig] = useState<PlaceholderConfig>(defaultValues);
  const { register, handleSubmit, control, getValues, setValue } = useForm({ defaultValues });

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
            <InputColorPicker
              value={getValues('bgColor')}
              onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                setValue('bgColor', event.target.value);
                setPlaceholderConfig({ ...placeholderConfig, bgColor: event.target.value });
              }}
              label="背景颜色"
              picker="GithubPicker"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <InputColorPicker
              value={getValues('textColor')}
              onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                setValue('textColor', event.target.value);
                setPlaceholderConfig({ ...placeholderConfig, textColor: event.target.value });
              }}
              label="文字颜色"
              picker="TwitterPicker"
              fullWidth
            />
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
