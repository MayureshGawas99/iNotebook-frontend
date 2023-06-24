import { createContext, useState } from "react";

const AlertContext = createContext();

const AlertState = (props) => {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <AlertContext.Provider value={{ showAlert, alert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export { AlertState, AlertContext };
