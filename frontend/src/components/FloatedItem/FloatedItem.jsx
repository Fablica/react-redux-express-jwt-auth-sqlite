import React from 'react'
import { Button, Image, Item } from 'semantic-ui-react'

const paragraph = <Image src="/assets/short-paragraph.png" />

// TODO あとで色々なおすよ
export const FloatedItem = ({ backgroundColor, imageURL, comment }) => (
  <Item.Group relaxed style={{ backgroundColor: "#" + backgroundColor, padding: '10px' }}>
    <Item>
      <Item.Image circular size='small' src={ imageURL || "/assets/user.png" } />
      <Item.Content verticalAlign='middle'>
        <Item.Header>Content A</Item.Header>
        <Item.Description>{comment || paragraph}</Item.Description>
        <Item.Extra>
          <Button floated='right'>Action</Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)
