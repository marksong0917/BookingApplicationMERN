import React from "react";
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';


const MerchantList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="businessName" />
            <TextField source="phone" />
            <TextField source="email" />
            <TextField source="status" />
            <EditButton basePath="/merchants" />
            <DeleteButton basePath="/merchants" />
        </Datagrid>
    </List>
}
    
    

 export default MerchantList;