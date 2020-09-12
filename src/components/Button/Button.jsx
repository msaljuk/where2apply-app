import classnames from "classnames";
import React from "react";

import styles from "./Button.module.scss";

const Button = (props) => {
  const { buttonText, disabled, onClick } = props;

  return (
    <span
      className={classnames(styles.button, { [styles.disabled]: disabled })}
      onClick={!disabled ? onClick : {}}
    >
      {buttonText}
    </span>
  );
};

export default Button;
