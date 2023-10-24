import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "./HomeSectionCard";
import { Button } from "@mui/material";
import { KeyboardArrowLeft as KeyboardArrowLeftIcon } from "@mui/icons-material";

const HomeSectionCarousel = ({data, sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = React.createRef();

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      const newIndex = activeIndex - 1;
      setActiveIndex(newIndex);
      carouselRef.current.slideTo(newIndex);
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      const newIndex = activeIndex + 1;
      setActiveIndex(newIndex);
      carouselRef.current.slideTo(newIndex);
    }
  };

  const syncActiveIndex=(e)=>{
    setActiveIndex(e.item)
  };

  const items = data.slice(0, 20).map((item) => (
    <HomeSectionCard product={item}/>
  ));
  return (
    <div className="border">
      <h2 className= "text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          activeIndex={activeIndex}
          items={items}
          responsive={responsive}
          ref={carouselRef}
          disableButtonsControls
          disableDotsControls
          onSlideChanged={syncActiveIndex}
        />
          {activeIndex !== items.length - 5  && 
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={()=>slideNext()}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              backgroundColor: "white",
              ":hover": {
                backgroundColor: "transparent",
              },
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{
                transform: "rotate(90deg)",
                color: "black",
              }}
            />
          </Button>
        }
        {activeIndex !==0 && 
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              backgroundColor: "white",
              ":hover": {
                backgroundColor: "transparent",
              },
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{
                transform: "rotate(90deg)",
                color: "black",
              }}
            />
          </Button>
        }
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
