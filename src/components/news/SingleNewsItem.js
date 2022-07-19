import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

const SingleNewsItem = ({ singleNews: { objectID, title } }) => {
  return (
    <div className="card text-center">
      <p>{title}</p>
      <div>
        <Link to={`/news/${objectID}`} className="btn btn-dark my-1 btn-sm">See More</Link>
      </div>
    </div>
  )
}

export default SingleNewsItem;
