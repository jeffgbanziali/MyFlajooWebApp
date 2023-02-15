import React, { useState } from 'react';
import Navigation from './Navigation/Navigation';
import { useEffect } from 'react';
import axios from 'axios';
import { UidContext } from './Context/AppContext';
import { getUser } from './actions/user.action';
import { useDispatch } from 'react-redux';



function App() {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          console.log(res);
          setUid(res.data);
          localStorage.setItem('uid', res.data); // Stockage de l'ID utilisateur dans le localStorage
        })
        .catch((err) => console.log("No token"));
    };
    fetchToken();
    if (uid) dispatch(getUser(uid))
  }, [uid, dispatch]);
  return (
    <UidContext.Provider value={uid}>
      <Navigation />
    </UidContext.Provider>
  );
}


export default App;
