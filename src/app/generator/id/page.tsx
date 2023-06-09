'use client';

import { PageContainer } from '@ant-design/pro-components';
import { createId } from '@paralleldrive/cuid2';
import { TwitterSnowflake } from '@sapphire/snowflake';
import { useCounter } from 'ahooks';
import { Button, Col, Row, Segmented } from 'antd';
import { SegmentedLabeledOption } from 'antd/es/segmented';
import ObjectID from 'bson-objectid';
import { nanoid } from 'nanoid';
import { SegmentedRawOption, SegmentedValue } from 'rc-segmented';
import { FC, useEffect, useState } from 'react';
import { ulid } from 'ulid';
import { v4 as uuidv4 } from 'uuid';

import TextResultBox from '../../../components/TextResultBox';

const UidPage: FC = () => {
  const [type, setType] = useState<SegmentedValue>('cuid');
  const [result, setResult] = useState<string>('');
  const [counter, { inc }] = useCounter(0);

  const options: (SegmentedRawOption | SegmentedLabeledOption)[] = [
    { label: 'Cuid2', value: 'cuid' },
    { label: 'BSON ObjectID', value: 'objectid' },
    { label: 'Nano ID', value: 'nanoid' },
    { label: 'ULID', value: 'ulid' },
    { label: 'UUID', value: 'uuid' },
    { label: 'Snowflake ID', value: 'snowflakeid' },
  ];

  useEffect(() => {
    if (type === 'cuid') {
      setResult(createId);
    } else if (type === 'objectid') {
      setResult(ObjectID().toHexString());
    } else if (type === 'nanoid') {
      setResult(nanoid());
    } else if (type === 'ulid') {
      setResult(ulid());
    } else if (type === 'uuid') {
      setResult(uuidv4());
    } else if (type === 'snowflakeid') {
      setResult(TwitterSnowflake.generate().toString());
    }
  }, [type, counter]);
  return (
    <PageContainer>
      <Row justify="center">
        <Col span={16}>
          <Segmented block={true} options={options} value={type} onChange={(value) => setType(value)} />
          <div style={{ marginTop: '10px', marginBottom: '10px' }}>
            <Button onClick={() => inc()}>刷新</Button>
          </div>
          <div style={{ marginTop: '10px' }}>
            <TextResultBox title="结果" text={result} />
          </div>
        </Col>
      </Row>
    </PageContainer>
  );
};
export default UidPage;
