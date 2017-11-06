import React from "react";
import { connect } from "react-redux";

import { Field, SubmissionError, reduxForm } from "redux-form";
import { PageHeader, Form } from "react-bootstrap";
import FormField from "components/common/FormField";
import FormSubmit from "components/common/FormSubmit";
import {sagaElectrycityActions} from 'sagas/electricity';
import {modalActions} from 'reducers/modalConstants';

const INITIAL_VALUES = {
  
}

export class ElectricityEditor extends React.Component {
    constructor(props) {
        super(props);
    
        // bind <this> to the event method
        this.formSubmit = this.formSubmit.bind(this);
    }

    render() {
        const {handleSubmit, error, invalid, submitting} = this.props;  
        return(
            <div className='water-editor'>
                <PageHeader>Electricity values</PageHeader>
                <Form horizontal onSubmit={handleSubmit(this.formSubmit)}>
                <Field type="date" component={FormField} name="date" label="date"/>               
                <Field component={FormField} name="globalClock" label="global clock"/>
                <Field component={FormField} name="localClock" label="local clock"/>
                <Field component={FormField} name="sum" label="sum to pay"/>
                <FormSubmit error={error} invalid={invalid} submitting={submitting} buttonSaveLoading="Saving..."
                    buttonSave="Save data"/>
                </Form>
            </div>
        )
    }

    formSubmit(values) {
        const {dispatch} = this.props;
        return new Promise((resolve, reject) => {
          dispatch({
            type: sagaElectrycityActions.ADD_ELECTRO_ITEM,
            values,
            callbackError: (error) => {
              reject(new SubmissionError({_error: error}));
              
            },
            callbackSuccess: () => {
              dispatch({
                type: modalActions.HIDE_MODAL
              });
              resolve();
            }
          });
        });
      }
}

const ElectricityEditorForm = reduxForm({
    form: 'electro_edit',
    validate: function (values) {
      const errors = {};
      if (!values.username) {
        errors.username = 'Username is required';
      }
      return errors;
    },
  })(ElectricityEditor);

  function mapStateToProps(state, own_props) {    
    const {form = {}, waterEditor, electro} = state
    const {electro_editor = {}} = form;
    const {values = {}} = electro_editor;
    const editor = waterEditor ? electro.find(el => el.id == waterEditor) : false;
    return {
      waterEditor,
      values,
      initialValues: editor || INITIAL_VALUES
    };
  }

export default connect(mapStateToProps)(ElectricityEditorForm);