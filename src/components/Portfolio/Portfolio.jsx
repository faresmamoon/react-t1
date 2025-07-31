import style from './Portfolio.module.css'
import Star from './../../assets/star.svg'
import main1 from './../../assets/main1.png'
import main2 from './../../assets/main2.png'
import main3 from './../../assets/main3.png'
import main4 from './../../assets/main4.png'
import main5 from './../../assets/main5.png'
import main6 from './../../assets/main6.png'

function Portfolio(){
   
    return <>
    <h1 className='text-center py-3 '>Portfolio</h1>
    <div  className=' d-flex py-3 justify-content-center align-items-center  '> 
  <div className=" " > <button className= {` p-1 px-5 m-2  border-0  ${style.test}`}></button> </div>
    <div className={`${style.am} d-flex  `}>
        <img src={Star} />
        </div>
  <div className=" " > <button className= {` p-1 px-5 m-2  border-0  ${style.test}`}></button> </div>

</div>
<div className=' d-flex  py-4  '>
  <div className='container'>
    <div className='row col-12 row-gap-5'>
 <img className=' col-4 rounded-5'  src={main1} />
  <img className='col-4 rounded-5'  src={main2} />
 <img className=' col-4 rounded-5'  src={main3} />
 <img className=' col-4 rounded-5'  src={main4} />
 <img className='col-4 rounded-5'  src={main5} />
 <img className='col-4 rounded-5'  src={main6} />
</div>
</div>
</div>

    
    </>
}
export default  Portfolio 