---
title: 'React refactoring: Kills of the legacy with snapshot testing'
description: You want to refactor a big React codebase but you're not sure you won't break anything? I will guide you through this!
slug: 'react-test-refactoring-snapshot'
image: '/illustrations/cowboy.jpg'
locale: en
createdDate: 2020/06/04
modifiedDate: 2020/06/04
---

<img alt="The refactoring cowboy" src="/illustrations/cowboy.jpg" class="main-image" />

Once upon a time, there was a poor lonesome cowboy developer. He had a long long code to refactor. Whenever he went to a new town, he shot the legacy code faster than his shadow.

He is a contractor, so he joins teams for that purpose, to refactor and to improve software quality.

While the cowboy developer read the legacy code, he tends to refactor everything. He write clean new code and test his code properly. But, in the end, his refactoring always stumbles upon some edge case that he was not aware of and here it comes… Despite the tests he had created, he has introduced some bugs! :fearful:.

What's wrong with this process ?

There are two major breaches in his way of refactoring:

- our cowboy is refactoring a whole system without knowing the exact behavior
- our cowboy is testing his code according to the refactored code and not according to both legacy and new code.

While the first mistake is hard to fix, we will improve the cowboy developer's process by changing the way he refactor the code.

## Testing legacy code

The first step to successfully refactor a piece of code is to add tests to the legacy code.
But tests should always refer to a behavior while keeping in mind empathy with the user.
It's impossible to do that when you don't know the behaviour!

We have to find another way to achieve that. The first tool we will use is snapshot testing using Jest.

What is a snapshot test? It's simple:

- Take a picture of a component
- Modify the code
- Take another picture after the code was changed
- Compare both pictures (before and after the refactoring). They should look exactly the same.

It means the output of the component should be the same before and after the refactoring. Let's try this with some code.

Imagine an application our cowboy developer uses for counting cows and keep some data on them. Here is the application:

The code:

```jsx
import React from 'react'
import 'bulma'
import './styles.css'

export default function App() {
  return (
    <div className="App">
      <h1>MY COWS</h1>

      <section className="cows">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://lh3.googleusercontent.com/eLxDr87icLAQlzF2LFIig62i46hm7f8sH77zIaZX6t64kFsjHlok6QMyCiReOzBcfpkPTZSv3g=w640-h400-e365" />
            </figure>
          </div>

          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">Margueritte</p>
                <p className="subtitle is-6">Field A</p>
              </div>
            </div>

            <div className="content">
              She love organize poker game in the basment of the farm.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://image.posterlounge.fr/img/products/650000/649832/649832_poster_l.jpg" />
            </figure>
          </div>

          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">Thérèse</p>
                <p className="subtitle is-6">Field A</p>
              </div>
            </div>

            <div className="content">
              During the confinement, her hair grown up significantly.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://oldmooresalmanac.com/wp-content/uploads/2017/11/cow-2896329_960_720-Copy-476x459.jpg" />
            </figure>
          </div>

          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">Evelyne</p>
                <p className="subtitle is-6">Field B</p>
              </div>
            </div>

            <div className="content">She smile to me, it's weird.</div>
          </div>
        </div>
      </section>
    </div>
  )
}
```

The application:

<iframe
     src="https://codesandbox.io/embed/github/FBerthelot/my-cows-react-refactoring-kata/tree/master/?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="my-cows-react-refactoring-kata"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

As you can see, the application is quite simple but it doesn't rely at all on React as no component has been created. So the first thing we want to do is to create a Cow component.

In order to have the best refactoring workflow possible, we need to add tests on the application first.

### Rendering the component to get a snapshot

In the React ecosystem, there are 2 major libraries to test components: Enzyme and @testing-library.
I’ve also created [my own library, component-test-utils](https://component-test-utils.berthelot.io/) earlier this year and I will write the tests with each library so you can have the one you use in an example.

Whichever test library you’re using, make sure to render all the React tree and not only one component, so please _do not use any mock while you are refactoring_.

```jsx
import App from './App'
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'component-test-utils-react'
import { render } from '@testing-library/react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

// React test render
describe('App - react-test-render - Refactoring Tests', () => {
  it('should look the same', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

// Enzyme
describe('App - enzyme - Refactoring Tests', () => {
  it('should look the same', () => {
    const component = mount(<App />)
    expect(component.html()).toMatchSnapshot()
  })
})

// component-test-utils-react
describe('App - component-test-utils-react - Refactoring Tests', () => {
  it('should look the same', () => {
    const component = shallow(<App />, { blackList: true })
    expect(component.html({ snapshot: true })).toMatchSnapshot()
  })
})

// @testing-library
describe('App - @testing-library/react - Refactoring Tests', () => {
  it('should look the same', () => {
    const { container } = render(<App />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
```

When executing the tests for the first time, Jest will create a `__snapshots__` folder with a copy of your React tree. If you make any change, Jest will verify if the new code generates the same React tree.

### Creating a Cow component

Now we can start developing a Cow component using TDD as usual.

```jsx
import React from 'react'
import { Cow } from './Cow'
import { shallow } from 'component-test-utils-react'

describe('Cow', () => {
  const cow = {
    name: 'Margueritte',
    location: 'Field A',
    description: "She's smiling at me, it's weird.",
    image: 'http://toto.toto.com',
  }
  it('should display cow name', () => {
    const component = shallow(<Cow cow={cow} />)
    expect(component.html()).toContain(cow.name)
  })

  it('should display where the cow is', () => {
    const component = shallow(<Cow cow={cow} />)
    expect(component.html()).toContain(cow.location)
  })

  it("should display the cow's description", () => {
    const component = shallow(<Cow cow={cow} />)
    expect(component.html()).toContain(cow.description)
  })

  it("should display the cow's image", () => {
    const component = shallow(<Cow cow={cow} />)
    expect(component.html()).toContain(cow.image)
  })
})
```

As you can see we test that each data sent to the component is displayed no matter the HTML tree. The Cow component is very simple, nothing special here.

```jsx
import React from 'react'

export const Cow = ({ cow }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={cow.image} />
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{cow.name}</p>
            <p className="subtitle is-6">{cow.location}</p>
          </div>
        </div>

        <div className="content">{cow.description}</div>
      </div>
    </div>
  )
}
```

### Using the Cow component

The Cow component is ready now, it's time for our cowboy to destroy the old code and use his new Cow card.

```jsx
import React from 'react'
import 'bulma'
import './styles.css'
import { Cow } from './Cow'

export default function App() {
  const cows = [
    {
      name: 'Margueritte',
      image:
        'https://lh3.googleusercontent.com/eLxDr87icLAQlzF2LFIig62i46hm7f8sH77zIaZX6t64kFsjHlok6QMyCiReOzBcfpkPTZSv3g=w640-h400-e365',
      location: 'Field A',
      description:
        'She loves organizing poker games in the basement of the farm.',
    },
    {
      name: 'Thérèse',
      image:
        'https://image.posterlounge.fr/img/products/650000/649832/649832_poster_l.jpg',
      location: 'Field A',
      description: 'During the confinement, her hair grew significantly.',
    },
    {
      name: 'Evelyne',
      image:
        'https://oldmooresalmanac.com/wp-content/uploads/2017/11/cow-2896329_960_720-Copy-476x459.jpg',
      location: 'Field B',
      description: "She's smiling at me, it's weird.",
    },
  ]

  return (
    <div className="App">
      <h1>MY COWS</h1>

      <section className="cows">
        {cows.map((cow) => {
          return <Cow cow={cow} key={cow.name} />
        })}
      </section>
    </div>
  )
}
```

When refactoring this code, we are confident because we are sure to generate the same html output thanks to our snapshot tests.

### Deleting the snapshot tests

Refactoring is done, so we don't need the snapshot tests anymore. The snapshot tests helped the cowboy to refactor code and to create a Cow component, but now refactoring is done the first test is useless. This snapshot test has no value anymore.

As DOM is something very versatile, the HTML structure will likely change. This kind of tests will bring many false negative results, lots of noise while changing some HTML/CSS. It has now become something more annoying than helpful.

Let's execute our cowboy’s favorite command `rm ./src/App.snapshot.spec.js`!

## What's next?

In this article, our cowboy developer refactors a very simple piece of code, there is no logic in this app. To handle more complexe piece of code, you can use another tools like property-based-testing to find what is the logic behind the crappy old code.

---

The code of [the repository is here](https://github.com/FBerthelot/my-cows-react-refactoring-kata) and you can navigate between steps with a branch system.
