import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from 'react-toastify';
import '../../App.scss';

// Custom component to be used with Toast
const CustomToast = ({ closeToast }) => {
  return (
    <div>
        <div>Something went wrong!</div>
      <button onClick={closeToast}>Close</button>
    </div>
  );
}

toast.configure();


const toastify = {
    error: (msg) => toast.error(msg, { position: toast.POSITION.TOP_CENTER, autoClose: 6000 }),
    success: (msg) => toast.success(msg, { position: toast.POSITION.TOP_CENTER, autoClose: 6000 }),
    basic: (msg) => toast(msg, { position: toast.POSITION.TOP_RIGHT, autoClose: 6000 }),
    info: (msg) => toast.info(msg, { position: toast.POSITION.TOP_RIGHT, autoClose: 6000 }),
    custom: (msg) => toast(<CustomToast />, { position: toast.POSITION.TOP_RIGHT })
}


export default toastify;
