// example.tsx
import React from 'react';
import MyTypography from '../mytypography';

const Example: React.FC = () => (
  <>
    <MyTypography text="Hello, World!" variant="h1" color="#3498db" weight={700} align="center" />
    <MyTypography text="This is a body text." variant="body" />
    <MyTypography text="Caption text here" variant="caption" color="#666" />
  </>
);

export default Example;
