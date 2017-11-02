import React from "react";
import { connect } from "react-redux";

import { Field, SubmissionError, reduxForm } from "redux-form";
import { PageHeader, Form } from "react-bootstrap";
import FormField from "components/common/FormField";
import FormSubmit from "components/common/FormSubmit";
import {loginSagaActions} from 'sagas/login';
import { browserHistory } from 'react-router';

export class AuthEditor extends React.Component {
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
    }

    render() {
        const {handleSubmit, error, invalid, submitting} = this.props;  
        return(
            <div className='login'>
                <PageHeader>Please login</PageHeader>
                <Form horizontal onSubmit={handleSubmit(this.formSubmit)}>
                <Field component={FormField} name="username" label="user name"/>
                <Field type="password" component={FormField} name="password" label="password"/>
                <FormSubmit error={error} invalid={invalid} submitting={submitting} buttonSaveLoading="login in..."
                    buttonSave="Login"/>
                </Form>
            </div>
        )
    }

    formSubmit(values) {
        const {dispatch} = this.props;
        return new Promise((resolve, reject) => {
          dispatch({
            type: loginSagaActions.LOGIN,
            values,
            callbackError: (error) => {
              reject(new SubmissionError({_error: error}));
            },
            callbackSuccess: () => {              
              resolve();
              browserHistory.push(`/`);
            }
          });
        });
      }
}

const AuthEditorForm = reduxForm({
    form: 'login',
    validate: function (values) {
      const errors = {};
      if (!values.username) {
        errors.username = 'Username is required';
      }
      if (!values.password) {
        errors.username = 'Password is required';
      }
      return errors;
    },
  })(AuthEditor);

  function mapStateToProps(state, own_props) {
    const {form = {}} = state
    const {login = {}} = form;
    const {values = {}} = login;
    return {
      values,
      initialValues: {}
    };
  }

export default connect(mapStateToProps)(AuthEditorForm);