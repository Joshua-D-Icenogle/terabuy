import React from 'react';

function CarouselItem ({ url, index}) {
    return(
    <div className={index == 0 ? "active carousel-item d-flex" : "carousel-item d-flex"}>
        <img src={url} className="d-block" alt="" />
    </div>
    )
}


export default CarouselItem;
