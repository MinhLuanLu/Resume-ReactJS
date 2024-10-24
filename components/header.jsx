
import '../style_css/HeaderStyle.css'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { ChangePageContext } from '../contextAPI/changePageContext';

export default function Header(){
    const {changePage, setChangePage} = useContext(ChangePageContext)
    const {title, setTitle} = useContext(ChangePageContext);
    function handleDownloadCV(){
        setChangePage(1)
        setTitle('Minh Luan Lu CV')
    }
   
    return(
        <>
        <div className='Header'>
            <div className='leftHeader'>
                <h3 className='titleName'>Minh <span className='dot'>.</span></h3>
            </div>
            <div className='middleHeader'>
                <Link className='pageTitle' to="/Home"><p>Home</p></Link>
                <Link  className='pageTitle' to="/About"><p>About</p></Link>
                <Link className='pageTitle' to="/Project"><p>Projects</p></Link>
                <Link className='pageTitle'  to='/Contact'><p>Contract</p></Link>
            </div>
            <div className='rightHeader'>
                <Link to='/PortfolioProjects'><button onClick={handleDownloadCV} className='Download_btn'>Download CV</button></Link>
            </div>
        </div>
        </>
    );
}