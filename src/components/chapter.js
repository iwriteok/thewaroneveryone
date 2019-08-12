import React from 'react';

const urlParams = '&color=%23861111&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&sharing=false&show_artwork=false&show_playcount=false';

const prepareSoundCloudLink = (linkText) => {
  if (typeof linkText !== 'string') return linkText;
  
  let startIndex = linkText.indexOf('http');
  let endIndex = linkText.indexOf('&');

  let urlBase = linkText.substring(startIndex, endIndex);

  return (
    <iframe 
      width = '100%' 
      height = '160' 
      scrolling = 'no' 
      frameBorder = 'no' 
      allow = 'autoplay'
      title= {urlBase}
      src={ urlBase += urlParams }>
    </iframe>
  );
} 

const Content = (props) => (
  <>
    <hr />
    <div className="chapter-container">

      <div className='chapter-soundcloud-link'>
        {prepareSoundCloudLink(props.soundCloudLink)}
      </div>

      <div className='chapter-description'>
        <h1>
            {props.title}
        </h1>
        <p>
            {props.description}
        </p>
      </div>
    </div>
  </>
)

export default Content
