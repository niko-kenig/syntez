import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

type SliderProps = {
    arrayImg: string[];
    styleContainer?: string;
    styleBlock?: string;
    styledIconContainer?:string
    caruselStyle?: string
};

function chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}

const Slider = ({ arrayImg, styleContainer, styleBlock,styledIconContainer,caruselStyle }: SliderProps) => {
    const chunkedArray = chunkArray(arrayImg, 4);

    return (
        <Carousel showIndicators={false} autoPlay infiniteLoop showThumbs={false} className={caruselStyle} showStatus={false}>
            {chunkedArray.map((chunk, index) => (
                <div key={index}>
                    <ul className={styleContainer}>
                        {chunk.map((item, itemIndex) => (
                            <li key={itemIndex} className={styleBlock}>
                                <img src={item} alt={`icon-${itemIndex}`}  className={styledIconContainer} />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </Carousel>
    );
};

export default Slider;
