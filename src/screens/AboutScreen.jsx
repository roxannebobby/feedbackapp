import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
  <Card>
  <h1>About this App</h1>
  <p>This is a React application that was built for example purposes.</p>
  <p>Version: 1.0.0</p>
  <Link to="/">Back to home</Link>
  </Card>
 
  )
}

export default AboutPage;