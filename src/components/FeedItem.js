import * as React from 'react';
import { Item, Image } from 'semantic-ui-react';

export default ({ header }) => {
  return (
    <Item>
      <Item.Image
        size="tiny"
        src="https://react.semantic-ui.com/assets/images/wireframe/image.png"
      />

      <Item.Content>
        <Item.Header as="a">{header}</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
          <Image src="https://react.semantic-ui.com/assets/images/wireframe/short-paragraph.png" />
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>
  );
};
