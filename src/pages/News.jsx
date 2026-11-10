import NewsHero from "./news/NewsHero.jsx";
import Featured from "./news/Featured.jsx";
import NewsList from "./news/NewsList.jsx";

export default function News() {
  return (
    <div className="nws">
      <NewsHero />
      <div className="nws-body">
        <Featured />
        <NewsList />
      </div>
    </div>
  );
}