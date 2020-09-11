import React from "react";

import styles from "./Button.module.scss";

const Button = (props) => {
  const { buttonText, onClick } = props;

  return (
    <span className={styles.button} onClick={onClick}>
      {buttonText}
    </span>
  );
};

export default Button;
