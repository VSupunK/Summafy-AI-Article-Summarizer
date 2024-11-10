import { useState, useEffect } from "react";
import { AiOutlineEnter } from "react-icons/ai";

import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticle, setAllArticle] = useState([]);
  const [copied, setCopied] = useState("");

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );
    if (articlesFromLocalStorage) {
      setAllArticle(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const summarizedArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [...allArticle, summarizedArticle];
      setArticle(summarizedArticle);
      setAllArticle(updatedAllArticles);
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
      console.log("Article Summarized: ", summarizedArticle);
    }
  };

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => {
      setCopied("");
    }, 5000);
  };

  // Copy summarized article
  const handleCopySummary = () => {
    setCopied("summary");
    navigator.clipboard.writeText(article.summary);
    setTimeout(() => {
      setCopied("");
    }, 5000);
  };

  // Remove specific article
  const handleRemove = (index) => {
    const updatedArticles = allArticle.filter((_, i) => i !== index);
    setAllArticle(updatedArticles);
    localStorage.setItem("articles", JSON.stringify(updatedArticles));
  };

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
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer"
          />

          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            Enter <AiOutlineEnter />
          </button>
        </form>

        {/* Browse History */}
        <div className="flex flex-col gap-1 max-h-60 w-full overflow-y-auto">
          {allArticle.map((item, index) => (
            <div key={`link-${index}`} className="link_card">
              <div className="copy_btn" onClick={() => handleCopy(item.url)}>
                <img
                  src={copied === item.url ? tick : copy}
                  alt="copy_icon"
                  className="w-[40%] h-[40%] object-contain"
                />
              </div>
              <p
                onClick={() => setArticle(item)}
                className="flex-1 font-satoshi text-[#2596be] font-medium text-sm truncate cursor-pointer"
              >
                {item.url}
              </p>
              <button
                onClick={() => handleRemove(index)}
                className="remove_btn text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Display Results */}
      <div className="my-10 max-w-full flex flex-col justify-center items-center">
        {isFetching ? (
          <img src={loader} alt="loader" className="w-20 h-20" />
        ) : error ? (
          <p className="font-inter font-bold text-black text-center">
            Something went wrong with summarization...
            <br />
            <span className="font-satoshi font-normal text-gray-700">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3 items-center">
              <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                Article <span className="blue_gradient">Summary</span>
              </h2>
              <div className="summary_box">
                {article.summary.split("\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-inter font-medium text-sm text-gray-700 mb-2"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <button
                onClick={handleCopySummary}
                className="copy_summary_btn mt-2 text-blue-500"
              >
                {copied === "summary" ? "Copied!" : "Copy Summary"}
              </button>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
