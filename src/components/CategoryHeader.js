import React, { useState } from "react";
import { Link } from "react-scroll";
import File from "../asset/img/file.png";

const CategoryHeader = () => {
   const CategoryData = [
      "Central Information",
      "Volunteering in your community",
      "Donating",
      "Donating / petitions",
      "Handbooks and guides",
      "Health care",
      "Homeschooling",
      "Information Abo...",
      "Reading and audiobooks",
      "Sports",
   ];
   const Category1 = [
      "Central Information",
      "Volunteering in...",
      "Donating",
      "Donating / petitions",
      "Handbooks and ...",
      "Health care",
      "Homeschooling",
      "Information Abo...",
      "Reading and aud..",
      "Sports",
   ];
   const [isOpen, setIsOpen] = useState(false);
   // const scrollTo = (offset) => {
   //     scroller.scrollTo("Suport local shops and entrepreneurs", {
   //         duration: 800,
   //         delay: 0,
   //         smooth: "easeInOutQuart",
   //         offset: offset,
   //     });
   // };
   return (
      <>
         <div className="container">
            <div className="ListMenu" onClick={() => setIsOpen(!isOpen)}>
               <i className="fas fa-bars"></i>
            </div>
            <div className={isOpen ? "box_main active" : "box_main"}>
               {CategoryData.map((category, i) => {
                  return (
                     <Link
                        activeClass="active"
                        className={category}
                        to={category}
                        spy={true}
                        hashSpy={true}
                        smooth={true}
                        duration={500}
                     >
                        <div className="box_button">
                           <button>
                              <img src={File} alt="" /> {Category1[i]}
                           </button>
                        </div>
                     </Link>
                  );
               })}
               {/* <div className="box_button">
                        <button>
                            <img src="../asset/img/file.png" alt="" /> Central
                            Information
                        </button>
                    </div>
                    <div className="box_button">
                        <button>
                            <img src="img/file.png" alt="" /> Companies offer...
                        </button>
                    </div>
                    <Link
                        activeClass="active"
                        className="scroll-to-element"
                        to="scroll-to-element"
                        spy={true}
                        smooth={true}
                        duration={500}
                        delay={1000}
                    >
                        <div className="box_button">
                            <button>
                                <img src="img/file.png" alt="" /> Donating
                            </button>
                        </div>
                    </Link>

                    <div className="box_button">
                        <button>
                            <img src="img/file.png" alt="" /> Donating /
                            petitions
                        </button>
                    </div>
                    <div className="box_button">
                        <button>
                            <img src="img/file.png" alt="" /> Handbooks and..
                        </button>
                    </div>
                    <div className="box_button">
                        <button>
                            <img src="img/file.png" alt="" /> Health care
                        </button>
                    </div>
                    <div className="box_button">
                        <button>
                            <img src="img/file.png" alt="" /> Homeschooling
                        </button>
                    </div>
                    <div className="box_button">
                        <button>
                            <img src="img/file.png" alt="" /> Information Abo...
                        </button>
                    </div>
                    <div className="box_button">
                        <button>
                            <img src="img/file.png" alt="" /> Reading and au...
                        </button>
                    </div>
                    <div className="box_button">
                        <button>
                            <img src="img/file.png" alt="" /> Sports
                        </button>
                    </div> */}
            </div>
         </div>
      </>
   );
};

export default CategoryHeader;
