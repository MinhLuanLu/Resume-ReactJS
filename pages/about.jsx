import About from "../components/about";
import Header from "../components/header";
import '../style_css/AboutStyle.css'
export default function AboutPage(){


    return(
        <>
         <Header/>
         <h1 className="about-Me">About Me</h1>
         <About/>
        </>
    );
}