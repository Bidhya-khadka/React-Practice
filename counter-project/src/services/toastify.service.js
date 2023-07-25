// place normal function inside service file
// do not write any jsx code here

import { toast } from "react-toastify";

// step 1:
const toasterConfig = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

// step 2: normal function

export const successToaster = (message) => {
  toast.success(message, toasterConfig);
};
export const errorToaster = (message) => {
  toast.error(message, toasterConfig);
};
export const warningToaster = (message) => {
  toast.warning(message, toasterConfig);
};
