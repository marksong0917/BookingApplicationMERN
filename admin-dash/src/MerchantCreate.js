import React from "react";
import { Create, SimpleForm, TextInput} from 'react-admin';


const MerchantCreate = (props) => {
    return (
    <Create title='Create New Merchant Account' {...props}>
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
    </Create>
    )
}
    
    

 export default MerchantCreate;