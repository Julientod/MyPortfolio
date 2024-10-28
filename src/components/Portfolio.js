import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Certains de mes projets.</h1>
          <div className='projects'> 
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <a href={`${item.url}`} target="_blank" rel="noreferrer">
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    
                      <img src={`${item.imgurl}`} alt='logo projet' className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    
                  </div>
                </div>
                </a>
              )
            })
          }
          </div>
          </div>
        </div>
      </div>
  </section>
        );
  }
}