import React from "react";
import { useQuery } from "react-query";
import Article from "../../Shear/Article/Article";
import LoadingSpinner from "../../Shear/LoadingSpinner/LoadingSpinner";

const HomeArticles = () => {
  const { isLoading, data } = useQuery("articles", () =>
    fetch("Articles.json").then((res) => res.json())
  );

  if (isLoading) return <LoadingSpinner />;
  return (
    <section className="py-10">
      <div>
        <h5 className=" text-xl text-center text-accent">
          Read Professional Articles
        </h5>
        <h2 className=" text-xl text-center mt-2 lg:text-4xl md:text-2xl mb-5">
          Latest <span className="text-secondary">Articles</span>
        </h2>
        <p className="  w-3/6 text-center mx-auto text-accent">
          Lorem ipsum dolor amet consectetur adipisicing eliteiuim sete eiusmod
          tempor incididunt ut labore etnalom dolore magna aliqua udiminimate
          veniam quis norud.
        </p>
        <div className=" mx-auto grid gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3 md:w-10/12">
          {data?.map((article) => (
            <Article article={article} key={article?._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeArticles;
