import '../style_css/projectStyle.css'
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'

import { ChangePageContext } from '../contextAPI/changePageContext';

import bag from '../src/assets/bag.png'
import processing from '../src/assets/processing.png'
import experienceICon from '../src/assets/experienceICon.png'

export default function Project(){

    const [completeProject, setCompleteProject] = useState(1)
    const [WorkingOnProject, setWorkingOnProject] = useState(1)
    const [totalProject, setTotalProject] = useState(completeProject + WorkingOnProject)

    const {changePage, setChangePage} = useContext(ChangePageContext)
    const {title, setTitle} = useContext(ChangePageContext);

    if(changePage == 1){
        setChangePage(0)
    }

    if(title == 'Minh Luan Lu CV'){
        setTitle('Portfolio Projects')
    }

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

    return(
        <section className='hiddenPage'>
            <div className='bodyProjectPage'>
                <h1 className='projectText'>Project</h1>
                <div className='project-Container'>
                    <Link className='project' to='/PortfolioProjects'>
                        <img className='complete-Icon' src={bag} alt="" />
                        <a href="">
                            <h1>Completed</h1>
                            <p>{completeProject} Finshed Project</p>
                        </a>
                    </Link>
                    <a href="" className='project'>
                        <img className='complete-Icon' src={processing} alt="" />
                        <h1>Working on</h1>
                        <p>{WorkingOnProject} on Process</p>
                    </a>
                    <a href="" className='project'>
                        <img className='complete-Icon' src={experienceICon} alt="" />
                        <h1>Experience</h1>
                        <p>3+ years in school</p>
                    </a>
                </div>
            </div>
        </section>
    );
}