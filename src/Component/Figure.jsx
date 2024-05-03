import React from 'react'

const Figure = (props) => {
    const handlefiguresubmit=()=>{

    }
  return (
    <div>
      <form onSubmit={handlefiguresubmit}>
        <input type="file" name="figure" id="figure" />
        <input type="text" name='caption' id='caption' placeholder='Enter Figure Caption' />
        <input type="submit" value="Upload" />
      </form>
    </div>
  )
}

export default Figure
