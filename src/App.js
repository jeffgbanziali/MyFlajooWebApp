import React, { useState } from 'react';
import Navigation from './Navigation/Navigation';
import { useEffect } from 'react';
import axios from 'axios';
import { UidContext } from './Context/AppContext';



function App() {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log("No token"));
    };
    fetchToken();
  }, [uid]);
  return (
    <UidContext.Provider value={uid}>
      <Navigation />
    </UidContext.Provider>
  );
}


export default App;
