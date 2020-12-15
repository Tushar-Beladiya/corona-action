import React, { useEffect, useState } from "react";
import ReadMoreAndLess from "react-read-more-less";
import "./NewCard.css";
import Like from "./Like/Like";

const NewCard = ({
   gridData,
   category2,
   category,
   location,
   onchanges,
   handleClick,
   disabled,
   lanValue,
}) => {
   const [value, setValue] = useState(1);
   useEffect(() => {
      console.log("useEffect");
      if (lanValue) {
         setValue(lanValue.language);
         console.log("bdvhjfbvjdsafvbgsfdf", lanValue.language);
      }
   });
   console.log(category2);
   return (
      <>
         {(() => {
            switch (location) {
               case "":
                  return (
                     <>
                        {gridData && gridData.length ? (
                           <div
                              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
                              name={category}
                           >
                              <div
                                 className="card_fix box-shadow "
                                 style={{ textAlign: "left" }}
                              >
                                 <div className="head_text">
                                    <p>{value == 1 ? category2 : category}</p>
                                 </div>
                                 {gridData &&
                                    gridData.map((content, key) =>
                                       content.fields["Category_EN"] ===
                                       category ? (
                                          <div key={key}>
                                             <div className="card_body">
                                                <a
                                                   href={content.fields["Link"]}
                                                   target="_blank"
                                                   rel="noopener noreferrer"
                                                >
                                                   <div className="city_name">
                                                      <p className="title_text">
                                                         {
                                                            content.fields[
                                                               "Name_of_initiative"
                                                            ]
                                                         }
                                                      </p>
                                                      <p className="city_text">
                                                         {
                                                            content.fields[
                                                               "Location"
                                                            ]
                                                         }
                                                      </p>
                                                   </div>
                                                </a>
                                                <div className="card_tet">
                                                   <div className="read_more_read_less">
                                                      <ReadMoreAndLess
                                                         ref={
                                                            ReadMoreAndLess.ReadMore
                                                         }
                                                         className="read-more-content"
                                                         charLimit={40}
                                                         readMoreText="Read more"
                                                         readLessText="Read less"
                                                      >
                                                         {content.fields[
                                                            "Omschrijving_NL"
                                                         ] && value == 1
                                                            ? content.fields[
                                                                 "Omschrijving_NL"
                                                              ]
                                                            : content.fields[
                                                                 "Description_EN"
                                                              ]}
                                                      </ReadMoreAndLess>
                                                   </div>
                                                   <Like
                                                      disabled={disabled}
                                                      record={content.fields}
                                                      id={content.id}
                                                      handleClick={handleClick}
                                                      onchange={() =>
                                                         onchanges(
                                                            content.id,
                                                            content.fields[
                                                               "like"
                                                            ]
                                                         )
                                                      }
                                                   />
                                                </div>
                                             </div>
                                          </div>
                                       ) : null
                                    )}
                              </div>
                           </div>
                        ) : null}
                     </>
                  );
               default:
                  return (
                     <>
                        {gridData && gridData.length ? (
                           <div className="col-md-4">
                              <div
                                 className="card_fix box-shadow "
                                 style={{ textAlign: "left" }}
                              >
                                 <div className="head_text">
                                    <p>{category}</p>
                                 </div>
                                 {gridData &&
                                    location &&
                                    gridData &&
                                    gridData.map((content, key) =>
                                       content.fields["Category_EN"] ===
                                          category &&
                                       content.fields["Location"] ===
                                          location ? (
                                          <div key={key}>
                                             <div className="card_body">
                                                <a
                                                   href={content.fields["Link"]}
                                                   target="_blank"
                                                   rel="noopener noreferrer"
                                                >
                                                   <div className="city_name">
                                                      <p className="title_text">
                                                         {
                                                            content.fields[
                                                               "Name_of_initiative"
                                                            ]
                                                         }
                                                      </p>
                                                      <p className="city_text">
                                                         {
                                                            content.fields[
                                                               "Location"
                                                            ]
                                                         }
                                                      </p>
                                                   </div>
                                                </a>
                                                <div className="card_tet">
                                                   <div className="read_more_read_less">
                                                      <ReadMoreAndLess
                                                         ref={
                                                            ReadMoreAndLess.ReadMore
                                                         }
                                                         className="read-more-content"
                                                         charLimit={40}
                                                         readMoreText="Read more"
                                                         readLessText="Read less"
                                                      >
                                                         {value === 1
                                                            ? content.fields[
                                                                 "Omschrijving_NL"
                                                              ]
                                                            : content.fields[
                                                                 "Description_EN"
                                                              ]}
                                                      </ReadMoreAndLess>
                                                   </div>
                                                   <Like
                                                      record={content.fields}
                                                      id={content.id}
                                                   />
                                                </div>
                                             </div>
                                          </div>
                                       ) : null
                                    )}
                              </div>
                           </div>
                        ) : null}
                     </>
                  );
            }
         })()}
      </>
   );
};

export default NewCard;
