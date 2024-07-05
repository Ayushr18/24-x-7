import '../HeroPage.css';
function HeroPage() {
    return(
        <>
            <div className="hero-container">
                <div className="left-section">
                    <div className="heading">
                        <span style={{color: 'white'}}>One Stop</span>
                        <span> Solution </span>
                        <span>For Your Child</span>
                    </div>
                    <div className="hero-description">
                        Millions of students are already using our 24x7 app & <br/>
                        competing at the highest level in JEE and NEET Exams. 
                    </div>

                    <div className="hero-subdescription">
                        We are you waiting for?
                    </div>

                    <div className="btn">
                        <button><span>Login / Register</span></button>
                    </div>
                </div>

                 <div className="right-side">
                    <div className='mobileimage'>
                        <img src="/assets/mob.png" alt="mob" />
                    </div>
                    <div className='desktopimage'>
                        <img src="/assets/DesktopSelection.png" alt="mob" />
                    </div>
                </div> 
            </div>  
        </>
    )
}

export default HeroPage;