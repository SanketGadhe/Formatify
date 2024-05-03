import { stringify } from "postcss";
import React from "react";
import { GoMultiSelect } from "react-icons/go";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";

const Preview = (props) => {
  const data = JSON.stringify(props.formdata);
  console.log('hey',Object.keys(props.formdata))
  let no_of_introduction=[],no_of_conclusion=[],no_of_architecture=[],no_of_result=[],no_of_literature=[],no_of_methodolgy=[]
    Object.keys(props.formdata).map((elm)=>{
      if(elm.startsWith('introPara')){
no_of_introduction.push(elm)
      }
      else if(elm.startsWith('literaturePara')){
        no_of_literature.push(elm)
      }
      else if(elm.startsWith('architecturePara')){
        no_of_architecture.push(elm)
      }
      else if(elm.startsWith('methodologyPara')){
        no_of_methodolgy.push(elm)
      }
      else if(elm.startsWith('resultPara')){
        no_of_result.push(elm)
      }
      else if(elm.startsWith('conclusionPara')){
        no_of_conclusion.push(elm)
      }
     else{

     }
    })
  const downloadpdf = () => {
    const doc = new jsPDF();
    let content = document.querySelector("#content").innerHTML;
    document.querySelector("body").innerHTML = content;
    
    // document.querySelector('body').classList.add('invisible')
    // document.querySelector('#content').classList.add('visible')
    window.print();
    // const content = document.getElementById('content');
    // html2canvas(content).then(canvas => {
    //     const imgData = canvas.toDataURL('image/png');

    //     doc.addImage(imgData, 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());

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
              Select Template
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
            className="page bg-white mt-1 w-[794px] px-[54px] py-[72px]"
            id="content"
          >
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
                {no_of_introduction.map(
                  (val, index) => {
                  
                    return (
                      <div key={index}>&nbsp;&nbsp;&nbsp;&nbsp;{props.formdata[`introPara${(index+1)%10}`]}</div>
                    );
                  }
                )}
              </div>
              <div className="literature text-[10px]  py-2">
                <div className="heading text-center uppercase text-[8px]">
                  II. Literature
                </div>{no_of_literature.map(
                  (val, index) => {
                  
                    return (
                      <div key={index}>&nbsp;&nbsp;&nbsp;&nbsp;{props.formdata[`literaturePara${(index+1)%10}`]}</div>
                    );
                  }
                )}
              </div>
              <div className="architecture text-[10px]  py-2">
                <div className="heading text-center uppercase text-[8px]">
                  III. Architecture
                </div>
                {no_of_architecture.map(
                  (val, index) => {
                  
                    return (
                      <div key={index}>&nbsp;&nbsp;&nbsp;&nbsp;{props.formdata[`architecturePara${(index+1)%10}`]}</div>
                    );
                  }
                )}
              </div>
              <div className="methodolgy text-[10px]  py-2">
                <div className="heading text-center uppercase text-[8px]">
                  IV. Methodolgy
                </div>
                {no_of_methodolgy.map(
                  (val, index) => {
                  
                    return (
                      <div key={index}>&nbsp;&nbsp;&nbsp;&nbsp;{props.formdata[`methodologyPara${(index+1)%10}`]}</div>
                    );
                  }
                )}
              </div>
              <div className="result text-[10px]  py-2">
                <div className="heading text-center uppercase text-[8px]">
                  V. Result
                </div>
                {no_of_result.map(
                  (val, index) => {
                  
                    return (
                      <div key={index}>&nbsp;&nbsp;&nbsp;&nbsp;{props.formdata[`resultPara${(index+1)%10}`]}</div>
                    );
                  }
                )}
              </div>
              <div className="conclusion text-[10px]  py-2">
                <div className="heading text-center uppercase text-[8px]">
                  VI. Conclusion
                </div>
                {no_of_conclusion.map(
                  (val, index) => {
                  
                    return (
                      <div key={index}>&nbsp;&nbsp;&nbsp;&nbsp;{props.formdata[`conclusionPara${(index+1)%10}`]}</div>
                    );
                  }
                )}
              </div>
            </div>
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
