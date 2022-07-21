import {
  Box,
  Container,
  FormControl,
  Grid,
  ImageList,
  ImageListItem,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { PlaceholderConfig } from '../components/placeholder';
import DummyImage from '../components/placeholder/DummyImage';
import HrefLuImage from '../components/placeholder/HrefLuImage';
import PlaceholderImage from '../components/placeholder/PlaceholderImage';

const defaultValues = {
  width: 150,
  height: 150,
  suffix: '.png',
  bgColor: '#cccccc',
  textColor: '#969696',
  text: '',
};

const suffixOptions = [
  { label: '.png', value: '.png' },
  { label: '.jpg', value: '.jpg' },
  { label: '.gif', value: '.gif' },
];

const PlaceholderImg: FC = () => {
  const [placeholderConfig, setPlaceholderConfig] = useState<PlaceholderConfig>(defaultValues);
  const { register, handleSubmit, control } = useForm({
    defaultValues,
  });

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
            <TextField label="背景颜色" fullWidth {...register('bgColor')} disabled />
          </Grid>
          <Grid item xs={4}>
            <TextField label="文本颜色" fullWidth {...register('textColor')} disabled />
          </Grid>
          <Grid item xs={4}>
            <TextField label="文本" fullWidth {...register('text')} />
          </Grid>
        </Grid>
      </form>

      <Box sx={{ mt: 2 }}>
        <ImageList cols={3}>
          <ImageListItem key={0}>
            <PlaceholderImage {...placeholderConfig} />
          </ImageListItem>
          <ImageListItem key={1}>
            <DummyImage {...placeholderConfig} />
          </ImageListItem>
          <ImageListItem key={2}>
            <HrefLuImage {...placeholderConfig} />
          </ImageListItem>
        </ImageList>
      </Box>
    </Container>
  );
};

export default PlaceholderImg;
