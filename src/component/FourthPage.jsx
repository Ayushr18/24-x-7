import '../FourthPage.css';
function FourthPage() {
    return(
        <>
            <div className="liberary-container">
                <div className="left-container">
                    <div className="liberary-header">
                        <div>Complete library of lectures</div>
                    </div>

                    <div className="lib">
                    at your fingertips
                    </div>
                    <div className="liberary-heading2">
                        <div>We provide a full library of <br/> competative exam lectures</div>
                    </div>
                    <p className="liberary-description">
                        Watch the lectures taken by our Vedantu Master teachers and <br/> play quizzes & hotspots.
                    </p>
                    <p className="library-description2">
                        A full repository of JEE, NEET, CBSE lectures in both English & <br/>Hinglish to take your preparation to the next level. A full course <br/>with interactive quizzes, hotspots.
                    </p>
                </div>

                <div className="right-container">
                    <div className="library-images">
                        <img src="../../public/assets/VLLLectureView.png" alt="" className="library-image"/>
                    </div>
                    <div className="library-image2">
                         <img src="../../public/assets/VLLHome.png" alt="First view" className="library-image" height='400px' width='200px'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FourthPage;