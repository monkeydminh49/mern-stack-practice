import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const apiURL = `${process.env.REACT_APP_API_URL}/login`;

  async function loginUser(e) {
    e.preventDefault();

    const res = await fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password
      })
    })

    const data = await res.json();

    if (data.user) {
      alert("Login successful")

    } else {
      alert("Login failed. Please check your username and password")
    }

    console.log(data);
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          type='email'
        />
        <br />

        <input
          value={password}
          onChange={(e) => setPassowrd(e.target.value)}
          placeholder='Password'
          type='password'
        />
        <br />

        <button type='submit'>Sign in</button>
        <button type='button' onClick={() => window.location.href = "/register"}>Register</button>
      </form>
    </div>
  )
}

export default Login;
