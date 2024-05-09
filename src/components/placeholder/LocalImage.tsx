import type { PlaceholderConfig } from '@/components/placeholder/index';
import ImageWrapper from '@/pages/image/placeholder/ImageWrapper.tsx';
import { Button } from 'antd';
import * as d3 from 'd3';
import d3ToPng from 'd3-svg-to-png';
import type { FC } from 'react';
import { useEffect, useRef } from 'react';

const LocalImage: FC<PlaceholderConfig> = (props) => {
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef && containerRef.current) {
      d3.select(containerRef.current).select('svg').remove();
      const svg = d3
        .select(containerRef.current)
        .append('svg')
        .attr('xmlns', 'http://www.w3.org/2000/svg')
        .attr('version', '1.1')
        .attr('width', props.width)
        .attr('height', props.height)
        .style('display', 'block');

      const g = svg.append('g');
      g.append('title').text('Layer 1');
      g.append('rect')
        .attr('height', props.height)
        .attr('width', props.width)
        .attr('fill', props.bgColor)
        .attr('id', 'svg_2');
      g.append('text')
        .attr('text-anchor', 'middle')
        .attr('fill', props.textColor)
        .attr('x', props.width / 2)
        .attr('y', props.height / 2)
        .attr('dominant-baseline', 'middle')
        .attr('id', 'svg_3')
        .attr('stroke-width', '0')
        .attr('font-size', '24')
        .attr(
          'font-family',
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        )
        .text(props.text);
      console.log(svg.node()?.outerHTML);
    }
  }, [props.bgColor, props.height, props.text, props.textColor, props.width]);
  const onClickDownloadBtn = () => {
    if (containerRef && containerRef.current) {
      d3ToPng(containerRef.current, `${props.width}x${props.height}-${props.text}`, {
        quality: 1,
        background: 'white',
      }).then((fileData) => {
        console.log(fileData);
      });
    }
  };
  return (
    <div>
      <div>
        <Button type="primary" onClick={onClickDownloadBtn}>
          下载
        </Button>
      </div>
      <ImageWrapper>
        <div ref={containerRef} style={{ display: 'inline-block' }} />
      </ImageWrapper>
    </div>
  );
};
export default LocalImage;
