import React, { Fragment } from 'react'
function Contact () {
    return (
                <body>
        <Fragment>
            <div className="banner">
                <div className="container">
                        <div className="banner-content">
                            <h1 className="header">
                            Have a question? Need Help? Reach out to us!
                            </h1>
                        <br />
                        <h1 className="header">
                            We are will answer back within 3 business days.
                            </h1>
                       <br/> <h2 class="center2" >Simply fill out this form!</h2>
                        <br />

                        <form>

                                    <input type="radio" id="account" name="account" value="account"/>
                                <label for="account">Account Issues </label><br/>

                            
                                    <input type="radio" id="feedback" name="feedback" value="feedback"/>
                                <label for="feedback">Feedback</label><br/>
  
                            
                                    <input type="radio" id="other" name="other" value="other"/>
                            <label for="other">Other</label><br />
                            
                            <label htmlFor="name">Name: </label>
                            <input type="text" id="name" name="name" />  <br/>
                               

                                     <label htmlFor="email">Email: </label>
                             <input type="email" id="email" name="email" /> <br/>
                               
 
                                    <label htmlFor="comment">Comment: </label>
                                        
                                            <textarea class="form-control" rows="5" id="comment"> </textarea><br/>
                            
                            <input type="submit" value="Submit"/> <br/>
                                        
                          </form> 
                                        </div>
                            </div> 
                    </div> 
            </Fragment> 
            </body>
    );
};

export default Contact;