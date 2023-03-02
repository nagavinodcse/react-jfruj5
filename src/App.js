import React from 'react';
import './style.css';
import { useForm, FormProvider } from 'react-hook-form';
import AutoCompleteField from './AutoCompleteField';

export default function App() {
  const { handleSubmit, ...methods } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AutoCompleteField
          name="myField"
          defaultValue={() => options.find((opt) => opt.value == 'option2')}
          label="My Field"
          options={options}
        />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
}
