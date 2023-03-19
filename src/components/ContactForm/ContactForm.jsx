import PropTypes from 'prop-types';
import { Formik } from "formik";
import * as Yup from 'yup';
import { nanoid } from "nanoid";
import { Form, FormField, Field, ErrorMessage } from "./ContactForm.styled";

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(1, 'Too Short!')
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan")
        .required('Required'),
    number: Yup.string()
        .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")
        .required('Required'),
});

const ContactForm = ({ onFormSubmit }) => {
    return (
        <Formik 
            initialValues={{ 
                name: '',
                number: '',
            }} 
            validationSchema={ContactSchema}
            onSubmit={(values, actions) => {
                onFormSubmit({
                    ...values,
                    id: nanoid(),
                });
                actions.resetForm();
            }}>
            
            <Form>
                <FormField>
                    Name 
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" component="div"/>
                </FormField>
                <FormField>
                    Number 
                    <Field name="number" type="tel" />
                    <ErrorMessage name="number" component="div"/>
                </FormField>
                <button type="submit">Add contant</button>
            </Form>
        </Formik>
    )
};

export default ContactForm;

ContactForm.propTypes = {
    onFormSubmit: PropTypes.func.isRequired
}