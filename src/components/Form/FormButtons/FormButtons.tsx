import { Button } from "@mui/material";

interface FormButtonProps {
    handleSubmit: () => void;
    handleCancel: () => void;
}

const FormButtons = ({ handleSubmit, handleCancel }: FormButtonProps) => {
    return (
        <div className="flex justify-end mt-5">
            <Button 
                onClick={handleCancel} 
                variant="contained"
                className="bg-red-500 text-white hover:bg-red-700 m-1"
            >
                Reset Form
            </Button>
            <Button 
                onClick={handleSubmit} 
                variant="contained"
                className="bg-green-500 text-white hover:bg-green-700 m-1" 
            >
                Submit
            </Button>
        </div>
    );
}

export default FormButtons;

