/* import Vue from 'vue'
import {
  Card,
  CardTitle,
  CardMeta,
  CardVideo,
  CardLink,
  CardSecondary,
} from './'
import { Typography } from '../typography'
import { text, object } from '@storybook/addon-knobs'

export default {
  title: 'Card',
}

export const blogArticle = () => ({
  components: { Card, CardTitle, CardMeta, Typography },
  props: {
    title: {
      default: text('title', 'How to write a storybook component in Vue.js ?'),
    },
    description: {
      default: text(
        'description',
        'Discover how a tool like storybook can radicaly change our way to design and write our component in Vue.js'
      ),
    },
    metaInfo: {
      default: text('metaInfo', 'April 2020'),
    },
  },
  template: `
  <div style="margin: 5rem;display: flex;flex-direction: column; height: 100vh; width: 50%;margin-left: 25%;justify-content: center;align-item: center;">
    <Card
      :metaInfo="metaInfo"
      link="javascript:void(0)"
    >
      <CardTitle>{{ title }}</CardTitle>
      <Typography>{{ description }}</Typography>
      <CardMeta>{{ metaInfo }}</CardMeta>
    </card>
  </div>
  `,
})

export const talkCard = () => ({
  components: {
    Card,
    CardTitle,
    CardMeta,
    CardSecondary,
    CardVideo,
    Typography,
    CardLink,
  },
  props: {
    title: {
      default: text('title', 'Designer, Développeur, créons la différence !'),
    },
    description: {
      default: text(
        'description',
        `
        On utilise tous une bibliothèque de composants comme Material, Bootstrap & co. C’est très pratique car cela nous fournit un Design System clé en main. Seulement, le projet manque de personnalité et ne se différencie pas.
        <br/>
        <br/>
        Avec notre équipe composée de designers (Cécile) et de développeurs (Florent), comment pouvons-nous donner une identité à nos projets ? Y a-t-il des méthodes que nous pouvons appliquer pour que la production de l’interface soit différenciante, cohérente et agréable ?
        <br/>
        <br/>
        Nous vous proposons donc de définir quelles sont les différentes méthodes et techniques pour y arriver. Nous débuterons par explorer et établir notre identité pour ensuite mettre en place nos éléments fonctionnels et arriver rapidement à un Design System adapté en respectant les normes de l’Atomic Design. Nous vous proposons de partir d’un projet qui a choisi la facilité, où la communication est inexistante dans l’équipe. Nous améliorerons notre manière de travailler de façon itérative pour arriver à construire notre propre Design System au fil des explications théoriques.
        `
      )
        .replace(/&gt;/g, '>')
        .replace(/&lt;/g, '<'),
    },
    metaInfo: {
      default: text('metaInfo', 'Paris Web - Octobre 2019'),
    },
    video: {
      default: text('video', 'https://player.vimeo.com/video/381753514'),
    },
  },
  template: `
    <div style="margin: 15rem 25%; display: flex;flex-direction: column; height: 100vh; width: 50%;justify-content: center;align-item: center;">
      <Card>
        <CardTitle>{{ title }}</CardTitle>
        <Typography><span v-html="description"></span></Typography>
        <CardMeta>{{ metaInfo }}</CardMeta>

        <CardVideo :video="video" />

        <CardLink href="javascript:void(0)">Lien vers les slides</CardLink>

        <CardSecondary>
          <Typography variant="title--extra-small">L'ensemble des versions</Typography>
          <ul>
            <Typography component="li">
              Devoxx 2019:
              <Typography component="a" href="">Video</Typography>
              <Typography component="a" href="">Slides</Typography>
              - Janvier 2019
            </Typography>
            <Typography component="li">
              Devfest Lille 2019:
              <Typography component="a" href="">Video</Typography>
              <Typography component="a" href="">Slides</Typography>
              - Octobre 2019
            </Typography>
            <Typography component="li">
              Paris Web 2019:
              <Typography component="a" href="">Video</Typography>
              <Typography component="a" href="">Slides</Typography>
              - septembre 2019
            </Typography>
          </ul>
        </CardSecondary>
      </card>
    </div>
  `,
})
*/
