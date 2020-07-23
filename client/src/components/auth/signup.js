import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Signup extends PureComponent {

    handleFormSubmit(formProps) {
        this.props.signupUser(formProps)
    }

    renderField = ({ input, label, type, meta: { touched, error } }) => (
        <div>
            <label>{label}</label>
            <div>
                <input className="form-control" {...input} placeholder={label} type={type} />
                {touched && error && <span className="text-danger">{error}</span>}
            </div>
        </div>
    );

    renderError() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <h5>Oops! {this.props.errorMessage}</h5>
                </div>
            );
        }
    }

    render() {
        const { handleSubmit, submitting } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <Field
                        name="name"
                        label="Name"
                        component={this.renderField}
                        type="text" 
                    />
                </fieldset>
                <fieldset className="form-group">
                    <Field
                        name="email"
                        label="Email"
                        component={this.renderField}
                        type="text" 
                    />
                </fieldset>
                <fieldset className="form-group">
                    <Field
                        name="password"
                        label="Password"
                        component={this.renderField}
                        type="password" 
                    />
                </fieldset>
                {this.renderError()}
                <button type="submit" className="btn btn-primary" disabled={submitting}>Sign Up</button>

            </form>
        );
    }
}

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Please enter an name';
    }

    if (!values.email) {
        errors.email = 'Please enter an email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Please enter an password';
    }

    return errors;
};

const mapStateToProps = (state) => {
    return { errorMessage: state.auth.error }
};

export default reduxForm({
    form: 'signin',
    validate
})(connect(mapStateToProps, actions)(Signup));
