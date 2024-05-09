import { Control } from 'react-hook-form';
import { FormInputDate } from './FieldComponents/FormInputDate';
import { FormInputText } from './FieldComponents/FormInputText';

export interface FormConfig {
  label: string;
  fieldName: string;
  category: string;
  type?: string;
  required?: boolean;
}

interface FormProps {
  config: FormConfig[];
  control: Control<any>;
  errors: any;  
}

export const renderForm =(config: FormConfig[], control: Control<any>) => {
  return (
    <>
      {config.map((field) => {
        switch (field.category) {
          case "text":
            return (
              <FormInputText
                key={field.fieldName}
                fieldName={field.fieldName}
                control={control}
                type={field.type}
                required={field.required}
                label={field.label}
              />
            );
          case "date":
            return (
              <FormInputDate
                key={field.fieldName}
                fieldName={field.fieldName}
                control={control}
                required={field.required}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
}

const Form = ({ config, control }: FormProps) => {
  return (
    <form>
      {renderForm(config, control)} 
    </form>
  );
};

export default Form;

