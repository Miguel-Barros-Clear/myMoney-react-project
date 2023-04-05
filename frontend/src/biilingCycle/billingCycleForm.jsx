import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field, formValueSelector } from "redux-form";

import LabelAndInput from "../common/form/labelAndInput";
import { init } from "./billingCycleActions";
import ItemList from "./itemList";

export class BillingCycleForm extends Component {
  render() {
    const { handleSubmit, readOnly, credits, debts } = this.props;
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
          <ItemList
            cols="12 6"
            list={credits}
            readOnly={readOnly}
            field="credits"
            legend="Créditos"
          />
          <ItemList
            cols="12 6"
            list={debts}
            readOnly={readOnly}
            field="debts"
            legend="Debitos"
            showStatus={true}
          />
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
const selector = formValueSelector("billingCycleForm");
const mapStateToProps = (state) => ({
  credits: selector(state, "credits"),
  debts: selector(state, "debts"),
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);
