import CustomNavbar from '../components/custom_navbar';
import React from "react";
import { Carousel } from 'rsuite';
import { Panel, Placeholder } from 'rsuite';
import '../assets/css/home.css'
import chess_img from '../assets/images/chess3.jpg'
import magnus_img from '../assets/images/magnus.jpeg'
import garry_img from '../assets/images/garry.jpg'

const Home = () => {
    return (
        <div>
            <CustomNavbar/>
            <main>
              <div className='slider'>
            {/* <Carousel autoplay className="custom-slider">
    <img src={cat_img} height="300" />
    <img src={cat_img} height="300" />
    <img src={cat_img} height="300" />
    <img src={cat_img} height="300" />
    <img src={cat_img} height="300" />
   </Carousel> */}
   <h1 style={{marginLeft:350}}>Welcome User!</h1>
   <img src={chess_img} style={{height:"500px", width:"1000px", objectFit:"cover"}}/>
  </div>
  <br/>
  <h1 style={{textAlign:'center'}}>Popular Academies</h1>

  <div className='menubar'>
  <Panel header="KKR chess academy" collapsible bordered>
  <p style={{fontSize:'20'}}>4C/15A, East West Road, Om, Shakthi Kovil Rd, <br/>Lakshmipuram, Coimbatore, Tamil Nadu 641006.<br/> Contact: 77085 58397</p>
  </Panel>
  <Panel header="Improve your chess academy" collapsible bordered>
  <p style={{fontSize:'20'}}>45, Sri Ganapathy Gardens 1st St, Ganapathy Housing Unit, Ganapathy Gardens,<br/> Ganapathy, Coimbatore, Tamil Nadu 641006<br/> Contact: 73587 49523</p>
  </Panel>
  <Panel header="Coimbatore Chess academy" collapsible bordered>
  <p style={{fontSize:'20'}}>32-A, 4th Street, Sivananda Colony, Tatabad, <br/> Coimbatore, Tamil Nadu 641012<br/> Contact: 93632 11753</p>
  </Panel>
  </div>
  <div>
    
  </div>


  <div className='play'>
    <h3 style={{marginLeft:550, marginTop:50}}>
        Wanna play a match? <a href='https://www.chess.com/play'> <span>Click Here!</span></a>
        </h3>
  </div>


    <h3 style={{marginLeft:510, marginTop:30}}>
        Wanna know about famous chess players?
    </h3>

    <br/>
            </main>

  <div className='facts' style={{marginLeft:300, display:'flex'}}>
    <div className='fact1'>

    <h4>Magnus Carlsen</h4>
    <br/>
    <img src={magnus_img} style={{height:300, width:250}}></img>
    <p style={{fontSize:20}}>
Sven Magnus Øen Carlsen is a Norwegian chess grandmaster. <br/> He is a five-time World Chess Champion, the reigning five-time World Rapid Chess Champion, <br/>the reigning seven-time World Blitz Chess Champion, and the reigning Chess World Cup Champion. </p>
<br/>

<h4>Garry Kimovich Kasparov </h4>
<br/>
<img src={garry_img} style={{height:300, width:250}}></img>
<p style={{fontSize:20}}>Garry Kimovich Kasparov is a Russian chess grandmaster, former World Chess Champion, <br/>political activist and writer. His peak FIDE chess rating of 2851,<br/> achieved in 1999, was the highest recorded until being surpassed by Magnus Carlsen in 2013.</p>
  </div>
  <div className='fact1'>

<h4>Magnus Carlsen</h4>
<br/>
<img src={magnus_img} style={{height:300, width:250}}></img>
<p style={{fontSize:20}}>
Sven Magnus Øen Carlsen is a Norwegian chess grandmaster. <br/> He is a five-time World Chess Champion, the reigning five-time World Rapid Chess Champion, <br/>the reigning seven-time World Blitz Chess Champion, and the reigning Chess World Cup Champion. </p>
<br/>

<h4>Garry Kimovich Kasparov </h4>
<br/>
<img src={garry_img} style={{height:300, width:250}}></img>
<p style={{fontSize:20}}>Garry Kimovich Kasparov is a Russian chess grandmaster, former World Chess Champion, <br/>political activist and writer. His peak FIDE chess rating of 2851,<br/> achieved in 1999, was the highest recorded until being surpassed by Magnus Carlsen in 2013.</p>
</div>

    </div>


        </div>
    );
}

export default Home;
