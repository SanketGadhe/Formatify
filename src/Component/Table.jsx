import React, { useState } from "react";

const Table = (props) => {
  const [rows, setrows] = useState(null);
  const [columns, setcolumns] = useState(null);
  const [tabledata, settabledata] = useState({
    caption: "",
    rows: 0,
    columns: 0,
  });
  const handelsubmit = (e) => {
    e.preventDefault();
    settabledata({ ...tabledata, [e.target.name]: e.target.value });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value < 0) {
      return;
    }
    settabledata({
      ...tabledata,
      [name]: value,
    });
  };
  return (
    <div className={`p-4 ${props.className}`} id={props.id}>
      <form onSubmit={handelsubmit} className="mb-4">
        <input
          type="text"
          placeholder="Enter table caption"
          name="caption"
          value={tabledata.caption}
          onChange={(e) => handleChange(e)}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="number"
          name="rows"
          placeholder="Enter number of Rows"
          value={tabledata.rows}
          onChange={(e) => handleChange(e)}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="number"
          name="columns"
          placeholder="Enter number of Columns"
          value={tabledata.columns}
          onChange={(e) => handleChange(e)}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="submit"
          value="Generate Table"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
        />
      </form>
      {tabledata.rows && (
        <div className="table">
          <table className="border-collapse border border-gray-400">
            <tbody>
              {[...Array(parseInt(tabledata.columns))].map((_, index) => (
                <tr key={index}>
                  {[...Array(parseInt(tabledata.rows))].map((_, rowsindex) => (
                    <td key={rowsindex} className="border border-gray-400">
                      <input
                        type="text"
                        placeholder="Enter Value"
                        className="w-full p-2 border rounded"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Table;
