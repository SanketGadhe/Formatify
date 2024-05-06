import React, { useState } from 'react';

const Table = (props) => {
  const [tableData, setTableData] = useState({
    caption: '',
    rows: 0,
    columns: 0,
    data: [], // Multidimensional array to store table values
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTableData({
      ...tableData,
      [name]: value,
    });
  };
  const handleTableValueChange = (e, rowIndex, colIndex) => {
    const newData = [...tableData.data];
    
    // Ensure the row exists
    if (!newData[rowIndex]) {
      newData[rowIndex] = [];
    }
  
    newData[rowIndex][colIndex] = e.target.value;
    setTableData({
      ...tableData,
      data: newData,
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new array to hold the table data
    const newData = [];
    for (let i = 0; i < tableData.rows; i++) {
      const newRow = [];
      for (let j = 0; j < tableData.columns; j++) {
        newRow.push('');
      }
      newData.push(newRow);
    }
    // Update the state with the new data
    setTableData({
      ...tableData,
      data: newData,
    });
  };

  const handleFormSubmit = () => {
    // Update formData with the table data
    const updatedFormData = { ...props.formdata };
    updatedFormData[props.id] = tableData.data;
    updatedFormData[props.id+`caption`] = tableData.caption;
    props.setformdata(updatedFormData)
    console.log('Table ',props.formdata)
  };

  return (
    <div className={`p-4 ${props.className}`} id={props.id}>
      <form onSubmit={handleSubmit} className="mb-4">
        <label htmlFor="tablecaption">Table Caption</label>
        <input
          type="text"
          id='tablecaption'
          placeholder="Enter table caption"
          name="caption"
          value={tableData.caption}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
        />
        <label htmlFor="tablerows">Table Rows</label>
        <input
          type="number"
          name="rows"
          id='tablerows'
          placeholder="Enter number of Rows"
          value={tableData.rows}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
        />
        <label htmlFor="tablecol">Table Columns</label>
        <input
          type="number"
          name="columns"
          id='tablecol'
          placeholder="Enter number of Columns"
          value={tableData.columns}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
        />
        
      </form>
      {tableData.rows ? (
        <div className="table">
          <table className="border-collapse border border-gray-400">
            <tbody>
              {[...Array(parseInt(tableData.rows))].map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {[...Array(parseInt(tableData.columns))].map((_, colIndex) => (
                    <td key={colIndex} className="border border-gray-400">
                      <input
                        type="text"
                        placeholder="Enter Value"
                        className="w-full p-2 border rounded"
                        value={tableData.data[rowIndex]?.[colIndex] || ''}
                        onChange={(e) => handleTableValueChange(e, rowIndex, colIndex)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ):''}
      <button
        onClick={handleFormSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer mt-4"
      >
        Save Table Data
      </button>
    </div>
  );
};

export default Table;
