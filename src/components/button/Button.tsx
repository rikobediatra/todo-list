import React from "react";
import styles from "./button.module.css";

type buttonProps = {
  children: React.ReactNode;
  styleClass: string;
  handleClick: (id: string) => void;
  id: string;
};

const Button = ({ children, styleClass, handleClick, id }: buttonProps) => {
  return (
    <button 
        className={styleClass === "update" ? styles.update : styles.delete}
        onClick={() => handleClick(id)}
    >
      {children}
    </button>
  );
};

export default Button;
