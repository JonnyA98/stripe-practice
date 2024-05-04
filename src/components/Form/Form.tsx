import { FormGroup, TextField, Button } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import { FormInputDate } from './FieldComponents/FormInputDate';
import { FormInputText } from './FieldComponents/FormInputText';

export interface FormConfig {
    fieldName: string;
    category: string;
    type?: string;
    required?: boolean;
}


interface FormProps {
    disabled: boolean;
    handleSubmit: () => void;
    register: ReturnType<typeof useForm>['register'];
    config: FormConfig[]
    control: any
}

const Form = ({disabled, handleSubmit, config, control}: FormProps) => {

    return (
        <FormGroup>
         {config.map((field) => {

            if(field.category === "text"){
                return(
                  <FormInputText
                  fieldName={field.fieldName}
                  control={control}
                  type={field.type}
                  required={field.required}
                  />
                )
            }
            if(field.category === "date"){
                return(
                    <FormInputDate
                    fieldName={field.fieldName}
                    control={control}
                    required={field.required}
                    />
                )
            }
         })}   

       <Button onSubmit={handleSubmit} variant="contained" disabled={disabled}>
        Submit
       </Button>
        </FormGroup>
    )

}

export default Form