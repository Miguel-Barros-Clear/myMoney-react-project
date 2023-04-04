import React, { Component } from "react";
import Axios from "axios";
import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import Valuebox from "../common/widget/valuebox";
import Row from "../common/layout/row";

const BASE_URL = "http://localhost:3003/api";

export default class Dashboard2 extends Component {
  constructor(props) {
    super(props);
    this.state = { credit: 0, debt: 0 };
  }

  componentWillMount() {
    Axios.get(`${BASE_URL}/billingCycles/summary`).then((resp) =>
      this.setState(resp.data)
    );
  }

  render() {
    const { credit, debt } = this.state;

    return (
      <div>
        <ContentHeader title="Dashboard" small="Versão 2.0" />
        <Content>
          <Row>
            <Valuebox
              cols="12 4"
              color="green"
              icon="bank"
              value={`R$ ${credit}`}
              text="Total de Creditos"
            />
            <Valuebox
              cols="12 4"
              color="red"
              icon="credit-card"
              value={`R$ ${debt}`}
              text="Total de Debitos"
            />
            <Valuebox
              cols="12 4"
              color="blue"
              icon="money"
              value={`R$ ${debt - credit}`}
              text="Valor Consolidado"
            />
          </Row>
        </Content>
      </div>
    );
  }
}
