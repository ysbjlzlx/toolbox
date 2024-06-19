import type { MenuDataItem, ProLayoutProps, ProSettings } from "@ant-design/pro-components";
import { ProConfigProvider, ProLayout } from "@ant-design/pro-components";
import { App, ConfigProvider } from "antd";
import type { FC, ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Iconify from "@/components/Iconify";
import { menuData } from "@/layouts/defaultProps";
import { Outlet } from "react-router-dom";

const settings: Partial<ProSettings> = {
  fixSiderbar: true,
  layout: "side",
  splitMenus: false,
  navTheme: "light",
  contentWidth: "Fluid",
  colorPrimary: "#1677FF",
  siderMenuType: "sub",
};

const menuItemRender = (item: MenuDataItem, dom: ReactNode) => {
  if (item.disabled || item.path === undefined) {
    return dom;
  }
  return <Link to={item.path}>{dom}</Link>;
};

const actionsRender: ProLayoutProps["actionsRender"] = (props) => {
  if (props.isMobile) return [];
  return [
    <Link to="https://github.com/ysbjlzlx/toolbox/tree/develop" aria-label="GitHub" target="_blank" key="GitHub">
      <Iconify icon="lucide:github" fontSize={24} color="#000" />
    </Link>,
  ];
};

const BaseLayout: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onMenuHeaderClick = () => {
    navigate("/");
  };
  const proLayoutProps: ProLayoutProps = {
    logo: "/logo.svg",
    title: "Toolbox",
    menuItemRender,
    onMenuHeaderClick,
    actionsRender,
    location: location,
    menu: {
      request: async () => {
        return menuData;
      },
    },
    token: {
      pageContainer: {
        paddingInlinePageContainerContent: 0,
        paddingBlockPageContainerContent: 0,
      },
    },
  };

  return (
    <ProConfigProvider hashed={false}>
      <ConfigProvider theme={{ cssVar: true, hashed: false }}>
        <App>
          <ProLayout {...proLayoutProps} {...settings}>
            <div>
              <Outlet />
            </div>
          </ProLayout>
        </App>
      </ConfigProvider>
    </ProConfigProvider>
  );
};
export default BaseLayout;
