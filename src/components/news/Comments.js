import React, { useContext, useEffect, useState } from 'react'
import HTMLReactParser from 'html-react-parser';


const Comments = ({ singleNews }) => {

  const [expand, setExpand] = useState(false);

  if (singleNews?.children && singleNews?.children.length > 0) {
    return (
      <div>
        <div className="comments-text" onClick={() => setExpand(!expand)}>
          <img src={expand ? "/caret-down-solid.svg" : "/caret-right-solid.svg"} />
          <p>
            {singleNews?.type === "comment" ? HTMLReactParser(singleNews?.text) : "Check out all the comments by clicking here"}
          </p>
        </div>
        <div style={{ display: expand ? 'block' : 'none', paddingLeft: "25px" }}>{
          singleNews?.children?.map((child) => {
            return <Comments singleNews={child} />
          })
        }
        </div>
      </div>
    )
  } else {
    if (singleNews?.type === "comment") {
      return (singleNews?.text && <p className="comments-text" key={singleNews?.children?.id}> {singleNews?.text && HTMLReactParser(
        singleNews?.text)} <br /> </p>)
    }
    return <p className="comments-text" key={singleNews?.children?.id}> {singleNews?.title && HTMLReactParser(
      singleNews?.title)} <br /> </p>
  }
}

export default Comments;