import {
  ResponsiveContainer,
  Tooltip,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis
} from 'recharts';
import { Flex, Text, Link, Stack } from '@chakra-ui/react';

const data = [
  {
    name: '<35',
    shareOfNetWorth: 3.4,
    estimatedPopulationThousand: 2250.9,
    estimatedProportionOfPopulation: 45.22
  },
  {
    name: '35-44',
    shareOfNetWorth: 12.8,
    estimatedPopulationThousand: 780.2,
    estimatedProportionOfPopulation: 15.67
  },
  {
    name: '44-54',
    shareOfNetWorth: 23.3,
    estimatedPopulationThousand: 674.5,
    estimatedProportionOfPopulation: 13.55
  },
  {
    name: '55-64',
    shareOfNetWorth: 27.7,
    estimatedPopulationThousand: 551.6,
    estimatedProportionOfPopulation: 11.08
  },
  {
    name: '>65',
    shareOfNetWorth: 32.8,
    estimatedPopulationThousand: 720.1,
    estimatedProportionOfPopulation: 14.47
  }
];

export const WealthDistributionByAge = (): JSX.Element => {
  return (
    <Flex direction="column" p={4}>
      <Text fontSize={['sm', 'sm', 'md']}>
        Wealth Distribution in Ireland by Age (2020)
      </Text>
      <Flex
        direction="column"
        height={[500, 500, 600]}
        width={[350, 380, 600, 800, 1000]}
        ml={-3}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" label="Age" height={70} />
            <YAxis label="%" width={70} />
            <Tooltip />
            <Legend align="left" />
            <Bar
              dataKey="shareOfNetWorth"
              fill="#8884d8"
              name="Share of net worth (%)"
              unit="%"
            />
            <Bar
              dataKey="estimatedProportionOfPopulation"
              fill="#82ca9d"
              name="Estimated proportion of population (%)"
              unit="%"
            />
          </BarChart>
        </ResponsiveContainer>
        <Stack align="flex-end" fontSize="sm" pb={6}>
          <Text>Data provided by CSO</Text>
          <Flex direction="column" align="flex-end" textAlign="right">
            <Link href="https://data.cso.ie/table/HFC2039" color="blue.500">
              Household Gross and Net Wealth by Age (2020)
            </Link>
            <Link href="https://data.cso.ie/table/PEA04" color="blue.500">
              Estimated Population (2020)
            </Link>
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
};
