 import React from 'react'
 import {Admin, Resource} from 'react-admin'
 import restProvider from 'ra-data-simple-rest'
 import MerchantList from './MerchantList'
 import MerchantCreate from './MerchantCreate'
 import MerchantEdit from './MerchantEdit'
 

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3002')}>
      <Resource name="merchants" list={MerchantList} create = {MerchantCreate} edit = {MerchantEdit}/>
    </Admin>
  );
}

export default App;
