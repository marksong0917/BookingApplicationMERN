 import React from 'react'
 import { fetchUtils, Admin, Resource} from 'react-admin'
 import restProvider from 'ra-data-simple-rest'
 import MerchantList from './MerchantList'
 import MerchantCreate from './MerchantCreate'
 import MerchantEdit from './MerchantEdit'
 import authProvider from './authProvider';
 
 const httpClient= (url, options={}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
}
    const { token } = JSON.parse(localStorage.getItem('auth'));
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
 }

const dataProvider = restProvider('http://localhost:3002')
function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="merchants" list={MerchantList} create = {MerchantCreate} edit = {MerchantEdit}/>
    </Admin>
  );
}

export default App;
