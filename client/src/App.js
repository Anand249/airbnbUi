import React, { useEffect, useState } from 'react'

function App() {
  const [userData, setUserData] = useState([{}])
  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((json) => setUserData(json))
  }, [])

  console.log('users', userData);
  return (
    <div>

      {(typeof userData.users === 'undefined') ? (<p>Loading...</p>
      ) : (
        userData.users.map((val, i) => {
          return <h1 key={i}>{val}</h1>
        }))}
    </div>
  )
}

export default App