import React from 'react';
import { Card, Image, Popup } from 'semantic-ui-react';

type AvatarProps = {
    name: string,
    source: string,
};

export default function Avatar({name, source}: AvatarProps) {
    return (
        <Popup
            content={name}
            trigger={
                <Image
                    floated="right"
                    avatar
                    circular
                    src={source}
                    ></Image>
            }></Popup>
    );
}