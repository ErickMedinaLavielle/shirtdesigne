import React from "react";
import { Row, Col, Carousel, Layout } from "antd";
import "./Content.scss";

import image from "../../assets/img/img_principal.jpg";
import create from "../../assets/img/pick.png";
import send from "../../assets/img/send.png";
import receive from "../../assets/img/receive.png";
import diseño from "../../assets/img/diseño.jpg";
import kaneki from "../../assets/img/kaneki.jpg";
import nogame from "../../assets/img/Nogame.jpg";
export default function Content() {
  const { content } = Layout;
  return (
    <content>
      <Row>
        <div className="banner">
          <div className="row">
            <h1 className="title">Diseña camisetas online</h1>
            <h3 className="text">
              ¡Crea camisetas online con tus propios diseños o elige los creados
              por la comunidad!
            </h3>
          </div>
        </div>
      </Row>
      <Row className="steps">
        <Col span={8}>
          <div className="feature-list">
            <div className="feature-list-item-img">
              <img className="img-item" src={create} alt="itemCreate"></img>
            </div>
            <div className="feature-list-item-desc">
              <span>
                <p>
                  <strong>Elige tu camiseta</strong> s simply dummy text of the
                  printing and typesetting industry.
                </p>
              </span>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className="feature-list">
            <div className="feature-list-item-img">
              <img className="img-item" src={send} alt="itemCreate"></img>
            </div>
            <div className="feature-list-item-desc">
              <span>
                <p>
                  <strong>Envia tu diseño</strong> It is a long established fact
                  that a reader will be distracted by the readable content of a
                  page when looking at its layout.
                </p>
              </span>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className="feature-list">
            <div className="feature-list-item-img">
              <img className="img-item" src={receive} alt="itemCreate"></img>
            </div>
            <div className="feature-list-item-desc">
              <span>
                <p>
                  <strong>Recibe tu pedido</strong> Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
              </span>
            </div>
          </div>
        </Col>
      </Row>
      <Row justify="center">
        <h1 className="encabezado-slider">
          <strong>¡Elige una de los diseños hechos por la comunidad!</strong>
        </h1>
      </Row>
      <Row justify="center">
        <Carousel autoplay>
          <div>
            <img className="img-slider" src={diseño}></img>
          </div>
          <div>
            <img className="img-slider" src={kaneki}></img>
          </div>
          <div>
            <img className="img-slider" src={nogame}></img>
          </div>
        </Carousel>
      </Row>
    </content>
  );
}
