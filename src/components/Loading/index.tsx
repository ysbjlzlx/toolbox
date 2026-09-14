import { Spin } from "antd";

export default function Loading() {
  return (
    <Spin description="加载中...">
      <div className="h-[100vh] w-full" />
    </Spin>
  );
}
