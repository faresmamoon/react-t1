import style from './About.module.css'

import Starw from './../../assets/starw.svg'

function About(){
   
    return <>
    <div className='bg-success text-white py-3'>
      <h1 className='text-center  '>About</h1>
        <div  className=' d-flex py-3 justify-content-center align-items-center '> 
      <div className=" " > <button className= {` p-1 px-5 m-2  border-0  `}></button> </div>
        <div className={`${style.am} d-flex text-white  `}>
            <img src={Starw}  />
            </div>
      <div className=" " > <button className= {` p-1 px-5 m-2  border-0  `}></button> </div>
    
    </div>
    <div className=' '>
       
        <div className="container  ">
            <div className="row  col-12  justify-content-center">
                <div className="col-4  "><p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                 <div className="col-4 "><p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>

            </div>
        </div>
    </div>
    <div className="d-flex py-3 justify-content-center align-items-center"> <button type='submit' className='btn btn-xl btn-outline-light'>
                        Free Download!
                    </button> </div>
    </div>
    </>
}
export default  About 