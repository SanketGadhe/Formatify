import React from 'react'

const Trusted = () => {
  return (
    <div className='trusted flex justify-center items-center mt-11'>
        <div className="conatiner">
        <div className="heading flex justify-center"><h1 className=' text-4xl font-bold'> Trusted By</h1></div>
        <div className="sub flex justify-between mt-2">
            <div className="each">
                <p className='text-3xl font-bold px-4 py-1'>
                    IEEE
                </p>
            </div>
            <div className="each">
                <p className='text-3xl font-bold px-4 py-1'>
                    Springer
                </p>
            </div>
            <div className="each">
                <p className='text-3xl font-bold px-4 py-1'>
                   Elsevier
                </p>
            </div>
            <div className="each">
                <p className='text-3xl font-bold px-4 py-1'>
                    Science Journal
                </p>
            </div>
            <div className="each">
                <p className='text-3xl font-bold px-4 py-1'>
                    ACM
                </p>
            </div>

        </div>
        </div>
        
      
    </div>
  )
}

export default Trusted
