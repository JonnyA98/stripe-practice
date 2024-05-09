"use client";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";


interface FormInputDate {
    fieldName: string;
    control: any;
    required?: boolean;
}

export const FormInputDate = ({ fieldName, control, }: FormInputDate) => {
  return (
<LocalizationProvider dateAdapter={AdapterDayjs} >
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