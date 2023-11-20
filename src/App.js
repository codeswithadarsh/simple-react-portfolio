import React from "react";

import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import Section from "./Components/Section";
import "./style.css"

import sectionData from "./datas/sectionData";
import Footer from "./Components/Footer";



const App = () => {



    return(
        <div>
            <Navbar />
            <br/>
            <AboutMe />
            <br/>

             { 
              sectionData.map((item)=>(
                    <Section  
                    title= {item.title}
                     des= {item.des}
                     className = {item.className}
                    />
              ))

             }
              <br/>
             <Footer />
            
        </div>
    )
}

export default App;