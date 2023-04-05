import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field } from "redux-form";

import LabelAndInput from "../common/form/labelAndInput";
import { init } from "./billingCycleActions";
import CreditList from "./creditList";

export class BillingCycleForm extends Component {
  render() {
    const { handleSubmit, readOnly } = this.props;
    return (
      <form onSubmit={handleSubmit} role="form">
        <div className="box-body">
          <Field
            readOnly={readOnly}
            name="name"
            component={LabelAndInput}
            label="Nome"
            cols="12 4"
            placeholder="Informe o nome"
          />
          <Field
            readOnly={readOnly}
            name="month"
            component={LabelAndInput}
            label="Mês"
            cols="12 4"
            placeholder="Informe o mes"
            type="number"
          />
          <Field
            readOnly={readOnly}
            name="year"
            component={LabelAndInput}
            label="Ano"
            cols="12 4"
            placeholder="Informe o ano"
            type="number"
          />
          <CreditList cols="12 6" readOnly={readOnly} />
        </div>
        <div className="box-footer">
          <button type="submit" className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.init}
          >
            Cancelar
          </button>
        </div>
      </form>
    );
  }
}

BillingCycleForm = reduxForm({
  form: "billingCycleForm",
  destroyOnUnmount: false,
})(BillingCycleForm);

const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycleForm);
