"use client";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";



interface FormInputText {
fieldName: string;
control: any;
type?: string;
required?: boolean;
label: string;
}



export const FormInputText = ({  fieldName, control, required, type, label, }: FormInputText ) => {
  return (
    <div className="mb-4">
    <Controller
      name={fieldName}
      control={control}
      render={({
        field: { onChange, value, },
        fieldState: { error },
      }) => (
        <TextField
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
          label={label}
          variant="outlined"
          type={type}
          required={required}
        />
      )}
    />
    </div>
  );
};