import { Image } from "antd";
import { useEffect, useState } from "react";

import ImageWrapper from "@/pages/image/placeholder/ImageWrapper.tsx";
import type { PlaceholderConfig } from "./index";
import { defaultConfig, resolveConfig } from "./util";

const DummyImage = (input: PlaceholderConfig) => {
  const [imgUrl, setImgUrl] = useState<string>("");
  const [config, setConfig] = useState<PlaceholderConfig>(defaultConfig());

  useEffect(() => {
    setConfig(resolveConfig(input));
  }, [input]);

  useEffect(() => {
    const url =
      `https://dummyimage.com/${config.width}x${config.height}` +
      `/${config.bgColor?.substring(1)}/${config.textColor?.substring(1)}` +
      `?text=${encodeURIComponent(config.text || "img")}`;
    setImgUrl(url);
  }, [config]);

  return (
    <ImageWrapper>
      <Image
        src={imgUrl}
        style={{ width: `${config.width}px`, height: `${config.height}px` }}
        alt={config.text || "placeholder img"}
      />
    </ImageWrapper>
  );
};

export default DummyImage;
