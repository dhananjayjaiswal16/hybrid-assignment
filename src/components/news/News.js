import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext';
import NewsContext from '../../context/news/newsContext';
import Spinner from '../Spinner';
import SingleNewsItem from './SingleNewsItem';

const News = () => {
  const newsContext = useContext(NewsContext);
  const alertContext = useContext(AlertContext);
  const { news, loading } = newsContext;
  console.log("news in News.js ", news);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="news-style">
      {news.map(singleNews => (
        <SingleNewsItem key={singleNews.objectID} singleNews={singleNews} />
      ))}
    </div>
  )
}
export default News
