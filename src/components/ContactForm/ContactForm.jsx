import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import {
  ContactForm,
  ButtonAdd,
  InputError,
  FormInput,
  FormLabel,
} from './ContactForm.styled';

const validationSchema = Yup.object({
  name: Yup.string().required('This field is required'),
  number: Yup.string().required('This field is required'),
});

const initialValues = {
  name: '',
  number: '',
};

const FormContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    const names = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (names) {
      alert(name + ' is already in contacts');
      return;
    }

    dispatch(addContact({ name: name, number: number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <ContactForm autoComplete="off">
        <FormLabel>
          Name
          <FormInput placeholder="Full name" type="text" name="name" />
          <ErrorMessage name="name" component={InputError} />
        </FormLabel>
        <br />
        <FormLabel>
          Number
          <FormInput
            placeholder="Phone number: +380..."
            type="tel"
            name="number"
          />
          <ErrorMessage name="number" component={InputError} />
        </FormLabel>
        <ButtonAdd type="submit">Submit</ButtonAdd>
      </ContactForm>
    </Formik>
  );
};

export default FormContacts;
