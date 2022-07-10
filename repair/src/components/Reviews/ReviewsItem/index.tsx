import React from "react";

import { ReviewsItemParams } from "types/ReviewsItemParams";

import "./styles.scss";

interface ReviewParams {
  item: ReviewsItemParams;
}

const ReviewsItem: React.FC<ReviewParams> = ({ item }) => {
  return (
    <div className="Review">
      <div className="Rewiew__title">
        <img src="" alt=""></img>
        <div>
          <p></p>
          <p></p>
        </div>
        <a>
          <img src="" alt=""></img>{" "}
        </a>
        <a>
          <img src="" alt=""></img>{" "}
        </a>
      </div>
      <p className="Rewiew__text">{item.text}</p>
    </div>
  );
};

export default ReviewsItem;
