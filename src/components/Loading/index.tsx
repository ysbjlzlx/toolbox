import { Spin } from "antd";

export default function Loading() {
  return (
    <Spin tip="加载中...">
      <div className="h-[100vh] w-full" />
    </Spin>
  );
}
