const { axe, toHaveNoViolations } = require('jest-axe')

expect.extend(toHaveNoViolations)

const React = require('react')
const ReactDOMServer = require('react-dom/server')

it('should demonstrate this matcher`s usage with react', async () => {
  const html = ReactDOMServer.renderToString(
    <img src='#' />
  )

  const results = await axe(html)

  expect(results).toHaveNoViolations()
})
