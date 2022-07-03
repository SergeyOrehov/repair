import React from "react";

//types
import { BtnText } from "types/BtnText";

import "./styles.scss";

const Button = (props: BtnText) => {
  return (
    <a className="btn-order" href="#">
      {props.text}
    </a>
  );
};

export default Button;
