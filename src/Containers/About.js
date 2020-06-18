
import  React  from  'react';
import  Carousel  from  'semantic-ui-carousel-react';
import { Image, Button } from  'semantic-ui-react'
import {Link} from "react-router-dom"
const  About  = () => {
	// let  elements  = [
	// 	{
	// 		render:()=>{
	// 			return <Button  fluid></Button>
	// 		}
	// 	},
	// 	{
	// 		render:()=>{
	// 			return <Button  fluid><img class="ui image" src="https://www.collinsdictionary.com/images/full/school_309241295.jpg"/></Button>
	// 		}
	//     },
	// ]
	return (
		<div >
	<div id="slides" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#slides" data-slide-to="0" className="active"></li>
                    <li data-target="#slides" data-slide-to="1"></li>
                    <li data-target="#slides" data-slide-to="2"></li>
                    <li data-target="#slides" data-slide-to="3"></li>
                </ul>
            <div className="carousel-inner" >
                <div className="carousel-item active">
                    <img className="home-img" style={{width:"1500px", height:"770px"}} src="https://images.pexels.com/photos/1184578/pexels-photo-1184578.jpeg" alt="."/>
                    <div className="carousel-caption">
					<Link to= "/login"><button type="button" id= "about-login"class="btn btn-success btn-lg">Log In</button> </Link>
                        <p>Since our opening day back in 2020, our Gym classes have provided an inspiring welcoming for everybody! That makes every attendee feel like they are a part of one big and passionate community! With that in mind, you can always reach our fitness instructors for any kind of assistance.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="home-img" style={{width:"1500px", height:"770px"}} src="https://images.pexels.com/photos/3620697/pexels-photo-3620697.jpeg" alt="."/>
                </div>
                <div className="carousel-item">
                    <img className="home-img" style={{width:"1500px", height:"770px"}}  src="https://images.pexels.com/photos/261895/pexels-photo-261895.jpeg" alt="."/>
                </div>
                <div className="carousel-item">
                    <img className="home-img" style={{width:"1500px", height:"770px"}} src="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg" alt="."/>
                </div>
            </div>
        </div>
       
		</div>
	)

}
export  default  About;

// "https://cdn.cnn.com/cnnnext/dam/assets/200417031424-01-coronavirus-education-full-169.jpg"
// "https://www.collinsdictionary.com/images/full/school_309241295.jpg"
// "https://www.greatschools.org/gk/wp-content/uploads/2014/03/The-school-visit-what-to-look-for-what-to-ask-1.jpg"
// "https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png"

{/* 
<div className= "about-us">
<img className="ui fluid image" alt="hi" id= "about-us-img"src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png"/>
</div>
<div>
<h4 className= "about-us">
    The About Us page of your site is the page where you get to talk about yourself and present how awesome of a person you are.
     It’s the place that gives you the opportunity to talk about what you do and why it matters.
     Every successful entrepreneur knows that a well-designed About Us page brings ‘all the boys and gals in the yard’ 
     which means that it acts as the first point of contact between the ‘creator’ and the ‘receiver’ or else in marketing terms, the ‘seller’ and the ‘buyer’.
</h4>
</div> */}


{/* <h1>Home Page</h1> */}
{/* <Carousel
	elements  =  {  elements  }
	duration  ={3000}
	animation  ='slide left'
	showNextPrev  =  {false}
	showIndicators  ={true}
/> */}
{/* <div className= "about-us">
<img className="ui fluid image" alt="hi" id= "about-us-img"src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png"/>
</div> */}