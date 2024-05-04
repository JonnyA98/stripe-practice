import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { FormConfig } from "../Form";

interface FormInputText {
fieldName: string;
control: any;
type?: string;
required?: boolean
}



export const FormInputText = ({  fieldName, control, required, type}: any ) => {
  return (
    <Controller
      name={fieldName}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={fieldName}
          variant="outlined"
          type={type}
          required={required}
        />
      )}
    />
  );
};