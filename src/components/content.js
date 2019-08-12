import React from 'react';
import Chapter from './chapter';
import Preamble from './preamable';

const Content = () => (
  <div>
    <content className='chapter-grid'>
      <Preamble />
      <Chapter title='Chapter 1' description={chapterDescription} soundCloudLink='<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485754510&color=%23861111&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=true"></iframe>'/>
      <Chapter title='Chapter 2' description={chapterDescription} soundCloudLink='<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485754510&color=%23861111&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=true"></iframe>'/>
      <Chapter title='Chapter 3' description={chapterDescription} soundCloudLink='<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485754510&color=%23861111&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=true"></iframe>'/>
      <Chapter title='Chapter 4' description={chapterDescription} soundCloudLink='<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485754510&color=%23861111&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=true"></iframe>'/>
      <Chapter title='Chapter 5' description={chapterDescription} soundCloudLink='<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485754510&color=%23861111&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=true"></iframe>'/>
    </content>
  </div>
)

export default Content

const chapterDescription = `Nulla varius aliquam tristique. Maecenas vulputate odio in cursus pretium. Integer eget pulvinar arcu, eu semper enim. Donec eget metus a velit sodales dignissim at non justo. Ut pharetra nibh eget consectetur tempor. Pellentesque accumsan erat diam, et volutpat felis porta eget. Mauris interdum iaculis libero at rhoncus.

Suspendisse vel tincidunt augue, non vulputate justo.Sed ut sagittis ligula.In vel dictum arcu.Cras at diam pellentesque, mollis mi at, facilisis tortor.Fusce ultricies.`;