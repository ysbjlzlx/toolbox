import { Image } from 'antd';
import { useEffect, useState } from 'react';

import type { PlaceholderConfig } from './index';
import { defaultConfig, resolveConfig } from './util';

const PlaceholderImage = (input: PlaceholderConfig) => {
  const [imgUrl, setImgUrl] = useState<string>('');
  const [config, setConfig] = useState<PlaceholderConfig>(defaultConfig());

  useEffect(() => {
    setConfig(resolveConfig(input));
  }, [input]);

  useEffect(() => {
    const url =
      `https://via.placeholder.com/${config.width}x${config.height}` +
      `/${config.bgColor?.substring(1)}/${config.textColor?.substring(1)}` +
      `?text=${encodeURIComponent(config.text || 'img')}` +
      config.suffix;
    setImgUrl(url);
  }, [config]);

  return (
    <Image
      src={imgUrl}
      style={{ width: `${config.width}px`, height: `${config.height}px` }}
      alt={config.text || 'placeholder img'}
    />
  );
};

export default PlaceholderImage;
