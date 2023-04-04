import React, { Component } from "react";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";

import Valuebox from "../common/widget/valuebox";
import Row from "../common/layout/row";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Dashboard" small="Versão 1.0" />
        <Content>
          <Row>
            <Valuebox
              cols="12 4"
              color="green"
              icon="bank"
              value="R$ 10"
              text="Total de Creditos"
            />
            <Valuebox
              cols="12 4"
              color="red"
              icon="credit-card"
              value="R$ 10"
              text="Total de Debitos"
            />
            <Valuebox
              cols="12 4"
              color="blue"
              icon="money"
              value="R$ 10"
              text="Valor Consolidado"
            />
          </Row>
        </Content>
      </div>
    );
  }
}
