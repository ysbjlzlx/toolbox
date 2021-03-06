import { Box, Checkbox, Container, FormControlLabel, FormGroup, Slider, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

import { Block } from '../components/Block';
import ContentCopyAdornment from '../components/ContentCopyAdornment';
import RefreshAdornment from '../components/RefreshAdornment';
import { generator, GeneratorOptions } from '../scripts/RandomStringUtils';

export default function Random() {
  const [randomString, setRandomString] = useState<string>('');
  const [numeric, setNumeric] = useState<boolean>(true);
  const [upperCase, setUpperCase] = useState<boolean>(true);
  const [lowerCase, setLowerCase] = useState<boolean>(true);
  const [symbol, setSymbol] = useState<boolean>(false);
  const [length, setLength] = useState<number>(8);
  const [symbolChars, setSymbolChars] = useState<string>('!@#$%^&*');
  const [options, setOptions] = useState<GeneratorOptions>({});
  useEffect(() => {
    setOptions({
      length: length,
      numeric: numeric,
      lowercase: lowerCase,
      uppercase: upperCase,
      symbol: symbol,
      symbolChars: symbolChars,
    });
  }, [length, numeric, lowerCase, upperCase, symbol, symbolChars]);

  const refresh = () => {
    const varchar = generator(options);
    setRandomString(varchar);
  };

  useEffect(refresh, [length, numeric, upperCase, lowerCase, symbol, symbolChars, options]);

  const label = { inputProps: { 'aria-label': 'Checkbox' } };

  return (
    <Container>
      <Block sx={{ mt: 2 }}>
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox {...label} defaultChecked />}
            label="数字 0 ～ 9"
            value={numeric}
            onChange={() => {
              setNumeric(!numeric);
            }}
          />
          <FormControlLabel
            control={<Checkbox {...label} defaultChecked />}
            label="小写字母 a ~ z"
            value={lowerCase}
            onChange={() => {
              setLowerCase(!lowerCase);
            }}
          />
          <FormControlLabel
            control={<Checkbox {...label} defaultChecked />}
            label="大写字母 A ~ Z"
            value={upperCase}
            onChange={() => {
              setUpperCase(!upperCase);
            }}
          />
          <FormControlLabel
            control={<Checkbox {...label} />}
            label="符号"
            value={symbol}
            onChange={() => {
              setSymbol(!symbol);
            }}
          />
          <TextField
            label="符号"
            value={symbolChars}
            onChange={(event) => {
              setSymbolChars(event.target.value);
            }}
            size="small"
          />
        </FormGroup>
        <Box sx={{ mt: 3 }}>
          <Slider
            defaultValue={8}
            valueLabelDisplay="on"
            value={length}
            min={6}
            max={64}
            step={1}
            marks={[
              { value: 6, label: '6' },
              { value: 8, label: '8' },
              { value: 16, label: '16' },
              { value: 32, label: '32' },
              { value: 64, label: '64' },
            ]}
            onChange={(event, value) => {
              if (typeof value === 'number') {
                setLength(value);
              }
            }}
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <TextField
            variant="outlined"
            label="随机结果"
            value={randomString}
            InputProps={{
              endAdornment: (
                <>
                  <RefreshAdornment onClick={refresh} />
                  <ContentCopyAdornment content={randomString} />
                </>
              ),
            }}
            onChange={(event) => {
              setRandomString(event.target.value);
            }}
            fullWidth
          />
        </Box>
      </Block>
    </Container>
  );
}
