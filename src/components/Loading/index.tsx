import { Spin } from 'antd';

export default function Loading() {
  return (
    <Spin tip="加载中...">
      <div className="w-full h-[100vh]" />
    </Spin>
  );
}
