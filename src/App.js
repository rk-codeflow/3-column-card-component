import Card from './components/Card'
import data from './data'

import { Container } from './components/styled/card.style'


function App() {
  const carDetails = data.map((details, i) => {
    return <Card
      key = { details.id }
      imgUrl = { details.imgUrl }
      title = { details.title }
      description = { details.description }
      count={ i+ 1 }
    />
  })
  return (
    <div className="App">
      <Container>
          { carDetails }
      </Container>
    </div>
  );
}

export default App;
