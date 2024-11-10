import { useState, useEffect } from "react";
import { AiOutlineEnter } from "react-icons/ai";

import { copy, linkIcon, loader, tick } from "../assets";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const handleSubmit = async (e) => {};

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search */}
      <div className="flex flex-col justify-center items-center gap-2">
        <form
          className="relative flex flex-col justify-center items-center w-full"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="linkIcon"
            className="absolute left-0 my-2 ml-3 w-5"
          />

          <input
            type="url"
            placeholder="Enter an article URL"
            value={article.url}
            onChange={(e) => {
              setArticle({ ...article, url: e.target.value });
            }}
            required
            className="url_input peer"
          />

          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700
          peer-focus:text-gray-700"
          >
            Enter <AiOutlineEnter />
          </button>
        </form>

        {/* Browse History */}
      </div>
      {/* Display results */}
    </section>
  );
};

export default Demo;
