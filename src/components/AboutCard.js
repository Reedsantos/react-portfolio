import React from "react";
import Profile from "../assets/Profile.jpg"


function AboutCard() {
    return (
        <div className="about-container">
            <h5>About Me</h5>

            <img src={Profile} alt="profile-photo" className="profile float-left"></img>
            <div>

                <div className="mt-3">

                    <h5>Welcome to the Reed Santos portfolio page!</h5>
                    <br></br>

                    <p>I am a New Hampshire based full-stack developer who learned programming from the UNH Coding Bootcamp.
                    My technical skills include Jquery, MySQL, Node.js, Express, Bootstrap, and React.
                    I have experience with hardware as a computer salesman at Best Buy where learned about the components of a computer and their relation to each other.
                    In my free time I enjoy playing lacrosse, listening to 70's Rock, and spending time with my lovely girlfriend.
                    My passion has always been in technology and I truely love computers. :)
                        </p>

                    <p>
                        Feel free to contact my email:
                         <a href="mailto:Reedsantos@icloud.com"
                            target="_blank"> Reedsantos@icloud.com </a>
                        <br></br>
                            Check out my Github profile:<a
                            href="https://github.com/reedsantos"> Here</a>
                        <br></br>
                        My LinkedIn profile:

                        <a
                            href="https://www.linkedin.com/in/reed-santos-3598091ab/">
                            Here.</a>
                                                </p>
                </div>

                <div className="card-body contactLinks">
                    <a href="https://www.linkedin.com/in/reed-santos-3598091ab/" className="card-link">LinkedIn</a>
                    <a href="https://github.com/reedsantos" className="card-link">GitHub</a>
                </div>
            </div>
            {/* end copy paste  */}
        </div>
    );
}

export default AboutCard;
