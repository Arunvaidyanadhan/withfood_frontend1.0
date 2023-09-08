import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './css/Carving.css';
import { useNavigate } from 'react-router-dom';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const IngrediantOfMonth = ({ viewtoShow, testId }) => {
    const navigate = useNavigate();
    console.log('view', viewtoShow)

    
    const recipePage = (e) => {
        localStorage.setItem('recipeId', e); // stores recipeid

        // route to recipe page

        navigate('/recipePage');
    };
    return (
        <div className="parent container">
            <Carousel
                responsive={responsive}
                autoPlay={false}
                swipeable={true}
                draggable={true}
                showDots={false}
                infinite={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
            >
                {viewtoShow.map((imageUrl, index) => {
                    return (
                        <div className="slider" key={index}>
                            <img src={imageUrl.ImagePath} alt="movie" onClick={() => { recipePage(imageUrl.RecipeId) }} />

                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};
export default IngrediantOfMonth;
