import React from "react";

import { ReviewsItemParams } from "types/ReviewsItemParams";

import "./styles.scss";

interface ReviewParams {
  item: ReviewsItemParams;
}

const ReviewsItem: React.FC<ReviewParams> = ({ item }) => {
  const foto = require("assets/img/foto" + item.id + ".png");
  const vk = require("assets/img/icon-vk.png");
  const facebook = require("assets/img/icon-facebook.png");
  return (
    <div className="review">
      <div className="rewiew__title">
        <img className="foto" src={foto} alt="foto"></img>
        <div>
          <p className="name">{item.name}</p>
          <p>
            {item.day} {item.month} {item.year}
          </p>
        </div>
        <a className="first">
          <img src={vk} alt="vk"></img>
        </a>
        <a>
          <img src={facebook} alt="facebook"></img>
        </a>
      </div>
      <p className="rewiew__text">{item.text}</p>
    </div>
  );
};

export default ReviewsItem;
