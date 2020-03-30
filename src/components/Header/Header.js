import React from "react";
import { Layout, Button, Menu } from "antd";

import "./Header.scss";

import indie from "../../assets/img/indie.png";
export default function Encabezado() {
  const { Header } = Layout;
  return (
    <Header>
      <div className="logo">
        <img className="logo-img" src={indie}></img>
      </div>
      <div className="logo">
        <Button ghost>Resgistrate</Button>
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1"></Menu.Item>
        <Menu.Item key="2">Quienes somos</Menu.Item>
        <Menu.Item key="3">Productos</Menu.Item>
        <Menu.Item key="4">Diseños</Menu.Item>
      </Menu>
    </Header>
  );
}
