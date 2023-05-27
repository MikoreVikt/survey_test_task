import { PacmanLoader } from 'react-spinners';
import { ToastContainer } from 'react-toastify';

export const Loader = ({ loading }) => {
  return (
    <>
      <PacmanLoader
        color="#8e9699"
        cssOverride={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        loading={loading}
        size={30}
        speedMultiplier={1}
        aria-label="Loading Spinner"
      />
      <ToastContainer />
    </>
  );
};
