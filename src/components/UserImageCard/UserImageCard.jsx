import React from "react";
import { Card, Image } from "semantic-ui-react";
import {Link} from 'react-router-dom';

export const UserImageCard = ({ users }) => (
  <Card.Group itemsPerRow={4}>
    {users.items &&
      users.items.map((user, index) => (
        <Card key={user.id} as={Link} to={`/profile/${user.id}`}>
          <Image src={user.imageURL || "/assets/user.png"} />
          <Card.Content>
            <Card.Header>
              {user.firstName} {user.lastName}
            </Card.Header>
            <Card.Meta>
              {user.age}
              years old
            </Card.Meta>
            <Card.Description>{user.comment}</Card.Description>
          </Card.Content>
        </Card>
      ))}
  </Card.Group>
);
