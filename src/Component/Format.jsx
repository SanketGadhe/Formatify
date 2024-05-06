import React, { useState } from "react";
import Edit from "./Edit";
import Preview from "./Preview";

const Format = () => {
  const [formdata, setformdata] = useState({
    title: "",
    authors: [],
    abstract: "",
    keywords: "",
    introduction: { theory: "" ,figure:"",table:''},
    literature: "",
    architecture: "",
    methodology: "",
    result: "",
    conclusion: "",
  });
  const [paper, setpaper] = useState('IEEE Single Column')
  return (
    <div className="flex px-1 py-3 border-lime-100 justify-center gap-2">
      <Edit formdata={formdata} setformdata={setformdata} paper={paper} setpaper={setpaper}/>
      <Preview formdata={formdata} paper={paper} setpaper={setpaper}/>
    </div>
  );
};

export default Format;
