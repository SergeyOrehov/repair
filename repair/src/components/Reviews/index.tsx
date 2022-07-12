import React from "react";

import { ReviewsItemParams } from "types/ReviewsItemParams";
import ReviewsItem from "./ReviewsItem";

import "./styles.scss";

interface ReviewsParams {
  list: ReviewsItemParams[];
}

const Reviews: React.FC<ReviewsParams> = ({ list }) => (
  <div className="reviewsBlock">
    {list.map((review: ReviewsItemParams) => (
      <ReviewsItem key={review.id} item={review} />
    ))}
  </div>
);

export default Reviews;
