import React from "react";

import { ReviewsItemParams } from "types/ReviewsItemParams";

import "./styles.scss";

interface ReviewParams {
  item: ReviewsItemParams;
}

const ReviewsItem: React.FC<ReviewParams> = ({ item }) => {
  const vk = require("assets/img/icon-vk.png");
  const facebook = require("assets/img/icon-facebook.png");
  return (
    <div className="Review">
      <div className="Rewiew__title">
        <div>
          <img src={item.img} alt="foto"></img>
        </div>

        <div>
          <p>{item.name}</p>
          <p>
            {item.day} {item.month}
            {item.year}
          </p>
        </div>
        <a>
          <img src={vk} alt="vk"></img>
        </a>
        <a>
          <img src={facebook} alt="facebook"></img>
        </a>
      </div>
      <p className="Rewiew__text">{item.text}</p>
    </div>
  );
};

export default ReviewsItem;
