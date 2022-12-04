import emailjs from "emailjs-com";



export default function ContactUs() {
    function sendEmail(e){
        e.preventDefault();
    
        emailjs.sendForm('service_7jfixio', 'template_403hzvf', e.target, '27dVif2lal7O0DT51')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
          e.target.reset()
      }
    return (
       <div className="bg-orange-600">
       <div>
        <h1 className ="text-yellow-100">
            Contact the people you accepted.
        </h1>
       </div>
       <div className="container">
    <form onSubmit={sendEmail}>
      <div className="row pt-5 mx-auto">
        <div className="col-10 form-group mx-auto pl-3">
          <input type="text" className="form-control border-2 border-amber-500 bg-yellow-100" placeholder="Your Name" name="name" required></input>
        </div>
        <div className="col-10 form-group pt-2 mx-auto pl-3">
          <select name="email" className="form-control border-2 border-amber-500 bg-yellow-100" label="Email Address" placeholder="" required>
            <option label="Email Address"></option>
            <option label="Ivar Bega Stem">ivarbegastem@gmail.com</option>
            <option label="Ravi Stimphil">ravistimphil@gmail.com</option>
          </select>
        </div>
        <div className="col-10 form-group pt-2 mx-auto pl-3">
          <input type="text" className="form-control border-2 border-amber-500 bg-yellow-100" placeholder="Subject" name="subject" required></input>
        </div>
        <div className="col-10 form-group pt-2 mx-auto pl-3">
          <textarea className="form-control border-2 border-amber-500 bg-yellow-100" id="" cols="30" rows="8" placeholder="Your message" name="message" required></textarea>
        </div>
        <div className="col-10 pt-3 mx-auto p-3">
          <input type="submit" className="btn btn-info cursor-pointer bg-amber-500 p-3 hover:bg-amber-300" value="Send Message" ></input>
        </div>
      </div>
    </form>
    </div>
       </div>
       
       
    )
}

/*
import React from "react";

export default function ContactUs(){

  
  return(
    
  )
}*/