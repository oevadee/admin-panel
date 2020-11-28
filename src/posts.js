import React from "react";
import { List, Datagrid, TextField, ReferenceField, ImageField, EditButton } from 'react-admin';

export const PostList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users">
                <TextField source="id" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <ImageField label="Image" source="https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/s150x150/121408914_822708811804216_3787234011134207453_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_ohc=bRGicQfoQMwAX_f_JKB&tp=1&oh=67056e14f789b38294be980b5b8b2f07&oe=5FED64F6" />
            <EditButton />
        </Datagrid>
    </List>
);