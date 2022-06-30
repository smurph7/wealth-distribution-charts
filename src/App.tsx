import * as React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

import { WealthDistributionPieChart } from './wealth-distribution-pie-chart';
import { WealthDistributionByAge } from './wealth-distribution-by-age';

function App() {
  return (
    <Flex direction="column" align="center" gap={8} p={4}>
      <Heading pt={4} textAlign="center">
        Wealth Distribution in Ireland (2020)
      </Heading>
      <Flex direction="column" gap={8}>
        <WealthDistributionPieChart />
        <WealthDistributionByAge />
      </Flex>
    </Flex>
  );
}

export default App;
