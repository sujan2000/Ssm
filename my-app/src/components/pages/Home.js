import React, {Component} from "react";
import  Header from "../Common/Header";
import image from "../assets/img/header-bg.jpg";

//Re-useable components
import Services from "../common/Services";
import Portfolio from "../Common/Portfolio";
import Timeline from "../Common/Timeline";
import Team from "../Common/Team";

class Home extends Component{
    render(){
        return(
            <div>
          <Header 
           title="Welcome To Our Studio!"
           subtitle="It's Nice To Meet You"
           buttonText="Tell Me More"
           Link="/Services"
           showButton={true}
           image={image}
           />
           <Services />
           <Portfolio />
           <Timeline />
           <Team />
        </div>
        );
    }
}
export default Home;