import React, { Component } from "react";
import Field from "../Common/Field";
import {withFormik} from 'formik';
import * as Yup from 'yup';


const fields = {
    sections:[
        [
           {name:"name",elementName:"input",type:"text",placeholder:"your name"},
           {name:"email",elementName:"input",type:"email",placeholder:"your email"},
           {name:"phone",elementName:"input",type:"text",placeholder:"your phone number"}
        ],
        [
            {name:"message",elementName:"textarea",type:"text",placeholder:"Type your message"}
        ]
    ]
}

class Contact extends Component{    
    render(){
        return(
            <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <form    onClick={this.props.handleSubmit} name="sentMessage" novalidate="novalidate">
                    <div className="row align-items-stretch mb-5">
                        {fields.sections.map((section,sectionIndex)=>{
                               console.log("Randering section", sectionIndex,"with",section)
                               return(
                                <div className="col-md-6" key={sectionIndex}>
                                    {section.map((field,i)=>{
                                        return <field 
                                                {...field}
                                                 key={i}
                                                 value={this.props.value[field.name]}
                                                 name={field.name}
                                                 onChange={this.props.handleChange}
                                                 onBlur={this.props.handleBlur}
                                                 touched={this.props.touched[field.name]}
                                                 errors={this.errors[field.name]}
                                                 />
                                    })}
                                    </div>
                        )
                        })}
                    </div>
                    <div className="text-center">
                        <div id="success"></div>
                        <button
                         className="btn btn-primary btn-xl text-uppercase"
                         id="sendMessageButton"
                         type="submit"
                         >Send Message</button>
                    </div>
                </form>
            </div>
        </section>
        )
    }
}
export default withFormik({
    mapPropsToValue: () => ({
        name:"",
        email:"",
        phone:"",
        message:""
    }),
    validate: values => {
           const errors = {};
           Object.key(values).map(v=>{
               if(values[v]){
                   errors[v]="Required";
               }
           })
           return errors;
    },
    validationSchema:Yup.Object().shape({
        name:Yup.string().min(3,'come on bro your name is longer then that').required('you must give us your name'),
        email:Yup.string().email('you need to give us valid email').required('we need a valid email'),
        phone:Yup.string.min(10,'we need a 10 digit longer phone number').max(15,'your phone number is too long.').required('we need a phone number to reach you at.'),
        message:Yup.string().min(500,'we need more detailed information.').required('Type your message .')
    }),
    handleSubmit:(values,{setSubmiting})=>{
        console.log("VALUES",values);
        alert("you have submitted the form",JSON.stringify(values));
    }
})(Contact);