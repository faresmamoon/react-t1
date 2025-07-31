import style from './ContactMe.module.css'
import Star from './../../assets/star.svg'
function ContactMe(){
   
    return <>
 <h1 className='text-center py-4 '>Contact Me</h1>
    <div  className=' d-flex py-3 justify-content-center align-items-center  '> 
  <div className=" " > <button className= {` p-1 px-5 m-2  border-0  ${style.test}`}></button> </div>
    <div className={`${style.am} d-flex  `}>
        <img src={Star} />
        </div>
  <div className=" " > <button className= {` p-1 px-5 m-2  border-0  ${style.test}`}></button> </div>

</div>
<div className="container py-3">
<div className="d-flex flex-column align-items-center  gap-3 ">
    <form className='col-10  d-flex flex-column align-items-center  gap-4 '>
        <input type="text" className='col-10 py-2  ' placeholder='Full Name ' />
                <input type="email" className='col-10 py-2  ' placeholder='Email Address ' />
        <input type="text" className='col-10 py-2  ' placeholder='Phone namber ' />
                <input type="text" className='col-10 py-2  ' placeholder='Masege' />
<button type="submit" class="btn btn-success  ">send</button>

    </form>
</div>
</div>    </>
}
export default  ContactMe 