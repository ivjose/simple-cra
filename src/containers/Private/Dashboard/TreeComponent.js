/* eslint-disable react/display-name */
import React from 'react';
import { Treebeard } from 'react-treebeard';

const initialData = {
  name: 'root',
  toggled: true,
  children: [
    {
      name: 'parent',
      children: [{ name: 'child1' }, { name: 'child2' }],
    },
    {
      name: 'parent',
      children: [
        {
          name: 'nested parent',
          children: [{ name: 'nested child 1' }, { name: 'nested child 2' }],
        },
      ],
    },
  ],
};

const TreeComponent = () => {
  const [data, setData] = React.useState(initialData);
  const [cursor, setCursor] = React.useState(false);

  const decorators = {
    Toggle: props => {
      return <div style={{ display: 'inline' }}>+</div>;
    },
    Container: props => {
      console.log();
      return (
        <div onClick={props.onClick}>
          <props.decorators.Toggle />
          {props.node.name}
        </div>
      );
    },
  };

  const onToggle = (node, toggled) => {
    if (cursor) {
      cursor.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    setCursor(node);
    setData(Object.assign({}, data));
  };

  return (
    <div style={{ height: 400 }}>
      <Treebeard data={data} onToggle={onToggle} decorators={decorators} />
      Hello world
    </div>
  );
};

export default TreeComponent;
