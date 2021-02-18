// import React, { useEffect, useState, Fragment } from 'react';
// import { Container } from 'react-bootstrap';
// import Axios from 'axios';
// import { toast } from 'react-toastify';
// import { Link } from 'react-router-dom';

// const Profile = function () {
//     const [profile, setProfile] = useState([]);

//     useEffect(() => {
//       (async () => {
//         await getProfile();
//       })();
//     }, []);
  
//     const getProfile = async () => {
//       const profileResp = await Axios.get('/api/users/profile');
//       if (profileResp.status === 200) setProfile(profileResp.data);
//     };
// }