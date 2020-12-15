import React, { useState } from "react";
import { Link } from "react-router-dom";
import Airtable from "airtable";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";

import CategoryHeader from "../CategoryHeader";
import AboutUs from "../AboutUs/AboutUs";
import Search from "./Search/Search";

import { Modal } from "antd";

import "./Header.css";
import axios from "axios";
import { Button } from "react-bootstrap";

var base = new Airtable({ apiKey: "key8wpavQxjaqU3JG" }).base(
   "applPl2B8QqxhBUX8"
);
const Header = (props, onPassSerachData) => {
   const [searchValue, setSearchValue] = useState("");
   const [allData, setAllData] = useState([]);
   const [searchData, setSearchData] = useState([]);
   const [lanValue, setLanValue] = useState("");
   //User for open modal
   const [modalVisible, setModalVisible] = useState(false);

   const setModal2Visible = (modal2Visible) => {
      setModalVisible(modal2Visible);
   };

   const onSearchHandler = (searchVal, e) => {
      setSearchValue(searchVal);
      console.log(searchValue);
      axios
         .get(
            "https://api.airtable.com/v0/applPl2B8QqxhBUX8/Actions?api_key=key8wpavQxjaqU3JG"
         )
         .then((res) => {
            setAllData(res.data.records);
         })
         .catch((err) => {
            console.log(err);
         });
      const myReg = new RegExp(e);
      const searchData = allData.filter((record) => {
         return record.fields["Category_EN"].match(myReg);
      });
      setSearchData(searchData);
      console.log("searchValue", searchData);
   };
   const onLocationChanges = async (locValue) => {
      await base("tblajZIW0vbXdJzZL")
         .select({
            filterByFormula: `{Location} = "${locValue}"`,
         })
         .eachPage(
            function page(records, fetchNextPage) {
               props.onLocationChanges(records, locValue);
               fetchNextPage();
            },
            function done(err) {
               if (err) {
                  console.error(err);
                  return;
               }
            }
         );
   };
   const hellojs = () => {
      console.log(searchData);
   };
   return (
      <>
         <header>
            <div className="container-fluid">
               <div className="row headre_div">
                  <div className="col-lg-3 search-class">
                     <div className="logo_icon">
                        <img
                           src={require("../../asset/img/preview.png")}
                           className="img-fluid"
                           onClick={hellojs}
                           alt="img"
                        />
                        <div className="logo">
                           <img
                              src={require("../../asset/img/logo.png")}
                              className="img-fluid"
                              alt=""
                           />
                        </div>
                     </div>
                  </div>
                  <Search onSearchHandle={props.onchangesearch} />
                  <div className="col-lg-2 location-col">
                     <div className="location">
                        <div className="location_icon">
                           <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <select
                           class="form-select select-form-col"
                           aria-label="Default select example"
                           onChange={(e) => onLocationChanges(e.target.value)}
                        >
                           <option value="">Select Location</option>
                           <option value="The Netherlands">
                              The Netherlands
                           </option>
                           <option value="The Netherlands & UK">
                              The Netherlands & UK
                           </option>
                           <option value="Amsterdam">Amsterdam</option>
                           <option value="Colombia / Venezuala">
                              Colombia / Venezuala
                           </option>
                           <option value="Eindhoven">Eindhoven</option>
                           <option value="Europe">Europe</option>
                           <option value="Leiden">Leiden</option>
                           <option value="Rotterdam">Rotterdam</option>
                           <option value="The Neterlands">
                              The Neterlands
                           </option>
                           <option value="World">World</option>
                        </select>
                     </div>
                  </div>
                  <div className="col-lg-1 select-col">
                     <Link
                        to={{
                           pathname: "/",
                           state: {
                              language: lanValue,
                           },
                        }}
                     >
                        <select
                           class="form-select"
                           aria-label="Default select example"
                           onChange={(e) => setLanValue(e.target.value)}
                        >
                           <option selected value="1">
                              NL
                           </option>
                           <option value="2">EN</option>
                        </select>
                     </Link>
                  </div>
                  <div className="col-lg-1 btn-about">
                     <div className="language">
                        <Button
                           variant="secondary"
                           onClick={() => setModal2Visible(true)}
                        >
                           About Us
                        </Button>{" "}
                     </div>
                  </div>

                  <div className="col-lg-2">
                     <Link style={{ color: "black" }} to="/add">
                        <div className="add_card">
                           <button>
                              <i className="fa fa-plus" aria-hidden="true"></i>{" "}
                              Add
                           </button>
                        </div>
                     </Link>
                  </div>
               </div>
            </div>
         </header>
         <div>
            <CategoryHeader />
         </div>
         <Modal
            title="Vertically centered modal dialog"
            centered
            title={false}
            footer={false}
            visible={modalVisible}
            onOk={() => setModal2Visible(false)}
            onCancel={() => setModal2Visible(false)}
            width={750}
            closable={false}
            //size="lg"
         >
            <AboutUs />
         </Modal>
      </>
   );
};

export default Header;
