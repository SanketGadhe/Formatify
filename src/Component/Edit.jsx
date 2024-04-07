import React, { useEffect, useState } from "react";
import Author from "./Author";

const Edit = () => {
  let drop = false;
  const [author, setauthor] = useState(1);

  useEffect(() => {
    for (let i = 0; i < author; i++) {
      console.log(<Author />);
    }
  }, [author]);

  return (
    <div className="h-[100vh] overflow-scroll w-[50%] border-2 px-16">
      <div className="choice flex my-3 px-3">
        <div className="label">
          <label htmlFor="dropdownl" className="text-black px-3 py-2 ">
            Select Paper:
          </label>
        </div>
        <div className="drop">
          <button
            id="dropdownDefaultButton"
            name="dropdownl"
            data-dropdown-toggle="dropdown"
            onClick={() => {
              if (!drop) {
                document.querySelector("#dropdown").classList.remove("hidden");
              } else {
                document.querySelector("#dropdown").classList.add("hidden");
              }
              drop = !drop;
            }}
            className="text-white relative bg-[#85f622] hover:bg-[#8ce240] focus:ring-1 focus:outline-none focus:ring-b-300 font-medium rounded-lg text-sm px-2 py-1  text-center inline-flex items-center dark:bg-[#91cc5d] dark:hover:bg-[#91cc5d] dark:focus:ring-[#91cc5d]"
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
            className="z-10 hidden absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700"
          >
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  IEEE
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Springer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Elsevier
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Science Journal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  ACM
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="formfield">
        <div className="type font-semibold text-xl">Paper & Author Detail</div>
        <form action="">
          <div className="title">
            <label htmlFor="title" className="text-sm font-medium px-3 py-2">
              Paper Title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter the name of Paper"
              className="bg-[#eff2f9] rounded-lg placeholder:text-[#272727] text-sm placeholder:px-3 placeholder:text-sm w-[60%] mt-2"
            />
          </div>
          <div className="auth">
            <label
              htmlFor="no_author"
              className="text-sm font-medium px-3 py-2"
            >
              Select No of Authors:
            </label>
            <select
              name="Noofauthor"
              id="no_author"
              onChange={(e) => setauthor(e.target.value)}
              className="border border-black rounded-lg text-sm"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <label
              htmlFor="authors"
              className=" block text-sm font-medium px-3"
            >
              Authors:
            </label>
            <Author />
          </div>
        </form>
        <div className="type font-semibold text-xl ">Abstract & Keywords</div>
        <form action="">
          <label htmlFor="abstract" className=" block text-sm font-medium px-3">
            Abstract:
          </label>
          <div className="content w-[90%] px-3">
            <textarea
              name="abstract"
              id="abstract"
              rows="10"
              className="w-full bg-[#eff2f9] rounded-lg placeholder:text-[#272727] text-sm placeholder:px-3 placeholder:text-sm"
              placeholder="Enter abtract"
            ></textarea>
          </div>
          <label htmlFor="keywords" className=" text-sm font-medium px-3">
            Keywords:
          </label>
          <input
            name="keywords"
            id="keywords"
            className="px-3  bg-[#eff2f9] rounded-lg placeholder:text-[#272727] text-sm placeholder:px-3 placeholder:text-sm w-2/3"
            placeholder="Enter Keywords"
          ></input>
        </form>
        <div className="type font-semibold text-xl ">Introduction & Literature</div>
        <form action="">
          <label htmlFor="intro" className=" block text-sm font-medium px-3">
            Introduction:
          </label>
          <div className="content w-[90%] px-3">
            <textarea
              name="intro"
              id="intro"
              rows="10"
              className="w-full bg-[#eff2f9] rounded-lg placeholder:text-[#272727] text-sm placeholder:px-3 placeholder:text-sm"
              placeholder="Enter Introduction"
            ></textarea>
          </div>
          <label htmlFor="keywords" className=" text-sm font-medium px-3">
            Literature Survey:
          </label>
          <div className="content w-[90%] px-3">
          <textarea
              name="intro"
              id="literature"
              rows="10"
              className="w-full bg-[#eff2f9] rounded-lg placeholder:text-[#272727] text-sm placeholder:px-3 placeholder:text-sm"
              placeholder="Enter Literature Survey"
            ></textarea></div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
