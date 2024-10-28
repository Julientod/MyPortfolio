import React, { Component } from 'react';
export default class Header extends Component {
  listenScrollEvent = e => {
    if (window.scrollY > 180) {
      console.log("white")
      document.querySelector('.nav').className='nav header_dark'
    } else {
      console.log("black")
      document.querySelector('.nav').className='nav header_light'
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home" >
         <nav id="nav-wrap">
            
            <ul id="nav" className="nav header_light ">
               <li className="current"><a className="smoothscroll" href="#home">Accueil</a></li>
               <li><a className="smoothscroll" href="#about">A propos</a></li>
             <li><a className="smoothscroll" href="#resume">Expériences</a></li>
               <li><a className="smoothscroll" href="#portfolio">Projets</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline"> {resumeData.name}</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}> {resumeData.role}.{resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank" ><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}