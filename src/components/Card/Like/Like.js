import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const Like = ({ id, record, onchange }) => {
   const [likeClass, setLikeClass] = useState("far fa-heart regular");
   useEffect(() => {
      var cookiesData = cookies.getAll();
      var matchId = Object.keys(cookiesData).includes(id);
      if (matchId) {
         setLikeClass("fas fa-heart");
      } else {
         setLikeClass("far fa-heart regular");
      }
   }, []);
   const onLikeClick = (id) => {
      cookies.set(id, id, {
         path: "/",
         expires: new Date(2020, 12, 12),
      });
      var cookiesData = cookies.getAll();
      var matchId = Object.keys(cookiesData).includes(id);
      if (matchId) {
         setLikeClass("fas fa-heart");
      } else {
         setLikeClass("far fa-heart regular");
      }
   };

   return (
      <div className="icon_like">
         <button
            className="btn btn-default"
            disabled={likeClass === "fas fa-heart" ? true : false}
            onClick={() => {
               onchange();
               onLikeClick(id);
            }}
         >
            {/* "fas fa-heart" : "far fa-heart regular" */}
            <i className={likeClass}></i>
            <p>{record["like"]}</p>
         </button>
      </div>
   );
};

export default Like;
