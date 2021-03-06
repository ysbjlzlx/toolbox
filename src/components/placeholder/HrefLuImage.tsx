import Image from 'mui-image';
import { useEffect, useState } from 'react';
import { PlaceholderConfig } from './index';
import { defaultConfig, resolveConfig } from './util';

const HrefLuImage = (input: PlaceholderConfig) => {
  const [imgUrl, setImgUrl] = useState<string>('');
  const [config, setConfig] = useState<PlaceholderConfig>(defaultConfig());

  useEffect(() => {
    setConfig(resolveConfig(input));
  }, [input]);

  useEffect(() => {
    const url =
      `https://iph.href.lu/${config.width}x${config.height}` +
      `?bg=${config.bgColor?.substring(1)}` +
      `&fg=${config.textColor?.substring(1)}` +
      `&text=${encodeURIComponent(config.text || 'img')}`;
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

export default HrefLuImage;
