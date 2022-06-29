import * as React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

import { WealthDistributionPieChart } from './wealth-distribution-pie-chart';

function App() {
  return (
    <Flex direction="column" align="center">
      <Heading pt={4}>Wealth Distribution in Ireland</Heading>
      <WealthDistributionPieChart />
    </Flex>
  );
}

export default App;
