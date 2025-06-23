import type { ComponentPropsWithoutRef } from "react";
import styles from "./button.module.scss";

type ButtonProps = ComponentPropsWithoutRef<'button'>;

const Button = ({ className = '', children, ...props }: ButtonProps) => {
    return (
        <button 
            className={`${styles.button} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;