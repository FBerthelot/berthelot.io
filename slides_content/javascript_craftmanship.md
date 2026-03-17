# Tester, c'est douter



## Tester un composants

Un composant, c'est quoi ?


### La vue

<pre class="mermaid">
graph LR
  style A fill:#4fa3ff,stroke:#333,stroke-width:2px,color:#000;
  style B fill:#42b983,stroke:#333,stroke-width:2px,color:#000;
  A[Component] --> B[View]
</pre>


### La vue

```js
it('should render hello world', () => {
  const component = render(Component)

  expect(component.html()).toBe('<h1>Hello World</h1>')
})
```


### Les props

<pre class="mermaid">
graph LR
  style A fill:#4fa3ff,stroke:#333,stroke-width:2px,color:#000;
  style B fill:#42b983,stroke:#333,stroke-width:2px,color:#000;
  style Props fill:#f39c12,stroke:#333,stroke-width:2px,color:#000;
  Props --> A
  A[Component] --> B[View]
</pre>


### Les props

```js
it('should render "hello world"', () => {
  const component = render(Component)
  // render(<Component />)
  expect(component.html().getElementByRole('heading')).toBe('Hello World')
})

it('should render "hello florent"', () => {
  const component = render(Component, { props: { name: 'florent' } })
  // render(<Component name="florent" />)
  expect(component.html().getElementByRole('heading')).toBe('Hello florent')
})
```


### Les interactions

<pre class="mermaid">
graph LR
  style Component fill:#4fa3ff,stroke:#333,stroke-width:2px,color:#000;
  style View fill:#42b983,stroke:#333,stroke-width:2px,color:#000;
  style Props fill:#f39c12,stroke:#333,stroke-width:2px,color:#000;
  style Event fill:#e74c3c,stroke:#333,stroke-width:2px,color:#000;
  Props --> Component
  Component --> View
  View --> Component
  Component --> Event
</pre>


## Les interactions

```jsx
it('should emit onShare when click on share button', () => {
  const spy = vi.fn()
  const component = render(Component, { events: { onShare: spy } })
  // render(<Component onShare={spy} />)

  component.getElementByRole('button').dispatchEvent('click')

  expect(spy).toHaveBeenCalled()
})
```


### Stateful

<pre class="mermaid">
graph LR
  style Component fill:#4fa3ff,stroke:#333,stroke-width:2px,color:#000;
  style View fill:#42b983,stroke:#333,stroke-width:2px,color:#000;
  style Props fill:#f39c12,stroke:#333,stroke-width:2px,color:#000;
  Props --> Component
  Component --> View
  View --> Component
</pre>


### Stateful

```js
describe('share button', () => {
  it('should not highlight the shared button when content never shared', () => {
    const component = render(Component)
    // render(<Component />)

    expect(component.html().querySelector('button').props.class).not.toContain(
      'shared',
    )
  })

  it('should highlight the shared button when share the content', () => {
    const component = render(Component)
    // render(<Component />)

    component.querySelector('button').dispatchEvent('click')

    expect(component.html().querySelector('button').props.class).toContain(
      'shared',
    )
  })
})
```


### Restez vagues

```js
it('should display the captain\'s age', () => {
  render(<MyComponent />)

  expect(screen.getRole('heading'))
    .toHaveTextContent('21 ans et toutes ses dents !')
})
```

```js
it('should display the captain\'s age', () => {
  render(<MyComponent />)

  expect(screen.getByText('21 ans et toutes ses dents !'))
    .toBeVisible()
})
```


### Chargement...

Se mettre à la place d'un utilisateur qui voit TOUT en slow motion
```js
it('should display the captain\'s age', async () => {
  render(<MyComponent />)

  await waitForElementToBeRemoved(() => screen.queryByText('loading...'));

  expect(screen.getByText('21 ans et toutes ses dents !')).toBeVisible();
})
```



## Tester des composants, en pratique


Plusieurs outils existent :
- Testing Library
- Vue Test Utils
- Angular Testing utilities
- ...


### Testing library

<iframe src="https://testing-library.com/docs/react-testing-library/intro/" width="100%" height="400px" style="background: white;" frameborder="0"></iframe>


### Live coding

- [React](https://stackblitz.com/edit/vitejs-vite-ss8jjkow?file=src%2FLikeButton%2FLikeButton.jsx)
- [Vue](#)
- [Angular](#)



## Exercice 6

Testez au moins un composant qui fait une requête HTTP vers la pokéAPI
