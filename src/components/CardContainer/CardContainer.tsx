import type {ComponentPropsWithoutRef} from "react";

type CardContainerProps = ComponentPropsWithoutRef<'div'>
const CardContainer = ({...props}:CardContainerProps) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
};

export default CardContainer;