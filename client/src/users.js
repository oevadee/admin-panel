import React from "react";
import { List, Datagrid, TextField, UrlField } from 'react-admin';
import MyUrlField from './MyUrlField';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="phone" />
            {/* <UrlField source="website" /> */}
            <MyUrlField source="website" />
        </Datagrid>
    </List>
);