const React = require('react')
const ReactDOMServer = require('react-dom/server')

module.exports = hash => ReactDOMServer.renderToStaticMarkup(<Index hash={hash} />)

function Index({hash}) {
  return (
    <html lang="en" data-framework="javascript">
      <head>
        <meta charSet="utf-8" />
        <title>VanillaJS • TodoMVC</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <style>{'.hide {display: none;}'}</style>
      </head>
      <body className="hide">
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
            />
          </header>
          <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list"></ul>
          </section>
          <footer className="footer">
            <span className="todo-count"></span>
            <ul className="filters">
              <li>
                <a href="#/" className="selected">All</a>
              </li>
              <li>
                <a href="#/active">Active</a>
              </li>
              <li>
                <a href="#/completed">Completed</a>
              </li>
            </ul>
            <button className="clear-completed">Clear completed</button>
          </footer>
        </section>
        <footer className="info">
          <p>Double-click to edit a todo</p>
          <p>Created by <a href="http://twitter.com/oscargodson">Oscar Godson</a></p>
          <p>Refactored by <a href="https://github.com/cburgmer">Christoph Burgmer</a></p>
          <p>Ported to ES6 by <a href="https://twitter.com/kentcdodds">Kent C. Dodds</a></p>
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
        <script src={`/bundle.${hash}.js`}></script>
      </body>
    </html>
  )
}
