import React from "react";
import { Layout, Row, Col } from "antd";
import "./Footer.scss";

import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";

export default function Footer() {
  const { footer } = Layout;
  return (
    <footer className="footer">
      <Row>
        <Col span={8} className="col">
          <p>
            <strong>Redes sociales</strong>
          </p>
          <br />
          <Row gutter={25}>
            <Col>
              <img className="img-redes" src={facebook}></img>
            </Col>
            <p>Loremipsum/facebook</p>
            <Col></Col>
          </Row>
          <Row gutter={25}>
            <Col>
              <img className="img-redes" src={instagram}></img>
            </Col>
            <p>Loremipsum/intagram</p>
            <Col></Col>
          </Row>
        </Col>
        <Col span={8} className="col">
          <p>
            <strong>Contacto</strong>
          </p>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            efficitur, risus pulvinar gravida tincidunt, odio sapien imperdiet
            erat, vel tempor justo libero vitae purus.
          </p>
        </Col>
        <Col span={8} className="col">
          <p>
            <strong>Ubicación</strong>
          </p>
          <br />
          <p>
            Cto. Circunvalacion Pte. 31, Cd. Satélite, 53100 Naucalpan de
            Juárez, Méx.
          </p>
        </Col>
      </Row>
    </footer>
  );
}
