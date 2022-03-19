import PropTypes from 'prop-types'

function Header({text}) {
  return (
    <header>
      <div className="container">
        <h2>Feedback UI</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Hello Prop'
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
}
export default Header;