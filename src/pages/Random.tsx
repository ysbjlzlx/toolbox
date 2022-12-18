import { Box, Container, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

import { Checkbox, Col, Form, Input, Row, Slider } from 'antd';
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
        <Form layout="horizontal">
          <Row>
            <Col span={24}>
              <Form.Item>
                <Checkbox
                  checked={numeric}
                  onChange={() => {
                    setNumeric(!numeric);
                  }}
                >
                  数字 0 ～ 9
                </Checkbox>
              </Form.Item>
              <Form.Item>
                <Checkbox
                  checked={lowerCase}
                  onChange={() => {
                    setLowerCase(!lowerCase);
                  }}
                >
                  小写字母 a ~ z
                </Checkbox>
              </Form.Item>
              <Form.Item>
                <Checkbox
                  checked={upperCase}
                  onChange={() => {
                    setUpperCase(!upperCase);
                  }}
                >
                  大写字母 A ~ Z
                </Checkbox>
              </Form.Item>
              <Form.Item>
                <Checkbox
                  checked={symbol}
                  onChange={() => {
                    setSymbol(!symbol);
                  }}
                >
                  符号
                </Checkbox>
              </Form.Item>
              <Form.Item>
                <Input
                  disabled={!symbol}
                  value={symbolChars}
                  onChange={(event) => {
                    setSymbolChars(event.target.value);
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item>
                <Slider
                  value={length}
                  min={6}
                  max={64}
                  step={1}
                  marks={{ 6: '6', 8: '8', 16: '16', 32: '32', 64: '64' }}
                  onChange={(value) => {
                    if (typeof value === 'number') {
                      setLength(value);
                    }
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>

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
