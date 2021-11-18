import React from 'react'
/*import Swanlake from '../assets/swanlake.jpg'*/

const Contact = () => {
    return (
        <div className="container">
            <div className="style">
            <h1 className="contact">Contact</h1>
            <p className="paragraph">Contact Simply Sweet for your next dessert.</p>
            </div>
            <div className="row">
                <div className="column">
                  
            </div> 
            <div className="column">
            <form className="form" action="/action_page.php">
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname"
                    placeholder="Your name..."></input>
                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname"
                    placeholder="Your last name..."></input>
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email"
                    placeholder="Your email..."></input>


                </form>
            </div>
            </div>
            
        </div>
    )
}

export default Contact
