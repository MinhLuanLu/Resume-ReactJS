import '../style_css/AboutStyle.css'
import { useEffect } from 'react';

export default function About(){

    useEffect(()=>{
        const observer = new IntersectionObserver((entries) =>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    entry.target.classList.add('showPage')
                }
                else{
                    entry.target.classList.remove('showPage')
                }
            })
        })

        const hiddenElement = document.querySelectorAll('.hiddenPage');
        hiddenElement.forEach((element)=>{
            observer.observe(element);
        })
    },[])

    function handleDownloadCV() {
        const link = document.createElement('a');
        link.href = '../pdf/CV.pdf'; // Update this path to your actual CV file
        link.download = 'Minh Luan Lu CV.pdf'; // The name of the file when downloaded
        link.click();
      }

    return(
        <section className='hiddenPage'>
            
            <div className='Container'>
                <h1 className='about-me1'>About Me</h1>
                <div className="bodyAboutPage">
                    <h1 className='about-me2'>About Me</h1>
                    <div className="leftSection">
                        <div className='leftSectionContainer'>
                            <p className='myIntroduction'>My introduction</p>
                            <p className='text'> My name is Minh Luan Lu and I am 23 years old. I have currently just finished my second main course at Aarhustech. 
                                My education is called Data Technician with a specialization in Programming.  
                                This typically involves working with software development in various 
                                            programming languages for different platforms. 
                                I usually work with backend languages Python, Flask and Django as Frameworks. 
                                As frontend languages I usually use HTML, CSS, and Javascript, and React.js and React Native as Frameworks.
                                                      
                            </p>
                            <button onClick={handleDownloadCV} className='download-btn'>Download CV</button>
                        </div>
                    </div>
                    <div className="rightSection">  
                        <div className='ContainerRightSection'>
                            <div  className='languagesContainer'>
                                <div className='fontendContainer'>
                                    <p className='title'>Frontend</p>
                                    <div className='layer1'>
                                        <p className='name'>HTML</p>
                                        <p className='name'>CSS</p>
                                        <p className='name'>Javascript</p>
                                    </div>
                                    <div className='layer2'>
                                        <p className='name'>React</p>
                                        <p className='name'>React Native</p>
                                    </div>
                                </div>

                                <div className='backendContainer'>
                                    <div>
                                        <p className='title'>Backend</p>
                                    </div>
                                    <div className='backendtext'>
                                        <div>
                                            <p className='name'>Flask</p>
                                        
                                        </div>
                                        <div>
                                            <p className='name'>Django</p>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className='databaseContainer'>
                                    <div>
                                        <p className='title'>Database</p>
                                    </div>
                                    <div className='backendtext'>
                                        <div>
                                            <p className='name'>PostgreSQL</p>
                                        
                                        </div>
                                        <div>
                                            <p className='name'>None</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}