import React, { useCallback, useContext, useRef, useState } from 'react'
import AlertContext from '../context/alert/alertContext';
import NewsContext from '../context/news/newsContext';

const Search = () => {
  const newsContext = useContext(NewsContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');

  const inputRef = useRef();

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500)
    }
  }

  const handleChange = (e) => {
    setText(e.target.value);
    newsContext.searchNews(e.target.value);
  }

  const optimisedFunction = useCallback(debounce(handleChange), []);

  const onBtnClick = () => {
    inputRef.current.value = "";
    // console.log("inputRef", inputRef);
    newsContext.clearNews();
  }

  if (newsContext.news[0] === 0) {
    return (
      <div>
        <button className="btn btn-dark" onClick={newsContext.clearNews}>Go back to Search Page</button>
      </div>
    )
  }
  return (
    <div>
      <form className="form">
        <input ref={inputRef} type="text" name="text" placeholder="News..." onChange={optimisedFunction} />
      </form>
      {newsContext.news.length > 0 &&
        <button className="btn btn-light btn-block" onClick={onBtnClick}>Clear</button>
      }
    </div>
  )
}

export default Search;
