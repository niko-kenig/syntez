import type {ComponentPropsWithoutRef} from "react";

type CardProps = ComponentPropsWithoutRef<'div'>

const Card = ({...props}:CardProps) => {
    return (
        <div className={props.className} style={{display: 'flex',  textAlign: 'center'}}>
            {props.children}
        </div>
    );
};

export default Card;