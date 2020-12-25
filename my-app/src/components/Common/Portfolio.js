import React, {Component} from 'react';
import PortfolioItem from './PortfolioItem';

import img1 from './assest/img/portfolio/01-thumbnail.jpg';
import img2 from './assest/img/portfolio/02-thumbnail.jpg';
import img3 from './assest/img/portfolio/03-thumbnail.jpg';
import img4 from './assest/img/portfolio/04-thumbnail.jpg';
import img5 from './assest/img/portfolio/05-thumbnail.jpg';
import img6 from './assest/img/portfolio/06-thumbnail.jpg';
var portfolio = [
    {title:"Threads",subtitle:"Illustration",image:img1},
    {title:"Explore",subtitle:"Graphic Design",image:img2},
    {title:"Finish",subtitle:"Identity",image:img3},
    {title:"Lines",subtitle:"Branding",image:img4},
    {title:"Southwest",subtitle:"Website Design",image:img5},
    {title:"Window",subtitle:"Photography",image:img6}
];
class Portfolio extends Component{
    render(){
        return(
            <section id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                   {portfolio.map((item,index)=>{
                       return <PortfolioItem {...item} key={index}/>
                   })}

                </div>
            </div>
        </section>
        );
    }
}
export default Portfolio;