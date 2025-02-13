import type { MenuDataItem, ProLayoutProps, ProSettings } from "@ant-design/pro-components";
import { ProConfigProvider, ProLayout } from "@ant-design/pro-components";
import { useBoolean } from "ahooks";
import { App, Button, ConfigProvider } from "antd";
import type { FC, ReactNode } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";

import Iconify from "@/components/Iconify";
import { menuData } from "@/layouts/defaultProps";

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

const BaseLayout: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, { toggle }] = useBoolean(false);

  const actionsRender: ProLayoutProps["actionsRender"] = (props) => {
    const { isMobile } = props;
    if (isMobile) return [];
    return [
      <Link to="https://github.com/ysbjlzlx/toolbox/tree/develop" aria-label="GitHub" target="_blank" key="GitHub">
        <Iconify icon="logos:github-icon" fontSize={24} color="#000" />
      </Link>,
    ];
  };

  const collapsedButtonRender: ProLayoutProps["collapsedButtonRender"] = (collapsed) => {
    return (
      <>
        {collapsed ? (
          <Button ghost onClick={toggle}>
            <Iconify icon="lucide:chevrons-right" fontSize={24} color="#000" />
          </Button>
        ) : (
          <Button ghost onClick={toggle}>
            <Iconify icon="lucide:chevrons-left" fontSize={24} color="#000" />
          </Button>
        )}
      </>
    );
  };

  const onMenuHeaderClick = () => {
    navigate("/");
  };
  const proLayoutProps: ProLayoutProps = {
    logo: "/logo.svg",
    title: "Toolbox",
    collapsed,
    menuItemRender,
    onMenuHeaderClick,
    actionsRender,
    collapsedButtonRender,
    onCollapse: toggle,
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
    <ConfigProvider theme={{ cssVar: true, hashed: false }}>
      <ProConfigProvider hashed={false}>
        <App>
          <ProLayout {...proLayoutProps} {...settings}>
            <div>
              <Outlet />
            </div>
          </ProLayout>
        </App>
      </ProConfigProvider>
    </ConfigProvider>
  );
};
export default BaseLayout;
