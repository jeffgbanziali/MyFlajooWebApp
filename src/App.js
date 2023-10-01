import React, { useState } from 'react';
import Navigation from './Navigation/Navigation';
import { useEffect } from 'react';
import axios from 'axios';
import { UidContext } from './Context/AppContext';
import { getUser } from './actions/user.action';
import { useDispatch } from 'react-redux';



const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const res = await axios({
          method: "get",
          url: "http://192.168.0.14:4000/jwtid",
          withCredentials: true,
        });
        const newUid = res.data;
        setUid(newUid);
        console.log(newUid);
        AsyncStorage.setItem('uid', newUid);
      } catch (error) {
        console.log("Error fetching token:", error);
      }
    };

    // Ne fetch le token que si uid est null
    if (!uid) {
      fetchToken();
    }
    // Dispatch seulement si uid est présent
    if (uid) {
      dispatch(getUser(uid));
    }
    console.log("uid", uid);
  }, [uid, dispatch]);


  return (
    <UidContext.Provider value={uid}>
      <Navigation />
    </UidContext.Provider>
  );
}


export default App;
