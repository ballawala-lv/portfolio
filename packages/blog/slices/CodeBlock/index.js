import React from 'react';
import { RichText,  } from 'prismic-reactjs';
import { Container } from '@mui/material';
const CodeBlock = ({ slice }) => (
  <Container>
    <span className="title">
      {
        slice.primary.title ?
        <RichText render={slice.primary.title} Component='Heading' />
        : <h2>Template slice, update me!</h2>
      }
    </span>


    { slice?.items?.map((item, i) => <RichText render={item.code}  />) }

  </Container>
);

CodeBlock.displayName = CodeBlock

export default CodeBlock;
