import { stringify } from "postcss";
import React from "react";
import { GoMultiSelect } from "react-icons/go";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";
// import {htmlDocx} from 'html-docx-js'
const Preview = (props) => {
  const data = JSON.stringify(props.formdata);
  let no_of_introduction = [],
    no_of_conclusion = [],
    no_of_architecture = [],
    no_of_result = [],
    no_of_literature = [],
    no_of_methodolgy = [],no_of_reference=[];

  Object.keys(props.formdata).map((elm) => {
    if (elm.startsWith("introPara")) {
      if (elm.startsWith("introParafig") || elm.endsWith("caption")) {
        no_of_introduction = no_of_introduction;
      } else {
        no_of_introduction.push(elm);
      }
    } else if (elm.startsWith("literaturePara")) {
      if (elm.startsWith("literatureParafig") || elm.endsWith("caption")) {
      } else {
        no_of_literature.push(elm);
      }
    } else if (elm.startsWith("architecturePara")) {
      if (elm.startsWith("architectureParafig") || elm.endsWith("caption")) {
      } else {
        no_of_architecture.push(elm);
      }
    } else if (elm.startsWith("methodologyPara")) {
      if (elm.startsWith("methodologyParafig") || elm.endsWith("caption")) {
      } else {
        no_of_methodolgy.push(elm);
      }
    } else if (elm.startsWith("resultPara")) {
      if (elm.startsWith("resultParafig") || elm.endsWith("caption")) {
      } else {
        no_of_result.push(elm);
      }
    } else if (elm.startsWith("conclusionPara")) {
      if (elm.startsWith("conclusionParafig") || elm.endsWith("caption")) {
      } else {
        no_of_conclusion.push(elm);
      }
    }  else if (elm.startsWith("referencePara")) {
      if (elm.startsWith("referenceParafig") || elm.endsWith("caption")) {
      } else {
        no_of_reference.push(elm);
      }
    } else {
    }
  });
  const downloadpdf = () => {
    const doc = new jsPDF();
    let content = document.querySelector("#content").innerHTML;
    // document.querySelector("body").innerHTML = content;
//     var converted = htmlDocx.asBlob(content);
//     console.log(converted)
// saveAs(converted, 'test.docx');

    // document.querySelector('body').classList.add('invisible')
    // document.querySelector('#content').classList.add('visible')
    // window.print();
    // const content = document.getElementById('content');
    // html2canvas(content).then(canvas => {
    //     const img width='300px'Data = canvas.toDataURL('image/png');

    //     doc.addImage(img width='300px'Data, 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());

    //     doc.save('content.pdf');

    // });
  };
  let content = document.querySelector("#content");
  return (
    <div className="bg-red-300 flex justify-center ">
    
      <div className="">
        <div className="options flex justify-between">
          <div className="select flex text-sm">
            <div className="template flex justify-center items-center ">
              <GoMultiSelect />
              {props.paper}
            </div>
            <div className="zoom flex justify-center items-center ml-3">
              | - A +
            </div>
          </div>
          <div className="down text-sm">
            <button
              className="border-black border-1 rounded-lg text-white bg-[#9cc975] px-2 py-1 m-1"
              onClick={downloadpdf}
            >
              Download PDF
            </button>
            <Link to="/Print" state={{ from: "occupation" }} target="_blank">
              <button className="border-black border-1 rounded-lg text-white bg-[#9cc975] px-2 py-1 m-1">
                Export
              </button>
            </Link>
          </div>
        </div>
        <div className="center flex justify-center ">
        
          <div
            className="page bg-white mt-1 w-[794px] h-[900px] px-[54px] py-[72px]"
            id="content"
          >{props.paper==='IEEE Single Column'?
<div>
            <div className="title text-[22px] font-bold text-center ">
              {props.formdata.title}
            </div>
            <div className="authors flex flex-wrap justify-center text-[10px] pb-5 ">
              {props.formdata.authors.map((elm, index) => {
                return (
                  <div className="author text-center w-[25%] pt-5" key={index}>
                    <div className="name">{elm.name}</div>
                    <div className="address italic">{elm.address}</div>
                    <div className="email">{elm.email}</div>
                  </div>
                );
              })}
            </div>
            <div className="content text-justify">
              <div className="abstract text-[9px] font-bold py-2">
                <span className="italic">Abstract- </span>
                {props.formdata.abstract}
              </div>
              <div className="keywords text-[9px] font-bold ">
                <span className="italic">Keywords- </span>
                {props.formdata.keywords}
              </div>
              <div className="introduction text-[10px]  py-2">
                <div className="heading text-center uppercase text-[8px]">
                  I. Introduction
                </div>
                {no_of_introduction.map((val, index) => {
                  return (
                    <div key={index}>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      {props.formdata[`introPara${(index + 1) % 10}`]}
                      {props.formdata[`introParafig${index + 1}`] ? (
                        <div className="image flex my-2 justify-center items-center">
                          <img
                            width="300px"
                            src={props.formdata[`introParafig${index + 1}`]}
                            alt=""
                          />
                        </div>
                      ) : (
                        ""
                      )}
                      {props.formdata[`introParafig${index + 1}caption`] ? (
                        <figure className="custom-figure text-[8px] font-light text-center">
                          <figcaption>
                            Fig 1.{index + 1}{" "}
                            {props.formdata[`introParafig${index + 1}caption`]}
                          </figcaption>
                        </figure>
                      ) : (
                        ""
                      )}
                      {props.formdata[`introParatable${index + 1}`] ? (
                        <div className="flex justify-center items-center flex-col">
                          <table className="border-collapse border border-gray-400">
                            <tbody>
                              {[
                                ...Array(
                                  parseInt(
                                    props.formdata[`introParatable${index + 1}`]
                                      .length
                                  )
                                ),
                              ].map((_, rowIndex) => (
                                <tr key={rowIndex}>
                                  {[
                                    ...Array(
                                      parseInt(
                                        props.formdata[
                                          `introParatable${index + 1}`
                                        ][0].length
                                      )
                                    ),
                                  ].map((_, colIndex) => (
                                    <td
                                      key={colIndex}
                                      className="border border-gray-400 p-1"
                                    >
                                      {
                                        props.formdata[
                                          `introParatable${index + 1}`
                                        ][rowIndex][colIndex]
                                      }
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <div className="caption text-[8px] p-1">
                          Table 1.{index} {props.formdata[`introParatable${index + 1}caption`]}</div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="literature text-[10px]  py-2">
                <div className="heading text-center uppercase text-[8px]">
                  II. Literature
                </div>
                {no_of_literature.map((val, index) => {
                  return (
                    <div key={index}>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      {props.formdata[`literaturePara${(index + 1) % 10}`]}
                      {props.formdata[`literatureParafig${index + 1}`] ? (
                        <div className="image flex my-2 justify-center items-center">
                          <img
                            width="300px"
                            src={
                              props.formdata[`literatureParafig${index + 1}`]
                            }
                            alt=""
                          />
                        </div>
                      ) : (
                        ""
                      )}
                      {props.formdata[
                        `literatureParafig${index + 1}caption`
                      ] ? (
                        <figure className="custom-figure text-[8px] font-light text-center">
                          <figcaption>
                            Fig 2.{index + 1}{" "}
                            {
                              props.formdata[
                                `literatureParafig${index + 1}caption`
                              ]
                            }
                          </figcaption>
                        </figure>
                      ) : (
                        ""
                      )}
                       {props.formdata[`literatureParatable${index + 1}`] ? (
                        <div className="flex justify-center items-center flex-col">
                          <table className="border-collapse border border-gray-400">
                            <tbody>
                              {[
                                ...Array(
                                  parseInt(
                                    props.formdata[`literatureParatable${index + 1}`]
                                      .length
                                  )
                                ),
                              ].map((_, rowIndex) => (
                                <tr key={rowIndex}>
                                  {[
                                    ...Array(
                                      parseInt(
                                        props.formdata[
                                          `literatureParatable${index + 1}`
                                        ][0].length
                                      )
                                    ),
                                  ].map((_, colIndex) => (
                                    <td
                                      key={colIndex}
                                      className="border border-gray-400 p-1"
                                    >
                                      {
                                        props.formdata[
                                          `literatureParatable${index + 1}`
                                        ][rowIndex][colIndex]
                                      }
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <div className="caption text-[8px] p-1">
                          Table 2.{index} {props.formdata[`literatureParatable${index + 1}caption`]}</div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="architecture text-[10px]  py-2">
                <div className="heading text-center uppercase text-[8px]">
                  III. Architecture
                </div>
                {no_of_architecture.map((val, index) => {
                  return (
                    <div key={index}>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      {props.formdata[`architecturePara${(index + 1) % 10}`]}
                      {props.formdata[`architectureParafig${index + 1}`] ? (
                        <div className="image flex my-2 justify-center items-center">
                          <img
                            width="300px"
                            src={
                              props.formdata[`architectureParafig${index + 1}`]
                            }
                            alt=""
                          />
                        </div>
                      ) : (
                        ""
                      )}
                      {props.formdata[
                        `architectureParafig${index + 1}caption`
                      ] ? (
                        <figure className="custom-figure text-[8px] font-light text-center">
                          <figcaption>
                            Fig 3.{index + 1}{" "}
                            {
                              props.formdata[
                                `architectureParafig${index + 1}caption`
                              ]
                            }
                          </figcaption>
                        </figure>
                      ) : (
                        ""
                      )} {props.formdata[`architectureParatable${index + 1}`] ? (
                        <div className="flex justify-center items-center flex-col">
                          <table className="border-collapse border border-gray-400">
                            <tbody>
                              {[
                                ...Array(
                                  parseInt(
                                    props.formdata[`architectureParatable${index + 1}`]
                                      .length
                                  )
                                ),
                              ].map((_, rowIndex) => (
                                <tr key={rowIndex}>
                                  {[
                                    ...Array(
                                      parseInt(
                                        props.formdata[
                                          `architectureParatable${index + 1}`
                                        ][0].length
                                      )
                                    ),
                                  ].map((_, colIndex) => (
                                    <td
                                      key={colIndex}
                                      className="border border-gray-400 p-1"
                                    >
                                      {
                                        props.formdata[
                                          `architectureParatable${index + 1}`
                                        ][rowIndex][colIndex]
                                      }
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <div className="caption text-[8px] p-1">
                          Table 3.{index} {props.formdata[`architectureParatable${index + 1}caption`]}</div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="methodolgy text-[10px]  py-2">
                <div className="heading text-center uppercase text-[8px]">
                  IV. Methodolgy
                </div>
                {no_of_methodolgy.map((val, index) => {
                  return (
                    <div key={index}>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      {props.formdata[`methodologyPara${(index + 1) % 10}`]}
                      {props.formdata[`methodologyParafig${index + 1}`] ? (
                        <div className="image flex my-2 justify-center items-center">
                          <img
                            width="300px"
                            src={
                              props.formdata[`methodologyParafig${index + 1}`]
                            }
                            alt=""
                          />
                        </div>
                      ) : (
                        ""
                      )}
                      {props.formdata[
                        `methodologyParafig${index + 1}caption`
                      ] ? (
                        <figure className="custom-figure text-[8px] font-light text-center">
                          <figcaption>
                            Fig 4.{index + 1}{" "}
                            {
                              props.formdata[
                                `methodologyParafig${index + 1}caption`
                              ]
                            }
                          </figcaption>
                        </figure>
                      ) : (
                        ""
                      )} {props.formdata[`methodologyParatable${index + 1}`] ? (
                        <div className="flex justify-center items-center flex-col">
                          <table className="border-collapse border border-gray-400">
                            <tbody>
                              {[
                                ...Array(
                                  parseInt(
                                    props.formdata[`methodologyParatable${index + 1}`]
                                      .length
                                  )
                                ),
                              ].map((_, rowIndex) => (
                                <tr key={rowIndex}>
                                  {[
                                    ...Array(
                                      parseInt(
                                        props.formdata[
                                          `methodologyParatable${index + 1}`
                                        ][0].length
                                      )
                                    ),
                                  ].map((_, colIndex) => (
                                    <td
                                      key={colIndex}
                                      className="border border-gray-400 p-1"
                                    >
                                      {
                                        props.formdata[
                                          `methodologyParatable${index + 1}`
                                        ][rowIndex][colIndex]
                                      }
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <div className="caption text-[8px] p-1">
                          Table 4.{index} {props.formdata[`methodologyParatable${index + 1}caption`]}</div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="result text-[10px]  py-2">
                <div className="heading text-center uppercase text-[8px]">
                  V. Result
                </div>
                {no_of_result.map((val, index) => {
                  return (
                    <div key={index}>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      {props.formdata[`resultPara${(index + 1) % 10}`]}
                      {props.formdata[`resultParafig${index + 1}`] ? (
                        <div className="image flex my-2 justify-center items-center">
                          <img
                            width="300px"
                            src={props.formdata[`resultParafig${index + 1}`]}
                            alt=""
                          />
                        </div>
                      ) : (
                        ""
                      )}
                      {props.formdata[`resultParafig${index + 1}caption`] ? (
                        <figure className="custom-figure text-[8px] font-light text-center">
                          <figcaption>
                            Fig 5.{index + 1}{" "}
                            {props.formdata[`resultParafig${index + 1}caption`]}
                          </figcaption>
                        </figure>
                      ) : (
                        ""
                      )} {props.formdata[`resultParatable${index + 1}`] ? (
                        <div className="flex justify-center items-center flex-col">
                          <table className="border-collapse border border-gray-400">
                            <tbody>
                              {[
                                ...Array(
                                  parseInt(
                                    props.formdata[`resultParatable${index + 1}`]
                                      .length
                                  )
                                ),
                              ].map((_, rowIndex) => (
                                <tr key={rowIndex}>
                                  {[
                                    ...Array(
                                      parseInt(
                                        props.formdata[
                                          `resultParatable${index + 1}`
                                        ][0].length
                                      )
                                    ),
                                  ].map((_, colIndex) => (
                                    <td
                                      key={colIndex}
                                      className="border border-gray-400 p-1"
                                    >
                                      {
                                        props.formdata[
                                          `resultParatable${index + 1}`
                                        ][rowIndex][colIndex]
                                      }
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <div className="caption text-[8px] p-1">
                          Table 5.{index} {props.formdata[`resultParatable${index + 1}caption`]}</div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="conclusion text-[10px]  py-2">
                <div className="heading text-center uppercase text-[8px]">
                  VI. Conclusion
                </div>
                {no_of_conclusion.map((val, index) => {
                  return (
                    <div key={index}>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      {props.formdata[`conclusionPara${(index + 1) % 10}`]}
                    </div>
                  );
                })}
              </div>
              <div className="reference text-[10px]  py-2">
                <div className="heading text-center uppercase text-[8px]">
                  VII. Reference
                </div>
                {no_of_reference.map((val, index) => {
                  return (
                    <div key={index}>
                      [{index+1}].&nbsp;
                      {props.formdata[`referencePara${(index + 1) % 10}`]}
                    </div>
                  );
                })}
              </div>
            </div></div>
             : <div>No Preview Available currently for {props.paper}</div>
             }
         </div>
        
         
        </div> 
        <div className="pageope flex justify-center mt-3 text-xs text-[#484747] item-center">
          <GrFormPrevious /> <span>1/1</span> <GrFormNext />
        </div>
        
      </div>
    </div>
  );
};

export default Preview;
