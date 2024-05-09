import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


interface NotificationProps {
    type: "success" | "error";
    message: string;
  }

const Notification = ({type, message}: NotificationProps) => {
return (
<Alert severity={type}>
<AlertTitle>{type}</AlertTitle>
 {message}
 </Alert>
 )
}

export default Notification