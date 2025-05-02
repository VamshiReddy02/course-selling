import Banner from "./components/Banner"
import Cards from "./components/Cards"
import Hero from "./components/Hero"
import LearningPath from "./components/LearningPath"
import Navbar from "./components/Navbar"
import Services from "./components/Services"

function App() {

  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <Cards />
      <LearningPath />
    </main>
  )
}

export default App
