import React from "react";
import styles from "./res.module.css";
import { GoVerified } from "react-icons/go";
import { GoXCircle } from "react-icons/go";

type Props = {
    isSuccess: boolean,
    message: string
};

const ResField = ({isSuccess, message}: Props) => {
    const renderedField = () => {
        if (isSuccess) {
            return (
                <>
                    <GoVerified className={styles.iconSuccess}/>
                    <p>{message}</p>
                </>
            );
        } else {
            return (
                <>
                    <GoXCircle className={styles.iconFailed}/>
                    <p>{message}</p>
                </>
            );
        }
    };

    return (
        <div className={styles.respon}>
            {/* {respon && <h1>{respon}</h1>} */}
            {renderedField()}
        </div>
    );
};

export default ResField;
