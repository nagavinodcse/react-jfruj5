import React, { useState } from 'react';
import { useFormContext, useController } from 'react-hook-form';
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';

const AutoCompleteField = ({ name, label, options, defaultValue, ...rest }) => {
  const { control } = useFormContext();
  const { field } = useController({
    name,
    control,
    defaultValue,
  });
  const [inputValue, setInputValue] = useState(defaultValue ?? '');

  return (
    <Autocomplete
      {...rest}
      id={name}
      options={options}
      getOptionLabel={(option) => option.label}
      value={field.value}
      inputValue={inputValue}
      onChange={(event, newValue) => {
        field.onChange(newValue?.value);
        console.log('value', newValue?.value);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
        console.log(newInputValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  );
};

export default AutoCompleteField;
