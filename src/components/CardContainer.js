import React, { useEffect, useState } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import NewCard from "./Card/NewCard.js";
import Header from "./Header/Header.js";
import Airtable from "airtable";
import { animateScroll as scroll } from "react-scroll";

var base = new Airtable({ apiKey: "key8wpavQxjaqU3JG" }).base(
    "applPl2B8QqxhBUX8"
);
const CardContainer = (props) => {
    const [gridData, setGridData] = useState([]);
    const [location, setLocation] = useState("");
    const [searchData, setSearchData] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [allData, setAllData] = useState([]);
    const [disabled, setDisabled] = useState(false);

    const lanValue = props.location.state;
    // console.log(lanValue.language);
    const onLocationChanges = (records, locValue) => {
        setGridData(records);
        setLocation(locValue);
    };
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    useEffect(() => {
        axios
            .get(
                "https://api.airtable.com/v0/applPl2B8QqxhBUX8/Actions?api_key=key8wpavQxjaqU3JG"
            )
            .then((res) => {
                setGridData(res.data.records);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    //use for like the post
    const onlikeChange = async (id, like) => {
        console.log(id, like);
        var like1 = parseInt(like) + 1;
        await base("Actions").update(
            [
                {
                    id: id,
                    fields: {
                        like: like1,
                    },
                },
            ],
            function (err, records) {
                if (err) {
                    console.error(err);
                    return;
                } else {
                    if (records) {
                        axios
                            .get(
                                "https://api.airtable.com/v0/applPl2B8QqxhBUX8/Actions?api_key=key8wpavQxjaqU3JG"
                            )
                            .then((res) => {
                                setGridData(res.data.records);
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    }
                }
            }
        );
    };

    //Search post by category
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
        console.log(myReg);
        const searchData = allData.filter((record) => {
            return record.fields["Category_EN"].match(myReg);
        });
        setSearchData(searchData);
        console.log("searchValue", searchData);
        setGridData(searchData);
    };

    // disabled when user click on like icon
    const handleClick = () => {
        // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", id);
        if (disabled) {
            return;
        }
        setDisabled(true);
    };

    return (
        <>
            <Header
                onLocationChanges={onLocationChanges}
                onchangesearch={onSearchHandler}
            />
            <div className="container">
                <div className="row">
                    <NewCard
                        lanValue={lanValue}
                        disabled={disabled}
                        gridData={
                            gridData &&
                            gridData.filter(
                                (res) =>
                                    res.fields["Category_EN"] ===
                                    "Volunteering in your community"
                            )
                        }
                        category="Volunteering in your community"
                        category2="Vrijwilligerswerk - in je gemeenschap"
                        location={location}
                        onchanges={onlikeChange}
                        handleClick={handleClick}
                    />
                    <NewCard
                        lanValue={lanValue}
                        disabled={disabled}
                        gridData={
                            gridData &&
                            gridData.filter(
                                (res) =>
                                    res.fields["Category_EN"] ===
                                    "Music, arts, and culture"
                            )
                        }
                        category="Music, arts, and culture"
                        category2="Muziek, kunst & vermaak"
                        location={location}
                        onchanges={onlikeChange}
                    />
                    <NewCard
                        lanValue={lanValue}
                        disabled={disabled}
                        gridData={
                            gridData &&
                            gridData.filter(
                                (res) =>
                                    res.fields["Category_EN"] ===
                                    "Central Information"
                            )
                        }
                        category="Central Information"
                        category2="Centrale Informatie"
                        location={location}
                        onchanges={onlikeChange}
                    />
                    <NewCard
                        lanValue={lanValue}
                        disabled={disabled}
                        gridData={
                            gridData &&
                            gridData.filter(
                                (res) =>
                                    res.fields["Category_EN"] ===
                                    "Central Information"
                            )
                        }
                        category="Central Information"
                        category2="Centrale Informatie"
                        location={location}
                        onchanges={onlikeChange}
                    />
                    <NewCard
                        lanValue={lanValue}
                        disabled={disabled}
                        gridData={
                            gridData &&
                            gridData.filter(
                                (res) =>
                                    res.fields["Category_EN"] ===
                                    "Homeschooling"
                            )
                        }
                        category="Homeschooling"
                        category2="Thuis lesgeven"
                        location={location}
                        onchanges={onlikeChange}
                    />
                    <NewCard
                        lanValue={lanValue}
                        disabled={disabled}
                        gridData={
                            gridData &&
                            gridData.filter(
                                (res) => res.fields["Category_EN"] === "Sports"
                            )
                        }
                        category="Sports"
                        category2="Sport"
                        location={location}
                        onchanges={onlikeChange}
                    />
                    <NewCard
                        lanValue={lanValue}
                        disabled={disabled}
                        gridData={
                            gridData &&
                            gridData.filter(
                                (res) =>
                                    res.fields["Category_EN"] ===
                                    "INFORMATION ABOUT COVID-19 MEASURES ON AMSTERDAM"
                            )
                        }
                        category="INFORMATION ABOUT COVID-19 MEASURES ON AMSTERDAM"
                        category2="INFORMATIE OVER COVID-19 MAATREGELEN VOOR AMSTERDAM"
                        location={location}
                        onchanges={onlikeChange}
                    />
                    <NewCard
                        lanValue={lanValue}
                        disabled={disabled}
                        onchanges={onlikeChange}
                        gridData={
                            gridData &&
                            gridData.filter(
                                (res) =>
                                    res.fields["Category_EN"] === "Health care"
                            )
                        }
                        category="Health care"
                        category2="Gezondheidszorgs"
                        location={location}
                    />
                    <NewCard
                        lanValue={lanValue}
                        disabled={disabled}
                        onchanges={onlikeChange}
                        gridData={
                            gridData &&
                            gridData.filter(
                                (res) =>
                                    res.fields["Category_EN"] ===
                                    "Reading and audiobooks"
                            )
                        }
                        category="Reading and audiobooks"
                        category2="Lezen en audioboeken"
                        location={location}
                    />
                    <NewCard
                        lanValue={lanValue}
                        disabled={disabled}
                        onchanges={onlikeChange}
                        gridData={
                            gridData &&
                            gridData.filter(
                                (res) =>
                                    res.fields["Category_EN"] === "Donating"
                            )
                        }
                        category="Donating"
                        category2="Donaties"
                        location={location}
                    />
                    <NewCard
                        lanValue={lanValue}
                        disabled={disabled}
                        onchanges={onlikeChange}
                        gridData={
                            gridData &&
                            gridData.filter(
                                (res) =>
                                    res.fields["Category_EN"] ===
                                    "Donating / petitions"
                            )
                        }
                        category="Donating / petitions"
                        category2="Donaties / petities"
                        location={location}
                    />
                    <NewCard
                        lanValue={lanValue}
                        disabled={disabled}
                        onchanges={onlikeChange}
                        gridData={
                            gridData &&
                            gridData.filter(
                                (res) =>
                                    res.fields["Category_EN"] ===
                                    "Handbooks and guides"
                            )
                        }
                        category="Handbooks and guides"
                        category2="Handboeken en gidsen"
                        location={location}
                    />
                    <NewCard
                        lanValue={lanValue}
                        disabled={disabled}
                        onchanges={onlikeChange}
                        gridData={
                            gridData &&
                            gridData.filter(
                                (res) =>
                                    res.fields["Category_EN"] ===
                                    "Support local shops and entrepreneurs"
                            )
                        }
                        category="Support local shops and entrepreneurs"
                        category2="STEUN LOKALE WINKELS EN ONDERNEMERS"
                        location={location}
                    />
                    <NewCard
                        lanValue={lanValue}
                        disabled={disabled}
                        onchanges={onlikeChange}
                        gridData={
                            gridData &&
                            gridData.filter(
                                (res) =>
                                    res.fields["Category_EN"] ===
                                    "Volunteering medically"
                            )
                        }
                        category="Volunteering medically"
                        category2="Vrijwilligerswerk - medisch"
                        location={location}
                    />
                    <NewCard
                        lanValue={lanValue}
                        disabled={disabled}
                        onchanges={onlikeChange}
                        gridData={
                            gridData &&
                            gridData.filter(
                                (res) =>
                                    res.fields["Category_EN"] ===
                                    "Working from home"
                            )
                        }
                        category="Working from home"
                        category2="Thuiswerken"
                        location={location}
                    />

                    <NewCard
                        lanValue={lanValue}
                        disabled={disabled}
                        onchanges={onlikeChange}
                        gridData={
                            gridData &&
                            gridData.filter(
                                (res) =>
                                    res.fields["Category_EN"] ===
                                    "Self-care & personal development"
                            )
                        }
                        category="Self-care & personal development"
                        category2="Voor jezelf zorgen"
                        location={location}
                    />
                    <NewCard
                        lanValue={lanValue}
                        disabled={disabled}
                        name="scroll-to-element"
                        onchanges={onlikeChange}
                        gridData={
                            gridData &&
                            gridData.filter(
                                (res) =>
                                    res.fields["Category_EN"] ===
                                    "Suport local shops and entrepreneurs"
                            )
                        }
                        category="Suport local shops and entrepreneurs"
                        category2="Vrijwilligerswerk - in je gemeenschap"
                        location={location}
                    />
                </div>
            </div>
            <div
                className="scroll-top"
                style={{ float: "right", marginRight: "10px" }}
                onClick={scrollToTop}
            >
                <img
                    src="https://img.icons8.com/ios-filled/50/000000/up-squared.png"
                    alt=""
                />
            </div>
        </>
    );
};

export default CardContainer;
