import * as React from 'react';
import { ItemGroup } from 'semantic-ui-react';
import FeedItem from './FeedItem';

export default ({ itemNo = 5, header }) => {
  const items = new Array(itemNo);
  items.fill(null);

  return (
    <ItemGroup>
      {items.map((it, index) => {
        return <FeedItem key={index} header={header} />;
      })}
    </ItemGroup>
  );
};
