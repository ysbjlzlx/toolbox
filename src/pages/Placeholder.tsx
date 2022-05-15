import React, { FC, useEffect, useState } from 'react';
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
import { useForm, Controller } from 'react-hook-form';

type PlaceholderConfig = {
  width: number;
  height: number;
  suffix: string;
  bgColor: null | string;
  textColor: null | string;
  text: null | string;
};

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

const Placeholder: FC = () => {
  const [placeholderConfig, setPlaceholderConfig] = useState<PlaceholderConfig>(defaultValues);
  const [imgList, setImgList] = useState<Array<string>>([]);
  const { register, handleSubmit, control } = useForm({
    defaultValues: defaultValues,
  });

  useEffect(() => {
    const v = viaPlaceholder(placeholderConfig);
    const d = dummyImage(placeholderConfig);
    setImgList([v, d]);
  }, [placeholderConfig]);

  const viaPlaceholder = (config: PlaceholderConfig) => {
    let host = 'https://via.placeholder.com';
    host = host + '/' + config.width;
    if (config.height) {
      host = host + 'x' + config.height;
    }
    host = host + '/' + config.bgColor?.substring(1);
    host = host + '/' + config.textColor?.substring(1);
    if (config.text && '' !== config.text) {
      host = host + '?text=' + encodeURIComponent(config.text);
    }
    host = host + config.suffix;
    return host;
  };
  const dummyImage = (config: PlaceholderConfig) => {
    let host = 'https://dummyimage.com';
    host = host + '/' + config.width;
    if (config.height) {
      host = host + 'x' + config.height;
    }
    host = host + '/' + config.bgColor?.substring(1);
    host = host + '/' + config.textColor?.substring(1);
    if (config.text && '' !== config.text) {
      host = host + '?text=' + encodeURIComponent(config.text);
    }
    return host + config.suffix;
  };
  return (
    <Container sx={{ mt: 2 }}>
      <form onChange={handleSubmit(setPlaceholderConfig)}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField type={'number'} label={'宽度'} fullWidth {...register('width')} />
          </Grid>
          <Grid item xs={4}>
            <TextField type={'number'} label={'高度'} fullWidth {...register('height')} />
          </Grid>
          <Grid item xs={4}>
            <Controller
              name={'suffix'}
              control={control}
              render={({ field }) => {
                return (
                  <FormControl fullWidth>
                    <InputLabel>后缀名</InputLabel>
                    <Select
                      {...field}
                      label={'后缀名'}
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
            <TextField label={'背景颜色'} fullWidth {...register('bgColor')} disabled />
          </Grid>
          <Grid item xs={4}>
            <TextField label={'文本颜色'} fullWidth {...register('textColor')} disabled />
          </Grid>
          <Grid item xs={4}>
            <TextField label={'文本'} fullWidth {...register('text')} />
          </Grid>
        </Grid>
      </form>

      <Box sx={{ mt: 2 }}>
        <ImageList>
          {imgList.map((item) => (
            <ImageListItem key={item}>
              <img
                style={{
                  width: `${placeholderConfig.width}px`,
                  height: `${placeholderConfig.height}px`,
                }}
                alt={placeholderConfig.text || 'placeholder'}
                src={item}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Container>
  );
};

export default Placeholder;
