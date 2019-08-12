import React from 'react';
import Chapter from './chapter';
import Preamble from './preamable';

import { chapter1Title, chapter1Description, chapter1SoundCloudLink } from '../chapters/chapter1'
import { chapter2Title, chapter2Description, chapter2SoundCloudLink } from '../chapters/chapter2'
import { chapter3Title, chapter3Description, chapter3SoundCloudLink } from '../chapters/chapter3'
import { chapter4Title, chapter4Description, chapter4SoundCloudLink } from '../chapters/chapter4'
import { chapter5Title, chapter5Description, chapter5SoundCloudLink } from '../chapters/chapter5'
import { chapter6Title, chapter6Description, chapter6SoundCloudLink } from '../chapters/chapter6'
import { chapter7Title, chapter7Description, chapter7SoundCloudLink } from '../chapters/chapter7'

const Content = () => (
  <div>
    <content className='chapter-grid'>
      <Preamble />
      <Chapter title={chapter1Title} description={chapter1Description} soundCloudLink={chapter1SoundCloudLink} />
      <Chapter title={chapter2Title} description={chapter2Description} soundCloudLink={chapter2SoundCloudLink} />
      <Chapter title={chapter3Title} description={chapter3Description} soundCloudLink={chapter3SoundCloudLink} />
      <Chapter title={chapter4Title} description={chapter4Description} soundCloudLink={chapter4SoundCloudLink} />
      <Chapter title={chapter5Title} description={chapter5Description} soundCloudLink={chapter5SoundCloudLink} />
      <Chapter title={chapter6Title} description={chapter6Description} soundCloudLink={chapter6SoundCloudLink} />
      <Chapter title={chapter7Title} description={chapter7Description} soundCloudLink={chapter7SoundCloudLink} />
    </content>
  </div>
)

export default Content

const chapterDescription = `Nulla varius aliquam tristique. Maecenas vulputate odio in cursus pretium. Integer eget pulvinar arcu, eu semper enim. Donec eget metus a velit sodales dignissim at non justo. Ut pharetra nibh eget consectetur tempor. Pellentesque accumsan erat diam, et volutpat felis porta eget. Mauris interdum iaculis libero at rhoncus.

Suspendisse vel tincidunt augue, non vulputate justo.Sed ut sagittis ligula.In vel dictum arcu.Cras at diam pellentesque, mollis mi at, facilisis tortor.Fusce ultricies.`;