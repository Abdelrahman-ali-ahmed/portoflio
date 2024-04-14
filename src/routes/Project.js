import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectImage from '../components/ProjectImage';
import WorkCard from '../components/WorkCard';
import Dynamic from '../components/dynamic';

function Project() {
  return (
    <div>

<Navbar/>
<ProjectImage title="Project" content=" some of my project which I have done"/>
<Dynamic/>
<Footer/>

    </div>
  )
}

export default Project;