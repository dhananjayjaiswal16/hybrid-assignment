import React, { useContext, useEffect } from 'react'
import NewsContext from '../../context/news/newsContext';
import Comments from './Comments';
import Spinner from '../Spinner';
const SingleNews = () => {
  const newsContext = useContext(NewsContext);
  const { getSingleNews, singleNews, loading } = newsContext;
  console.log("singleNews in singleNews.js ", singleNews?.children);

  useEffect(() => {
    const query = window.location.pathname.substring(6);
    getSingleNews(query);
  }, []);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <p><strong>Title: </strong> {singleNews?.title}</p>
      <p><strong>Point: </strong> {singleNews?.points}</p>
      <Comments singleNews={singleNews} />
    </div>

  )
}

export default SingleNews;
