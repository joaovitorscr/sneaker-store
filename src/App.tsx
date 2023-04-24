import Header from './containers/Header'
import Hero from './containers/Hero'

function App() {
  return (
    <div className="App bg-orange-100">
      <div className="h-screen flex">
        <div className="w-11/12 ms-48">
          <Header />
          <Hero />
        </div>
      </div>
    </div>
  )
}

export default App
