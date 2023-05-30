import { Image } from 'antd';
import { useEffect, useState } from 'react';
import ImageWrapper from '../../app/placeholder/ImageWrapper';
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
    <ImageWrapper>
      <Image
        preview={false}
        src={imgUrl}
        width={config.width}
        height={config.height}
        style={{
          width: `${config.width}px`,
          height: `${config.height}px`,
        }}
        alt={config.text || 'placeholder img'}
      />
    </ImageWrapper>
  );
};

export default HrefLuImage;
