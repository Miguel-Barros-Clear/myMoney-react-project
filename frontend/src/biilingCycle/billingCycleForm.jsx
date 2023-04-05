import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import LabelAndInput from "../common/form/labelAndInput";

export class BillingCycleForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} role="form">
        <div className="box-body">
          <Field
            name="name"
            component={LabelAndInput}
            label="Nome"
            cols="12 4"
            placeholder="Informe o nome"
          />
          <Field
            name="month"
            component={LabelAndInput}
            label="Mês"
            cols="12 4"
            placeholder="Informe o mes"
            type="number"
          />
          <Field
            name="year"
            component={LabelAndInput}
            label="Ano"
            cols="12 4"
            placeholder="Informe o ano"
            type="number"
          />
        </div>
        <div className="box-footer">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: "billingCycleForm" })(BillingCycleForm);