import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller } from "react-hook-form";


interface FormInputDate {
    fieldName: string;
    control: any;
    required?: boolean;
}

export const FormInputDate = ({ fieldName, control, }: FormInputDate) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        name={fieldName}
        control={control}
        render={({ field: { onChange, value } }) => (
          <DatePicker value={value} onChange={onChange} />
        )}
      />
    </LocalizationProvider>
  );
};