import { useState } from "react"

import HomeHeader from "./HomeHeader.jsx"
import Content from "./Content.jsx"
import Footer from "./Footer.jsx"

function Home() {
  
  const [searchTerm, setSearchTerm] = useState("")

  return(
    <>
      <HomeHeader searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <Content searchTerm={searchTerm} />
      <Footer/>
    </>
  );
}

export default Home;