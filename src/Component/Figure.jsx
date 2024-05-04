import React, { useState } from "react";

const Figure = (props) => {
  const [image, setImage] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    props.setformdata({
      ...props.formdata,
      [props.id]: imageUrl,
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    props.setformdata({
      ...props.formdata,
      [name]: value,
    });
  };
  return (
    <div className={`p-4 ${props.className}`} id={props.id}>
      <form className="mb-4">
        <input
          type="file"
          id="figure"
          className="w-full mb-2 p-2 border rounded"
          name={props.id + "img"}
          onChange={handleFileChange}
        />
        <input
          type="text"
          name={props.id + "caption"}
          id="caption"
          onChange={(e) => {
            handleChange(e);
          }}
          value={props.formdata[props.id + "caption"]||''}
          placeholder="Enter Figure Caption"
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="submit"
          value="Upload"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
        />
      </form>
      <div className="image-uploader">
        {props.image && (
          <div className="preview">
            <img src={image} alt="Uploaded" className="w-full" />
            {/* You can render your figure here */}
            <figure className="custom-figure bg-white p-4 rounded mt-4">
              <figcaption className="text-gray-800">{props.caption}</figcaption>
            </figure>
          </div>
        )}
      </div>
    </div>
  );
};

export default Figure;
