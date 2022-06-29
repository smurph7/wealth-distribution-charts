import * as React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

import { WealthDistributionPieChart } from './wealth-distribution-pie-chart';

function App() {
  return (
    <Flex direction="column" align="center" gap={8} p={4}>
      <Heading pt={4} textAlign="center">
        Wealth Distribution in Ireland (2020)
      </Heading>
      <Flex direction="column" align="center">
        <WealthDistributionPieChart />
      </Flex>
    </Flex>
  );
}

export default App;
