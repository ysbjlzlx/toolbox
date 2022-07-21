import _ from 'lodash';
import { useEffect, useState } from 'react';
import { PlaceholderConfig } from './index';

const defaultConfig: PlaceholderConfig = {
  width: 150,
  height: 150,
  suffix: '.png',
  bgColor: '#cccccc',
  textColor: '#969696',
  text: '',
};

const DummyImage = (input: PlaceholderConfig) => {
  const [imgUrl, setImgUrl] = useState<string>();
  const [config, setConfig] = useState<PlaceholderConfig>(defaultConfig);

  useEffect(() => {
    setConfig((oldVal) => {
      const newVal = _.clone(oldVal);
      if (input.width && input.width > 0) {
        newVal.width = input.width;
      }
      if (input.height && input.height > 0) {
        newVal.height = input.height;
      } else {
        newVal.height = defaultConfig.height;
      }
      if (input.suffix) {
        newVal.suffix = input.suffix;
      }
      if (input.bgColor) {
        newVal.bgColor = input.bgColor;
      }
      if (input.textColor) {
        newVal.textColor = input.textColor;
      }
      if (input.text && input.text !== '') {
        newVal.text = input.text;
      } else {
        newVal.text = '';
      }
      return newVal;
    });
  }, [input]);

  useEffect(() => {
    const url =
      `https://dummyimage.com/${config.width}x${config.height}` +
      `/${config.bgColor?.substring(1)}/${config.textColor?.substring(1)}` +
      `?text=${encodeURIComponent(config.text || 'img')}`;
    setImgUrl(url);
  }, [config]);

  return (
    <img
      style={{
        width: `${config.width}px`,
        height: `${config.height}px`,
      }}
      alt={config.text || 'placeholder img'}
      src={imgUrl}
    />
  );
};

export default DummyImage;
