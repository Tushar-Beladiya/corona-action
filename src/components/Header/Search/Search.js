import React, { useState, useEffect } from "react";
import Airtable from "airtable";
import axios from "axios";
var base = new Airtable({ apiKey: "key8wpavQxjaqU3JG" }).base(
   "applPl2B8QqxhBUX8"
);
const Search = ({ onSearchHandle }) => {
   const [searchValue, setSearchValue] = useState("");
   const [allData, setAllData] = useState([]);

   useEffect(() => {
      axios
         .get(
            "https://api.airtable.com/v0/applPl2B8QqxhBUX8/Actions?api_key=key8wpavQxjaqU3JG"
         )
         .then((res) => {
            setAllData(res.data.records);
            const data = res.data.records.filter((record) => {
               return record.fields["Category_EN"].match(/Sports/gi);
            });
         })
         .catch((err) => {
            console.log(err);
         });
   }, [axios]);

   const onSearchHandle1 = (searchVal) => {
      setSearchValue(searchVal);
      const myReg = new RegExp(searchValue);
      const searchData = allData.filter((record) => {
         return record.fields["Category_EN"].match(myReg);
      });
   };

   return (
      <>
         <div className="col-lg-3 search-this">
            <div className="search">
               <i className="fa fa-search" aria-hidden="true"></i>
               <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => {
                     onSearchHandle(e.target.value, searchValue);
                     onSearchHandle1(e.target.value);
                  }}
               />
            </div>
         </div>
      </>
   );
};

export default Search;
