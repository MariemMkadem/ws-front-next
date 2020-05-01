import { storiesOf } from '@storybook/react';
import { Example } from 'components/_helpers';

import Paragraph from './index';

storiesOf('Paragraph', module).add('default', () => (
  <Example title='Paragraph' style={{ width: '300px' }}>
    <Paragraph>
      <Paragraph.ParagraphMain>
        Perdre son indépendance, c'est compliqué moralement{' '}
      </Paragraph.ParagraphMain>
      comme financièrement. Avec Edéo, vous serez accompagné pour faire{' '}
      <a href='/xqxxx'>oyezrr.fr</a>face à ces conséquences et éviter d'avoir recours à vos proches.
    </Paragraph>

    <Paragraph style={{ width: '300px' }}>
      La personne âgée ou ses proches peuvent opter pour <a href='/'>oyez.fr</a> un accueil en
      établissement pour des raisons de santé (perte d’autonomie, maladie d’Alzheimer) ou dans le
      cadre d’un projet de vie : rompre avec la solitude, changer d’environnement…
    </Paragraph>
  </Example>
));
