import type {ComponentPropsWithoutRef} from "react";

type ButtonProps = ComponentPropsWithoutRef<'button'>

const Button = ({ ...props}:ButtonProps) => {

    return (
        <button className={props.className} onClick={props.onClick} disabled>{props.children}</button>
    );
};

export default Button;