<template>
  <div>
    <header class="header">
      <div class="leftPanel">
        <h1>{{ headerData.name }}</h1>
        <h2>{{ headerData.title }}</h2>
      </div>

      <ul class="personal">
        <li>
          <address>{{ headerData.address.replace(/\n/gm, "<br />") }}</address>
        </li>
        <li>{{ headerData.phone }}</li>
      </ul>

      <ul class="social">
        <li>
          <img
            src="/public/assets/cv/website.svg"
            class="socialImg"
            alt="website"
          />
          {{ headerData.website }}
        </li>
        <li>
          <img
            src="/public/assets/cv/github.png"
            class="socialImg"
            alt="github"
          />
          {{ headerData.github }}
        </li>
        <li>
          <img src="/public/assets/cv/mail.svg" class="socialImg" alt="mail" />
          {{ headerData.mail }}
        </li>
        <li>
          <img
            src="/public/assets/cv/twitter.svg"
            class="socialImg"
            alt="twitter"
          />
          {{ headerData.twitter }}
        </li>
      </ul>
    </header>
    <main class="main">
      <section class="skillsContainer">
        Je suis passionné du Web et des technologies qui gravitent autour.
        J'aime le W3C, le TC39 (quand il ne smoosh pas devant moi), le WhatWG,
        les frameworks JS (React, Vue.js, Node.js, Angular, ...) et la vanille.
      </section>

      <section class="experiences">
        <h2 class="title">Experiences</h2>

        <article
          v-for="experience of experiences"
          :key="experience.name + experience.duration"
          class="experience"
        >
          <div class="experienceHeader">
            <h3>{{ experience.name }}</h3>
            <p class="experienceDuration">{{ experience.duration }}</p>
          </div>

          <p>{{ experience.description.replace(/\n/gm, '<br />') }}</p>

          <div>
            <h4>Projects and missions</h4>
            <ul class="projects">
              <li v-for="project of experience.projects" :key="project.name">
                <div class="projectHeader">
                  <h5>{{ project.name }}</h5>
                  <p>{{ project.duration }}</p>
                </div>
                {{project?.description?.replace(/\n/gm, '<br />') }}
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section class="schools">
        <h2 class="title">Diplomas</h2>
        <ul>
          <li>2014 - EFREI - Engineering degree in computing</li>
          <li>
            2011 - UCTI Asia Pacific University College of Technology, Kuala
            Lumpur, Malaisia.
          </li>
          <li>
            2009 - High School Diploma (French baccalauréat) in advanced science
            (obtained with honours)
          </li>
        </ul>
      </section>

      <section class="talks">
        <h2 class="title">Talks in conferences</h2>

        <ul>
          <li
            v-for="{ name, description, givenIn } of talks"
            :key="name"
            class="container"
          >
            <h3 class="title">{{ name }}</h3>
            <p class="description">{{ description }}</p>
            <p class="givenIn">Given at: {{ givenIn.join(', ') }}</p>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script setup lang="js">
const headerData = {
  name: 'Florent Berthelot',
  title: 'Web Developer',
  address: `17 rue Paul Lelong
    75002 Paris
    France`,
  phone: '+33 6 50 99 96 18',
  website: 'berthelot.io',
  twitter: 'berthel350',
  github: 'FBerthelot',
  mail: 'florent@berthelot.io',
}

const talks = [
  {
    name: 'Designers, Developers: making the difference (French talk)',
    description:
      'Explanation of what is a Design System and how we can all create our own differenciating Design System to build a better web. Talk given with Cécile Freyd-Foucault (designer) in 2019.',
    givenIn: [
      'Devoxx France',
      'Paris Web',
      'Riviera Dev',
      'Bdx.io',
      'Best Of Web',
      'Devfest Lille',
    ],
  },
  {
    name: 'React Fiber (French talk)',
    description:
      'Presentation of what React Fiber is and what are the current and future features of React 16. Talk created with @swiip and Marvin Frachet in 2019.',
    givenIn: ['Riviera Dev', 'VoxxedDay Luxembourg'],
  },
  {
    name: 'WebVR (French talk)',
    description: 'Comparison between ReactVR and A-Frame. Given in 2018.',
    givenIn: ['Devoxx France'],
  },
  {
    name: 'Web audio (French talk)',
    description:
      'Building a guitar distortion pedal with web technologies. Given with @Okazari in 2018',
    givenIn: ['Riviera Dev'],
  },
  {
    name: 'All inclusive packages (French talk)',
    description: 'Comparison between Bower, Yarn and NPM. Given in 2017.',
    givenIn: ['Snowcamp.io'],
  },
]

const experiences = [
  {
    name: 'WeFacto',
    duration: '6 months',
    description: `WeFacto is the company I've created.
    For now, it's an opportunity for me to experience being a freelance and investing time in releasing projects I've thought of.`,
    projects: [
      {
        name: 'Jahia',
        duration: '1 year',
        description: `Development of the Headless CMS part of the product.
        React, GraphQL, Apollo, Webpack, Jest, Enzyme, component-test-utils, Micro-frontend.`,
      },
      {
        name: 'ESGI',
        duration: 'Engineering school - since January 2019',
        description: `JavaScript, TypeScript and Angular teacher for final year students.
        Google's framework was not my choice.`,
      },
    ],
  },
  {
    name: 'Zenika',
    duration: '4 years and 3 months',
    description: `Initially recruited as a consultant for Zenika, I evolved into also becoming a trainer.
    I finally obtained many simultaneous roles:

    - Zenika core trainer
    - Co creator of AYA Agency
    - Co creator of a startup within Zenika for a sport app.

    As one of Zenika's core trainers, I was mainly giving courses. My remaing time was used for conducting audits, accomplishing short term missions, taking care of interns, managing Paris AYA team, as well as writing new courses.

    As a co creator of AYA Agency, I managed consultants and all the JavaScript interns of Paris, answering tenders and finding architecture solutions that fit the client's needs.

    In addition to these activities, I tried to be as active as I could be in the company. I managed the web tribe (knowledge sharing around web), communicated through intern social media, orginized afterworks, ...`,
    projects: [
      {
        name: 'Jahia',
        duration: '6 months',
      },
      {
        name: 'Sacem',
        duration: '',
        description:
          'Set up Angular development best practices for a new project and train the Zenika developer team involved.',
      },
      {
        name: 'Accor Hotel',
        duration: '',
        description: `Set up Vue.js and Nuxt.js best practices for Accor Hotel reservation tunnel.
        I also trained other teams to start developing in Vue.js.`,
      },
      {
        name: 'Fatec',
        duration: '',
        description: `JavaScript expertise to start rebuilding the company's whole information system.
      Vue.js, Nuxt.js.`,
      },
      {
        name: 'Great Place To Work',
        duration: '',
        description: `Initiating the project as lead developer fullstack.
      NodeJS, GraphQL, React, Redux.`,
      },
      {
        name: 'DirectSkills',
        duration: '',
        description: 'React expertise.',
      },
      {
        name: 'Rue du Commerce',
        duration: '',
        description: 'Auditing and setting up React best practices.',
      },
      {
        name: "Conseil général du Val d'Oise",
        duration: '(French government)',
        description: 'JavaScript advisor.',
      },
      {
        name: 'TF1',
        duration: '(French television)',
        description: `JavaScript developer, micro-services Node.JS, Docker.
      I evolved to become referent on LCI channel's whole platform.`,
      },
      {
        name: 'BNP',
        duration: '(French bank)',
        description: 'JavaScript and API Advisor.',
      },
      {
        name: 'Infopro',
        duration: '',
        description:
          'JavaScript Developer. Angular.js, I introduced selenium tests and unit tests',
      },
      {
        name: 'AYA <code & design>',
        duration: '',
        description:
          'Development of the corporate website in Nuxt.js, Prismic, ReactVR, ...',
      },
      {
        name: 'Audits',
        duration: '',
        description: `- Angular.js for Harmonie Mutuelle
      - React for Rue Du Commerce
      - React for Groupama
      - Angular.js for Ocea Smart Building
      - React for Jahia CMS
      - Angular for Boursorama
      - Angular for RitmX`,
      },
    ],
  },
  {
    name: 'Viseo',
    duration: '2014 - 1 year',
    description:
      'JavaScript consultant, I mainly worked for Sacem in React.js and D3.js.',
  },
  {
    name: 'Novedia',
    duration: '2014 - 7 months',
    description: `End of studies internship on an open-source project about websocket in Node.js.
    Many Proofs of Concepts developed (Node.js, Angular.js, mongoDB, Grunt, Bower, ...).`,
  },
  {
    name: 'COFELY ENDEL - GDF SUEZ GROUP',
    duration: '4 months',
    description: 'C# developer internship.',
  },
]
</script>

<style scoped>
.header {
  font-family: 'Barlow', sans-serif;
  margin: 1rem;
  padding: 1rem;
  border-bottom: 0.2rem solid var(--color-secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.header .leftPanel {
  height: 6rem;
}
.header h1 {
  font-size: 1.7rem;
  font-weight: 800;
}

.header .personal {
  font-size: 1rem;
  line-height: 1.2rem;
}

.header .personal li {
  margin: 0.4rem 0;
}

.header .social {
  width: 100%;
  padding-top: 1rem;
  display: flex;
  justify-content: space-around;
}

.header .social li {
  display: flex;
}

.socialImg {
  height: 1rem;
  margin-right: 0.3rem;
}

.main {
  font-family: 'Barlow', sans-serif;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2.5rem;
  color: var(--color-secondary);
}

.skillsContainer {
  padding: 0 2rem 1rem 2rem;
}

.experiences {
  padding: 1rem 2rem;
}

.schools {
  margin: 0 2rem;
}

.talks {
  margin: 1rem 2rem 3rem 2rem;
}

.container {
  margin: 0 1rem 1rem 1rem;
}

.title {
  font-size: 1.1rem;
  line-height: 2rem;
  font-weight: bold;
}

.description {
  margin-bottom: 0.5rem;
}

.givenIn {
}

.experience {
  padding: 0.5 1rem;
  margin-bottom: 2rem;
}

.experience:last-child {
  margin-bottom: 1rem;
}

.experience .experienceHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.experience h3 {
  padding: 0.5rem 0;
  font-size: 1.4rem;
  font-weight: bold;
}
.experience .experienceDuration {
  font-style: italic;
  font-weight: 400;
}

.experience h4 {
  padding: 0.7rem 0 0 1rem;
  font-size: 1.3rem;
  font-weight: 500;
  font-style: italic;
}

.projects {
  border-left: 2px solid var(--color-secondary);
  margin-left: 1rem;
  padding-left: 1rem;
}
.projects li {
  margin: 0.5rem 0 1rem 0;
}
.projectHeader {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
}
.projectHeader h5 {
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 600;
  margin-right: 1rem;
}
.projectHeader p {
  font-style: italic;
}
</style>
