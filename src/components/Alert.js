import React, { useContext } from "react";
import { AlertContext } from "../context/notes/alertContext";

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.substring(1);
  };
  const { alert } = useContext(AlertContext);

  return (
    alert && (
      <div
        className={`alert alert-${alert.type} alert-dismissible fade show fixed-bottom`}
        role="alert"
      >
        {/* <strong>{capitalize(alert.type)}:</strong>  */}

        {alert.message}
      </div>
    )
  );
}
