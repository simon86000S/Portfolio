import React from 'react';
import Particule from './Particule';

const MyProject = () => {
  
  return (
    <div className='bg-slate-200 shadow-xl shadow-black p-15   h-[100vh]'>
    <Particule/>
    <div className=''>
<h1 className='min-md:relative text-center text-8xl before:content-["Projets"] before:text-black before:opacity-10 before:absolute before:-bottom-25  before:left-[15%] before:text-7xl max-sm:text-3xl before:text-5xl  '>Projets</h1>
    </div>
  
    </div>
  )
}
export default MyProject