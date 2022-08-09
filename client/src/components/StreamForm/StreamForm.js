import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import './StreamForm.scss';

class StreamForm extends Component{
    renderInput({input, label, meta}){
        return(
            <div className={'stream-form--field'}>
                <label className={'stream-form--label'}>{label}</label>
                <input {...input} className={'stream-form--input'}/>
                {meta.touched && meta.error ? <div className={'stream-form--error'}>{meta.error}</div> : null}
            </div>
        )
    }

    onSubmit = formValues => this.props.onSubmit(formValues);

    render() {
        return(
            <form className={'stream-form'} onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name={'title'} component={this.renderInput} label={'Enter title'} />
                <Field name={'description'} component={this.renderInput} label={'Enter description'}/>
                <button className={'stream-form--button'} >Submit</button>
            </form>
        )
    }


}
const validate = (formValues) => {
    const errors = {};
    if(!formValues.title){
        errors.title = 'You must enter a title'
    }
    if(!formValues.description){
        errors.description = 'You must enter a description'
    }

    return errors;
}

export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamForm);