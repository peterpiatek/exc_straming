import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamForm extends Component {

    renderError = (touched, error) => {
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = (props) => {
        const {input, label, meta: {error, touched}} = props;
        const errorCss = touched && error ? 'error' : '';
        return (
            <div className={`field ${errorCss}`}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(touched, error)}
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Send</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title) errors.title = 'You must enter a title';
    if(!formValues.description) errors.description = 'You must enter a description';
    return errors;
}

export default reduxForm({form: 'StreamForm', validate})(StreamForm);
