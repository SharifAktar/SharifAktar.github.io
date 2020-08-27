import React, { Component } from 'react';

class Resume extends Component {

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
   
    
      var education = this.props.data.education.map(function(education){
        return  (     
            <div>
            <h3  style={{color:"green"}} > <img  style={{ width:60, height:40}}  src="images/czu_plnobarevne.jpg "></img> {education.school} </h3>
            
            <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
            <p>{education.description}</p>
            </div>

        )
        })
        var training = this.props.data.training.map(function(training){
          return  (     
              <div><h3  style={{color:"green"}} >   <img  style={{ width:100, height:50}}  src="images/sap.png "></img> {training.workshop} </h3>
              <p className="info">{training.course} <span>&bull;</span><em className="date">{training.time}</em></p>
              <p>{training.description}</p>
              </div>
  
          )
          })
      
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map((skills)=>{
        var className = 'bar-expand '+skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{width:skills.level, backgroundColor:this.getRandomColor()}}className={className}></span><em>{skills.name}</em>
          </li>
        )
      })
    }
    
    return (
      <section id="resume">

      <div className="row education"style={{textAlign:"justify"}}>
         <div className="three columns header-col" style={{textAlign:"justify" }}>
          <img src="images/educap.png "></img>
            <h1> <span>Education</span></h1>
           
         </div>
      
        
         <div className="nine columns main-col"style={{textAlign:"justify"}}>
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row education"style={{textAlign:"justify"}}>
         <div className="three columns header-col" style={{textAlign:"justify" }}>
          <img src="images/training.jpg "></img>
            <h1> <span>Training</span></h1>
           
         </div>

      <div className="nine columns main-col" style={{textAlign:"justify", paddingLeft:50}}>
            <div className="row item">
               <div className="twelve columns">
                 {training}
               </div>
            </div>
         </div>
</div>

      <div className="row work">

         <div className="three columns header-col" >
         <img src="images/experience.jpg "></img>
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col" style={{textAlign:"justify", paddingLeft:50}}>
          {work}
        </div>
    </div>


      <div className="row skill">

         <div className="three columns header-col" >
         <img src="images/skills-Murrstock-adobe.jpg "></img>
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col" style={{textAlign:"justify", paddingLeft:50}}>

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
