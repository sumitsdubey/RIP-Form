
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {
  const notify = () => {
    toast.success('This is a success message!', {
      // position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000, // Time in ms (3 seconds)
    });

    toast.error('This is an error message!', {
      // position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 5000, // Time in ms (5 seconds)
    });
  };

  return (
    <div>
      <h1>React Toastify Example</h1>
      <button onClick={notify}>Show Toast Notifications</button>
      <ToastContainer />
    </div>
  );
};

export default Toastify;
