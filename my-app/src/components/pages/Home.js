import React, {Component} from "react";
import  Header from "../Common/Header";
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
           />
        </div>
        );
    }
}
export default Home;