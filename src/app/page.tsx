import React from 'react';
import { Button, Htag, P, Rating, Tag } from './components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost">Кнопка</Button>
      <P size="s">Small</P>
      <P size="m">Medium</P>
      <P size="l">Large</P>
      <Tag size="s" color="ghost" href="sdfsfd">
        143
      </Tag>
      <Tag size="m" color="red">
        asda
      </Tag>
      <Rating rating={3} />
    </>
  );
}
