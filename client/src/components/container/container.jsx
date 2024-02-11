import React from 'react';
import { Card } from '@radix-ui/react-card';
import { Flex, Text } from '@radix-ui/react-box';

const Container = ({ title, children }) => {
  return (
    <Card style={{ maxWidth: '400px', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px' }}>
      <Flex direction="column" gap="20px">
        <Heading>{title}</Heading>
        {children}
      </Flex>
    </Card>
  );
};

export default Container;