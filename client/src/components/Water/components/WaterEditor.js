import React from "react";
import { connect } from "react-redux";

import { Field, SubmissionError, reduxForm } from "redux-form";
import { PageHeader, Form } from "react-bootstrap";
import FormField from "components/common/FormField";
import FormSubmit from "components/common/FormSubmit";
import {sagaWaterActions} from 'sagas/sagaWaterConstants';
import {modalActions} from 'reducers/modalConstants';

const INITIAL_VALUES = {
  shmira: '171'
}

export class WaterEditor extends React.Component {
    constructor(props) {
        super(props);
    
        // bind <this> to the event method
        this.formSubmit = this.formSubmit.bind(this);
    }

    render() {
        const {handleSubmit, error, invalid, submitting} = this.props;

       
        return(
            <div className='water-editor'>
                <PageHeader></PageHeader>
                <Form horizontal onSubmit={handleSubmit(this.formSubmit)}>
                <Field type="date" component={FormField} name="date" label="date"/>               
                <Field component={FormField} name="globalClock" label="global clock"/>
                <Field component={FormField} name="localClock" label="local clock"/>
                <Field component={FormField} name="moatzaSum" label="moatza sum"/>
                <Field component={FormField} name="shmira" label="shmira"/>
                <Field component={FormField} name="biuv" label="biuv"/>
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
            type: sagaWaterActions.WATER_EDITOR_ADD,
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

const WaterEditorForm = reduxForm({
    form: 'water_edit',
    validate: function (values) {
      const errors = {};
      if (!values.username) {
        errors.username = 'Username is required';
      }
      return errors;
    },
  })(WaterEditor);

  function mapStateToProps(state, own_props) {
    //const user = state.users.find(x => Number(x.id) === Number(own_props.params.id)) || {};
    const {form = {}, waterEditor, water} = state
    const {water_editor = {}} = form;
    const {values = {}} = water_editor;
    const editor = waterEditor ? water.find(el => el.id == waterEditor) : false;
    return {
      waterEditor: state.waterEditor,
      values,
      initialValues: editor || INITIAL_VALUES
    };
  }

export default connect(mapStateToProps)(WaterEditorForm);