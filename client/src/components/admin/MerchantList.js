import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, DeleteButton } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
export const PostIcon = BookIcon;

const MerchantList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="businessName" />
            <TextField source="phone" />
            <TextField source="email" />
            <TextField source="status" />
            <EditButton basePath="/merchant" />
            <DeleteButton basePath="/merchant" />
        </Datagrid>
    </List>
}
    
    

export default MerchantList