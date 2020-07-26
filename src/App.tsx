import React from 'react';
import tw from 'twin.macro';
import Button from './components/Button';

const Container = tw.div`bg-white min-h-screen flex items-center justify-center bg-gray-300`;

const App: React.FC = () => {
  return (
    <Container>
      <Button>My Button</Button>
    </Container>
  );
};

export default App;
