import React from 'react';
import {Field, Form} from 'react-final-form';

const StreamForm = (props) => {

    const renderError = (touched, error) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    const renderInput = ({input, label, meta: {error, touched}}) => { // destructure props
        const errorCss = touched && error ? 'error' : '';
        return (
            <div className={`field ${errorCss}`}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(touched, error)}
            </div>
        );
    }

    const onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    return (

        <Form
            initialValues={props.initialValues}
            onSubmit={onSubmit}
            validate={(formValues) => {
                const errors = {};
                if(!formValues.title) errors.title = 'You must enter a title';
                if(!formValues.description) errors.description = 'You must enter a description';
                return errors;
            }}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className="ui form error">
                    <Field name="title" component={renderInput} label="Enter Title" />
                    <Field
                        name="description"
                        component={renderInput}
                        label="Enter Description"
                    />
                    <button className="ui button primary">Submit</button>
                </form>
            )}
        />
    );
}

/*const validate = (formValues) => {
    const errors = {};
    if(!formValues.title) errors.title = 'You must enter a title';
    if(!formValues.description) errors.description = 'You must enter a description';
    return errors;
}*/

export default StreamForm;
// export default reduxForm({form: 'StreamForm', validate})(StreamForm);
