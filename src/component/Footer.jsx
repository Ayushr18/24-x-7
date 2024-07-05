import '../Footer.css'
function Footer() {
    return(
        <>
            <div className="footer-container">
                <div className="footer-left">
                    <div className="desc">
                        Get link in sms to download the app
                    </div>
                    <input type="number" placeholder="Enter mobile number" />
                </div>

                <div className="footer-right">
                    <div className="first-list">
                        <p>Company</p>
                        <ul>
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Vedantu Blog</li>
                            <li>News</li>
                            <li>Child safety</li>
                            <li>Why Vedantu</li>
                            <li>Our results</li>
                            <li>Careers</li>
                            <li>Help india learn</li>
                        </ul>
                    </div>

                    <div className="second-list">
                        <p>Other Links</p>
                        <ul>
                            <li>Free live classes</li>
                            <li>Why tech with vedantu</li>
                            <li>Try WAVE</li>
                            <li>Try Whiteboard</li>
                            <li>Vedantu important promise</li>
                            <li>VOLT</li>
                            <li>Micro courses</li>
                            <li>Maharastra Board</li>
                            <li>Benefits</li>
                            <li>Engineerind Blog</li>
                        </ul>
                    </div>

                    <div className="third-list">
                        <ul>
                            <li>CBSE Tuitions</li>
                            <li>ICSE Tuitions</li>
                            <li>JEE (Mains & Advanced)</li>
                            <li>NEET</li>
                            <li>Eklavya JEE</li>
                            <li>Eklavya NEET</li>
                            <li>Computer Science</li>
                        </ul>
                    </div>

                    <div className="fourth-list">
                       <ul>
                       <li>English Superstar for kids</li>
                       <li>Spoken English</li>
                       </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;