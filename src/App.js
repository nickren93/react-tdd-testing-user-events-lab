import React, { useState } from "react";


function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [sportsIsChecked, setSportsIsChecked] = useState(false)
  const [musicsIsChecked, setMusicsIsChecked] = useState(false)
  const [moviesIsChecked, setMoviesIsChecked] = useState(false)
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  function updateName(e){
    setName(e.target.value)
  }

  function updateEmail(e){
    setEmail(e.target.value)
  }

  const toggleSports = (e) => setSportsIsChecked(e.target.checked)

  const toggleMusics = (e) => setMusicsIsChecked(e.target.checked)

  const toggleMovies = (e) => setMoviesIsChecked(e.target.checked)

  const submitForm = (e) => {
    e.preventDefault()
    setFormIsSubmitted(true)
  }

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <form onSubmit={submitForm}>
        <div>
          <h3>Name</h3>
          <label htmlFor="name">Enter your name: </label>
          <input
            type="text"
            value={name}
            id="name"
            placeholder="name"
            onChange={updateName}
          />
        </div>
        <div>
          <h3>Email Address</h3>
          <label htmlFor="email address">Enter your email address: </label>
          <input
            type="text"
            value={email}
            id="email address"
            placeholder="email address"
            onChange={updateEmail}
          />
        </div>
        <div>
          <h3>Areas of interest</h3>
          <input
            type="checkbox"
            id="sports"
            checked={sportsIsChecked}
            aria-checked={sportsIsChecked}
            onChange={toggleSports}
          />
          <label htmlFor="sports">sports</label>

          <input
            type="checkbox"
            id="musics"
            checked={musicsIsChecked}
            aria-checked={musicsIsChecked}
            onChange={toggleMusics}
          />
          <label htmlFor="musics">musics</label>

          <input
            type="checkbox"
            id="movies"
            checked={moviesIsChecked}
            aria-checked={moviesIsChecked}
            onChange={toggleMovies}
          />
          <label htmlFor="movies">movies</label>
        </div>
        <button type="submit">signup to newsletter!</button>
      </form>
      { formIsSubmitted ? 
        <h2> 
          Thanks for suscribing!
          <br></br>
          Your name: {name}
          <br></br>
          your email: {email}
          <br></br>
          Your interest: 
          {sportsIsChecked? "sports " : null}
          {musicsIsChecked ? "musics " : null}
          {moviesIsChecked ? "movies " : null}
        </h2> 
        : 
        null 
      }

    </main>
  );
}

export default App;
