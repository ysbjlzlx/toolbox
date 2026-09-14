import type { MenuDataItem, ProLayoutProps, ProSettings } from "@ant-design/pro-components";
import { ProConfigProvider, ProLayout } from "@ant-design/pro-components";
import { App, Button } from "antd";
import { type FC, type ReactNode, useState } from "react";
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
  const [collapsed, setToggle] = useState<boolean>(false);

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
          <Button
            ghost
            onClick={() => {
              setToggle(false);
            }}
          >
            <Iconify icon="lucide:chevrons-right" fontSize={24} color="#000" />
          </Button>
        ) : (
          <Button
            ghost
            onClick={() => {
              setToggle(true);
            }}
          >
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
    onCollapse: (collapsed) => {
      setToggle(collapsed);
    },
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
      <App>
        <ProLayout {...proLayoutProps} {...settings}>
          <div>
            <Outlet />
          </div>
        </ProLayout>
      </App>
    </ProConfigProvider>
  );
};
export default BaseLayout;
