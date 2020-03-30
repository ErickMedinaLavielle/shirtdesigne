import React from "react";
import { Layout } from "antd";
import Encabezado from "../Header";
import Contenido from "../Content";
import Pie from "../Footer";

export default function Body() {
  return (
    <Layout>
      <Encabezado></Encabezado>

      <Contenido></Contenido>

      <Pie></Pie>
    </Layout>
  );
}
