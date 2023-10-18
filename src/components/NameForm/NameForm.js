import { Formik, ErrorMessage } from 'formik';
import { Component } from 'react';
import * as Yup from 'yup';
import { StyledForm, AddBtn, StyledField } from './NameForm.styled';
import { nanoid } from 'nanoid';

const formSquema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.number().required('Required'),
});
export class NameForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleInputChange = evt => {
    const { value, name } = evt.target;
        this.setState({ [name]: value.trim()});
  };

  handleSubmit = (values, actions) => {
    this.props.onSubmit(values);
    actions.resetForm();
    
  };

  render() {
    return (
      <Formik
        initialValues={{ id: nanoid(), name: '', number: '' }}
        validationSchema={formSquema}
        onSubmit={this.handleSubmit}
        
      >
        <StyledForm>
          <label>
            {' '}
            Name
            <StyledField
              name="name"
              onInput={this.handleInputChange}
              placeholder="Name"
            />
            <ErrorMessage name="name" />
          </label>

          <label>
            {' '}
            Number
            <StyledField
              name="number"
              onInput={this.handleInputChange}
              placeholder="Phone number"
            />
            <ErrorMessage name="number" />
          </label>

          <AddBtn type="submit">Add contact</AddBtn>
        </StyledForm>
      </Formik>
    );
  }
}
