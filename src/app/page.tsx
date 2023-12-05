//1. import area

//2. defination area
// When variables define outside of function defination is called global variables
const name = 'Gulab' // this is global variale
function Home() {
  // When define variales inside of function defination is called local variables
  // const company = 'OKLABS' // this is local variable
  return (
    <>
      <main>
        <h1>Hello world {name}</h1>
      </main>
    </>
  )
}

//3. export area
export default Home
