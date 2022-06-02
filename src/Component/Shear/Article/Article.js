import React from "react";
import "./article.css";

const Article = ({ article }) => {
  const { comment, date, img, like, name, title, view } = article;
  return (
    <div className="border article border-gray-100 rounded">
      <div>
        <img src={img} className="rounded-t" alt="" />
      </div>
      <div className="p-3 mb-3">
        <h5 className=" mb-1 text-primary">{name}</h5>
        <h3 className="text-xl mb-2 font-medium ">{title}</h3>
        <p className="text-gray-500 text-sm ">
          <i class="fa-solid mr-2 fa-clock"></i> {date}
        </p>
      </div>
      <div className="border-t text-center py-3 flex justify-around">
        <span className="text-sm text-gray-400">
          <i class="fa-solid mr-2 fa-heart"></i>
          {like} Like
        </span>
        <span className="text-sm text-gray-400">
          <i class="fa-solid mr-2  fa-eye"></i>
          {view} Views
        </span>
        <span className="text-sm text-gray-400">
          <i class="fa-solid  mr-2  fa-message"></i>
          {comment}
          Comments
        </span>
      </div>
    </div>
  );
};

export default Article;
