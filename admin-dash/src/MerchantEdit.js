import React from "react";
import { Edit, SimpleForm, TextInput} from 'react-admin';


const MerchantEdit = (props) => {
    return (
    <Edit title='Edit New Merchant Account' {...props}>
        <SimpleForm>
            <TextInput source="businessName" />
            <TextInput source="address" />
            <TextInput source="city" />
            <TextInput source="postalCode" />
            <TextInput source="province" />
            <TextInput source="phone" />
            <TextInput source="email" />
            <TextInput source="status" />
            <TextInput source="ownerFirst" />
            <TextInput source="ownerLast" />
            <TextInput source="ownerEmail" />
        </SimpleForm>
    </Edit>
    )
}
    
    

 export default MerchantEdit;