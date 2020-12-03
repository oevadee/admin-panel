import React, { useEffect, useState } from "react";
import {
  GalleryContainer,
  GalleryImage,
  GallerySection,
} from "./style/GalleryView";
import axios from "axios";

const tranformLinkToBackEnd = (image) => `http://localhost:8080/${image}`;

const GalleryView = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/images")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <GalleryContainer>
      <GallerySection>
        {data ? (
          data.images.map(({ image, _id }) => (
            <GalleryImage src={tranformLinkToBackEnd(image)} key={_id} alt="" />
          ))
        ) : (
          <></>
        )}
      </GallerySection>
    </GalleryContainer>
  );
};

export default GalleryView;
