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
  return (
    <div className="flex px-1 py-3 border-lime-100 justify-center gap-2">
      <Edit formdata={formdata} setformdata={setformdata} />
      <Preview formdata={formdata} />
    </div>
  );
};

export default Format;
