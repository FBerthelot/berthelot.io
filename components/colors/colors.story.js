export default {
  title: 'colors',
}

const colorSquareStyle = (color) => `
  border: 1px solid black;
  width: 3rem;
  height: 3rem;
  background-color: var(--color-${color});
`

const colorSquare = (color) => `
  <div><div style="${colorSquareStyle(color)}"></div>${color}</div>
`

export const all = () => `
  <div style="display: flex;justify-content: space-around;text-align: center;color: var(--color-white);padding: 3rem;">
    ${colorSquare('white')}
    ${colorSquare('light')}
    ${colorSquare('bright')}
    ${colorSquare('medium')}
    ${colorSquare('dark')}
    ${colorSquare('black')}
  </div>
`
