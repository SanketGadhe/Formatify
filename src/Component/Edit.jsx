import React, { useEffect, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import Figure from "./Figure";
import Table from "./Table";
const Edit = (props) => {
  const [drop, setdrop] = useState(false);
  const [author, setauthor] = useState(1);
  const [intropara, setintropara] = useState(1);
  const [literaturepara, setliteraturepara] = useState(1);
  const [architecturepara, setarchitecturepara] = useState(1);
  const [methodologypara, setmethodologypara] = useState(1);
  const [resultpara, setresultpara] = useState(1);
  const [referencepara, setreferencepara] = useState(1);
  const [conclusionpara, setconclusionpara] = useState(1);
  const [showfigure, setshowfigure] = useState(false);
  const [showtable, setshowtable] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    props.setformdata({
      ...props.formdata,
      [name]: value,
    });
  };
  const [authordetail, setauth] = useState([{}, {}, {}, {}, {}]);
  const handelauthor = (e) => {
    const index = e.target.className.substring(0, 1);
    const { name, value } = e.target;

    // Create a copy of the authordetail array
    const updatedAuthors = [...authordetail];

    // Update the author's details at the specified index
    updatedAuthors[index] = {
      ...updatedAuthors[index],
      [name]: value,
    };
    setauth(updatedAuthors);
  };
 
  const changepaper=(e)=>{
    props.setpaper(e.target.value)
  }
  useEffect(() => {
    props.setformdata({ ...props.formdata, ["authors"]: authordetail });
  }, [authordetail]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const addauthor = (e) => {
    setauthor(e.target.value);
    let allauth = document.querySelector(".authors");
    const singleauth = document.querySelector("singlesauth");
  };

  return (
    <div className="h-screen overflow-scroll w-1/2 border-2 px-16">
      <div className="choice flex my-3">
        <div className="label">
          <label
            htmlFor="dropdownl"
            className="text-black px-3 py-2 font-medium"
          >
            Select Paper:
          </label>
        </div>
        {/* <div className="drop relative">
          <button
            id="dropdownDefaultButton"
            name="dropdownl"
            onClick={() => setdrop(!drop)}
            className="text-white relative bg-[#85f622] hover:bg-[#8ce240] focus:ring-1 focus:outline-none focus:ring-[#8ce240] font-medium rounded-lg text-sm px-2 py-1  text-center inline-flex items-center"
            type="button"
          >
            Choose Papers
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown"
            className={`${
              drop ? "" : "hidden"
            } absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700`}
          >
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
              <li>
                <a
                  href="#"
                  className="block px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  IEEE
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Springer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Elsevier
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Science Journal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  ACM
                </a>
              </li>
            </ul>
          </div>
        </div> */}
         <select
              name="typeofpaper"
              id="selectpaper"
              
              onChange={changepaper}
              className="text-white relative bg-[#85f622] hover:bg-[#8ce240] focus:ring-1 focus:outline-none focus:ring-[#8ce240] font-medium rounded-lg text-sm px-2 py-1  text-center inline-flex items-center"
              // value={author}
            >
              {['IEEE Single Column','IEEE Two Column', 'Springer', 'ACM', 'Elsevier'].map((value) => (
                <option key={value} value={value} className="bg-white divide-y divide-gray-100 rounded-lg shadow w-36 text-black">
                  {value}
                </option>
              ))}
            </select>
      </div>
      <div className="formfield">
        <div className="type font-semibold text-xl">Paper & Author Detail</div>
        <form onSubmit={handleSubmit}>
          <div className="title mb-4">
            <label htmlFor="title" className="text-sm font-medium block mb-1">
              Paper Title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter the name of Paper"
              value={props.formdata.title || ""}
              onChange={(e) => handleChange(e)}
              className="bg-[#eff2f9] rounded-lg text-sm px-3 py-2 w-full"
            />
          </div>
          <div className="auth mb-4">
            <label
              htmlFor="author_author"
              className="text-sm font-medium block mb-1"
            >
              Select author of papers:
            </label>
            <select
              name="authorofauthor"
              id="author_author"
              onChange={(e) => addauthor(e)}
              className="border border-black rounded-lg text-sm px-3 py-2 w-full"
              value={author}
            >
              {[1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <div className="authors mt-4 space-y-4">
              {[...Array(parseInt(author))].map((_, index) => (
                <div key={index} className="singlesuth">
                  <div className="authorsm space-y-2">
                    <label
                      htmlFor={`author_${index + 1}`}
                      className="block text-sm font-medium"
                    >
                      Author {index + 1}
                    </label>
                    <div className="author grid grid-cols-1 md:grid-cols-3 gap-4">
                      <input
                        type="text"
                        placeholder={`Author ${index + 1} Name`}
                        name="name"
                        about={`author_${index + 1}`}
                        id={`author_${index + 1}`}
                        key={`author_${index + 1}`}
                        className={`${index} bg-[#eff2f9] rounded-lg text-sm px-3 py-2`}
                        onChange={handelauthor}
                        value={authordetail[index].name || ""}
                      />
                      <input
                        type="email"
                        placeholder={`Author ${index + 1} Email`}
                        name="email"
                        about={`author_${index + 1}`}
                        className={`${index} bg-[#eff2f9] rounded-lg text-sm px-3 py-2`}
                        onChange={handelauthor}
                        value={authordetail[index].email || ""}
                      />
                      <input
                        type="text"
                        placeholder={`Author ${index + 1} Address`}
                        name="address"
                        about={`author_${index + 1}`}
                        className={`${index} bg-[#eff2f9] rounded-lg text-sm px-3 py-2`}
                        onChange={handelauthor}
                        value={authordetail[index].address || ""}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="type font-semibold text-xl">Abstract & Keywords</div>

          <label htmlFor="abstract" className="block text-sm font-medium mb-1">
            Abstract:
          </label>
          <textarea
            name="abstract"
            id="abstract"
            rows="10"
            value={props.formdata.abstract || ""}
            onChange={(e) => handleChange(e)}
            className="bg-[#eff2f9] rounded-lg text-sm px-3 py-2 w-full"
            placeholder="Enter abstract"
          ></textarea>
          <label
            htmlFor="keywords"
            className="block text-sm font-medium mt-4 mb-1"
          >
            Keywords:
          </label>
          <input
            name="keywords"
            id="keywords"
            className="bg-[#eff2f9] rounded-lg text-sm px-3 py-2 w-full"
            placeholder="Enter Keywords"
            value={props.formdata.keywords || ""}
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <div className="type font-semibold text-xl">
            Introduction & Literature
          </div>

          <div className="introduction">
            <label htmlFor="intro" className="block text-sm font-medium mb-1">
              Introduction:
            </label>
            {[...Array(parseInt(intropara))].map((_, index) => {
              return (
                <div id={`intropara${index + 1}`} key={index}>
                  <label
                    htmlFor={`intro${index}`}
                    key={index}
                    className="block text-sm font-medium mb-1"
                  >
                    Para{index + 1}:
                  </label>
                  <textarea
                    name={`introPara${index + 1}`}
                    id={`intro${index}`}
                    rows="10"
                    value={props.formdata["introPara" + (index + 1)] || ""}
                    onChange={(e) => handleChange(e)}
                    className="bg-[#eff2f9] rounded-lg text-sm px-3 py-2 w-full"
                    placeholder={`Enter Introduction Para ${index + 1}`}
                  ></textarea>

                  <Figure
                    formdata={props.formdata}
                    setformdata={props.setformdata}
                    id={`introParafig${index + 1}`}
                    className="hidden"
                  />
                  <Table
                    formdata={props.formdata}
                    setformdata={props.setformdata}
                    id={`introParatable${index + 1}`}
                    className="hidden"
                  />
                </div>
              );
            })}
            <div className="addbutton flex gap-2">
              <button
                onClick={() => {
                  setintropara((intropara) => intropara + 1);
                }}
                className="flex gap-1 items-center justify-center text-sm bg-blue-200 px-2 py-1 rounded-xl"
              >
                Para <IoMdAddCircleOutline />
              </button>

              <button
                onClick={() => {
                  document
                    .getElementById(`introParafig${intropara}`)
                    .classList.remove("hidden");
                }}
                className="flex gap-1 items-center justify-center text-sm bg-blue-200 px-2 py-1 rounded-xl"
              >
                Figure <IoMdAddCircleOutline />
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById(`introParatable${intropara}`)
                    .classList.remove("hidden");
                }}
                className="flex gap-1 items-center justify-center text-sm bg-blue-200 px-2 py-1 rounded-xl"
              >
                Table <IoMdAddCircleOutline />
              </button>
            </div>
          </div>
          <div className="literature">
            <label
              htmlFor="literature"
              className="block text-sm font-medium mt-4 mb-1"
            >
              Literature Survey:
            </label>
            {[...Array(parseInt(literaturepara))].map((_, index) => {
              return (
                <div key={index}>
                  <label
                    htmlFor={`literature${index}`}
                    className="block text-sm font-medium mb-1"
                  >
                    Para{index + 1}:
                  </label>
                  <textarea
                    name={`literaturePara${index + 1}`}
                    id={`literature${index}`}
                    rows="10"
                    value={props.formdata["literaturePara" + (index + 1)] || ""}
                    onChange={(e) => handleChange(e)}
                    className="bg-[#eff2f9] rounded-lg text-sm px-3 py-2 w-full"
                    placeholder={`Enter Literature Para ${index + 1}`}
                  ></textarea>
                  <Figure
                    formdata={props.formdata}
                    setformdata={props.setformdata}
                    id={`literatureParafig${index + 1}`}
                    className="hidden"
                  />
                  <Table
                    formdata={props.formdata}
                    setformdata={props.setformdata}
                    id={`literatureParatable${index + 1}`}
                    className="hidden"
                  />
                </div>
              );
            })}
            <div className="addbutton flex gap-2">
              <button
                onClick={() => {
                  setliteraturepara((literaturepara) => literaturepara + 1);
                }}
                className="flex gap-1 items-center justify-center text-sm bg-blue-200 px-2 py-1 rounded-xl"
              >
                Para <IoMdAddCircleOutline />
              </button>{" "}
              <button
                onClick={() => {
                  document
                    .getElementById(`literatureParafig${literaturepara}`)
                    .classList.remove("hidden");
                }}
                className="flex gap-1 items-center justify-center text-sm bg-blue-200 px-2 py-1 rounded-xl"
              >
                Figure <IoMdAddCircleOutline />
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById(`literatureParatable${literaturepara}`)
                    .classList.remove("hidden");
                }}
                className="flex gap-1 items-center justify-center text-sm bg-blue-200 px-2 py-1 rounded-xl"
              >
                Table <IoMdAddCircleOutline />
              </button>
            </div>
          </div>
          <div className="type font-semibold text-xl">
            ARCHITECTURE AND METHODOLOGY
          </div>
          <div className="architecture">
            <label
              htmlFor="architecture"
              className="block text-sm font-medium mb-1"
            >
              Architecture:
            </label>
            {[...Array(parseInt(architecturepara))].map((_, index) => {
              return (
                <div key={index}>
                  <label
                    htmlFor={`architecture${index}`}
                    className="block text-sm font-medium mb-1"
                  >
                    Para{index + 1}:
                  </label>
                  <textarea
                    name={`architecturePara${index + 1}`}
                    id={`architecture${index}`}
                    rows="10"
                    value={
                      props.formdata["architecturePara" + (index + 1)] || ""
                    }
                    onChange={(e) => handleChange(e)}
                    className="bg-[#eff2f9] rounded-lg text-sm px-3 py-2 w-full"
                    placeholder={`Enter Architecture Para ${index + 1}`}
                  ></textarea>
                  <Figure
                    formdata={props.formdata}
                    setformdata={props.setformdata}
                    id={`architectureParafig${index + 1}`}
                    className="hidden"
                  />
                  <Table
                    formdata={props.formdata}
                    setformdata={props.setformdata}
                    id={`architectureParatable${index + 1}`}
                    className="hidden"
                  />
                </div>
              );
            })}
            <div className="addbutton flex gap-2">
              <button
                onClick={() => {
                  setarchitecturepara(
                    (architecturepara) => architecturepara + 1
                  );
                }}
                className="flex gap-1 items-center justify-center text-sm bg-blue-200 px-2 py-1 rounded-xl"
              >
                Para <IoMdAddCircleOutline />
              </button>{" "}
              <button
                onClick={() => {
                  document
                    .getElementById(`architectureParafig${architecturepara}`)
                    .classList.remove("hidden");
                }}
                className="flex gap-1 items-center justify-center text-sm bg-blue-200 px-2 py-1 rounded-xl"
              >
                Figure <IoMdAddCircleOutline />
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById(`architectureParatable${architecturepara}`)
                    .classList.remove("hidden");
                }}
                className="flex gap-1 items-center justify-center text-sm bg-blue-200 px-2 py-1 rounded-xl"
              >
                Table <IoMdAddCircleOutline />
              </button>
            </div>
          </div>
          <div className="methodology">
            <label
              htmlFor="methodology"
              className="block text-sm font-medium mt-4 mb-1"
            >
              Methodology:
            </label>
            {[...Array(parseInt(methodologypara))].map((_, index) => {
              return (
                <div key={index}>
                  <label
                    htmlFor={`methodology${index}`}
                    key={index}
                    className="block text-sm font-medium mb-1"
                  >
                    Para{index + 1}:
                  </label>
                  <textarea
                    name={`methodologyPara${index + 1}`}
                    id={`methodology${index}`}
                    rows="10"
                    value={
                      props.formdata["methodologyPara" + (index + 1)] || ""
                    }
                    onChange={(e) => handleChange(e)}
                    className="bg-[#eff2f9] rounded-lg text-sm px-3 py-2 w-full"
                    placeholder={`Enter Methodology  Para ${index + 1}`}
                  ></textarea>
                  <Figure
                    formdata={props.formdata}
                    setformdata={props.setformdata}
                    id={`methodologyParafig${index + 1}`}
                    className="hidden"
                  />
                  <Table
                    formdata={props.formdata}
                    setformdata={props.setformdata}
                    id={`methodologyParatable${index + 1}`}
                    className="hidden"
                  />
                </div>
              );
            })}
            <div className="addbutton flex gap-2">
              <button
                onClick={() => {
                  setmethodologypara((methodolgypara) => methodolgypara + 1);
                }}
                className="flex gap-1 items-center justify-center text-sm bg-blue-200 px-2 py-1 rounded-xl"
              >
                Para <IoMdAddCircleOutline />
              </button>{" "}
              <button
                onClick={() => {
                  document
                    .getElementById(`methodologyParafig${methodologypara}`)
                    .classList.remove("hidden");
                }}
                className="flex gap-1 items-center justify-center text-sm bg-blue-200 px-2 py-1 rounded-xl"
              >
                Figure <IoMdAddCircleOutline />
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById(`methodologyParatable${methodologypara}`)
                    .classList.remove("hidden");
                }}
                className="flex gap-1 items-center justify-center text-sm bg-blue-200 px-2 py-1 rounded-xl"
              >
                Table <IoMdAddCircleOutline />
              </button>
            </div>
          </div>
          <div className="result">
            <div className="type font-semibold text-xl">
              Result & Conclusion
            </div>

            <label htmlFor="result" className="block text-sm font-medium mb-1">
              Result:
            </label>
            {[...Array(parseInt(resultpara))].map((_, index) => {
              return (
                <div key={index}>
                  <label
                    htmlFor={`result${index}`}
                    className="block text-sm font-medium mb-1"
                  >
                    Para{index + 1}:
                  </label>
                  <textarea
                    name={`resultPara${index + 1}`}
                    id={`result${index}`}
                    rows="10"
                    value={props.formdata["resultPara" + (index + 1)] || ""}
                    onChange={(e) => handleChange(e)}
                    className="bg-[#eff2f9] rounded-lg text-sm px-3 py-2 w-full"
                    placeholder={`Enter Result Para ${index + 1}`}
                  ></textarea>
                  <Figure
                    formdata={props.formdata}
                    setformdata={props.setformdata}
                    id={`resultParafig${index + 1}`}
                    className="hidden"
                  />
                  <Table
                    formdata={props.formdata}
                    setformdata={props.setformdata}
                    id={`resultParatable${index + 1}`}
                    className="hidden"
                  />
                </div>
              );
            })}
            <div className="addbutton flex gap-2">
              <button
                onClick={() => {
                  setresultpara((resultpara) => resultpara + 1);
                }}
                className="flex gap-1 items-center justify-center text-sm bg-blue-200 px-2 py-1 rounded-xl"
              >
                Para <IoMdAddCircleOutline />
              </button>{" "}
              <button
                onClick={() => {
                  document
                    .getElementById(`resultParafig${resultpara}`)
                    .classList.remove("hidden");
                }}
                className="flex gap-1 items-center justify-center text-sm bg-blue-200 px-2 py-1 rounded-xl"
              >
                Figure <IoMdAddCircleOutline />
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById(`resultParatable${resultpara}`)
                    .classList.remove("hidden");
                }}
                className="flex gap-1 items-center justify-center text-sm bg-blue-200 px-2 py-1 rounded-xl"
              >
                Table <IoMdAddCircleOutline />
              </button>
            </div>
          </div>
          <div className="conclusion">
            <label
              htmlFor="conclusion"
              className="block text-sm font-medium mt-4 mb-1"
            >
              Conclusion:
            </label>
            {[...Array(parseInt(conclusionpara))].map((_, index) => {
              return (
                <div key={index}>
                  <label
                    htmlFor={`conclusion${index}`}
                    className="block text-sm font-medium mb-1"
                  >
                    Para{index + 1}:
                  </label>
                  <textarea
                    name={`conclusionPara${index + 1}`}
                    id={`conclusion${index}`}
                    rows="10"
                    value={props.formdata["conclusionPara" + (index + 1)] || ""}
                    onChange={(e) => handleChange(e)}
                    className="bg-[#eff2f9] rounded-lg text-sm px-3 py-2 w-full"
                    placeholder={`Enter Conclusion Para ${index + 1}`}
                  ></textarea>
                </div>
              );
            })}
            <div className="addbutton flex gap-2">
              <button
                onClick={() => {
                  setconclusionpara((conslusionpara) => conclusionpara + 1);
                }}
                className="flex gap-1 items-center justify-center text-sm bg-blue-200 px-2 py-1 rounded-xl"
              >
                Para <IoMdAddCircleOutline />
              </button>
            </div>
          </div>
          <div className="Reference">
            <label
              htmlFor="reference"
              className="block text-sm font-medium mt-4 mb-1"
            >
              Reference:
            </label>
            {[...Array(parseInt(referencepara))].map((_, index) => {
              return (
                <div key={index}>
                  <label
                    htmlFor={`reference${index}`}
                    className="block text-sm font-medium mb-1"
                  >
                    Reference{index + 1}:
                  </label>
                  <textarea
                    name={`referencePara${index + 1}`}
                    id={`reference${index}`}
                    rows="10"
                    value={props.formdata["referencePara" + (index + 1)] || ""}
                    onChange={(e) => handleChange(e)}
                    className="bg-[#eff2f9] rounded-lg text-sm px-3 py-2 w-full"
                    placeholder={`Enter Reference ${index + 1}`}
                  ></textarea>
                </div>
              );
            })}
            <div className="addbutton flex gap-2">
              <button
                onClick={() => {
                  setreferencepara((referencepara) => referencepara + 1);
                }}
                className="flex gap-1 items-center justify-center text-sm bg-blue-200 px-2 py-1 rounded-xl"
              >
                Reference <IoMdAddCircleOutline />
              </button>
            </div>
          </div>
          <input
            type="submit"
            value="Submit"
            className="mt-4 px-4 py-2 bg-[#85f622] text-white rounded-lg text-sm font-medium hover:bg-[#8ce240] cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Edit;
