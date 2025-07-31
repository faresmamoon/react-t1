import style from './Footer.module.css'
import facebook from './../../assets/facebook.svg'
import twitter from './../../assets/twitter.svg'
import globe from './../../assets/globe.svg'
import linkedin from './../../assets/linkedin.svg'


function Footer(){
   
    return <>
<div className={`${style.test} py-5 ` }>
    <div className="container">
        <div className="row justify-content-center">
            <div className='text-white col-4    '> <h1>Location</h1><p>2215 John Daniel Drive
Clark, MO 6524</p></div>
<div className='text-white col-4 '> <h1>Around the Web</h1>
<p className='row gap-3'> <img className=' col-2 border rounded-circle'  src={facebook} />
<img className=' col-2 border rounded-circle '  src={twitter} />
<img className=' col-2 border rounded-circle'  src={linkedin} />
<img className=' col-2  border rounded-circle'  src={globe} />


</p></div>
<div className='text-white col-4'> <h1>About Freelancer</h1><p>Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap .</p></div>
        </div>
        
    </div>
    
    
    </div>    </>
}
export default  Footer 