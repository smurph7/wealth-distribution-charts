import * as React from 'react';
import {
  Pie,
  PieChart,
  Cell,
  ResponsiveContainer,
  LabelList,
  Tooltip
} from 'recharts';
import type { PieLabelRenderProps, TooltipProps } from 'recharts';
import {
  Box,
  Flex,
  Text,
  useMediaQuery,
  theme,
  Link,
  Stack
} from '@chakra-ui/react';

const data = [
  { name: '< 20th', value: 10.8 },
  { name: '20-39th', value: 13.0 },
  { name: '40-59th', value: 15.1 },
  { name: '60-79th', value: 19.3 },
  { name: 'Top 20th', value: 42.0 }
];

const COLORS = [
  theme.colors.blue[500],
  theme.colors.green[500],
  theme.colors.yellow[500],
  theme.colors.orange[500],
  theme.colors.red[500]
];

const RADIAN = Math.PI / 180;
const CustomisedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name
}: any) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <g>
      <text
        x={x - 5}
        y={y - 10}
        fill="white"
        fontSize={isMobile ? 12 : 20}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${name}`}
      </text>
      <text
        x={x}
        y={y + 10}
        fill="white"
        fontSize={isMobile ? 12 : 20}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    </g>
  );
};

const valueAccessor =
  (attribute: string | number) =>
  ({ payload }: { payload: PieLabelRenderProps }): string => {
    const [isMobile] = useMediaQuery('(max-width: 768px)');

    return isMobile
      ? ''
      : `${payload['name']} percentile has ${payload[attribute]}% of wealth`;
  };

const CustomTooltip = ({
  active,
  payload
}: TooltipProps<'value', 'name'>): JSX.Element => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  if (!isMobile) return <></>;

  if (active && payload && payload.length) {
    return (
      <Box width={200} bg="rgba(255,255,255, 0.6)" borderRadius={4}>
        <Text fontWeight="bold">
          {payload[0].name} percentile has {payload[0].value}% of wealth
        </Text>
      </Box>
    );
  }

  return <></>;
};

export const WealthDistributionPieChart = (): JSX.Element => {
  //   const [isAnimationActive, setIsAnimationActive] = React.useState(false);
  //   const { data: wealthDistributionData, ...query } =
  //     useWealthDistributionByPercentile();
  //   console.log('query', wealthDistributionData);
  //   if (query.isSuccess) {
  //     console.log(
  //       Object.keys(wealthDistributionData).map(item =>
  //         console.log(
  //           'item',
  //           Object.values(wealthDistributionData[item].category.label)
  //         )
  //       )
  //     );
  //   }

  //   React.useEffect(() => {
  //     if (query.isSuccess) {
  //       setIsAnimationActive(true);
  //     }
  //   }, [query]);

  return (
    <Flex
      direction="column"
      width={[380, 380, 600, 800]}
      height={[380, 380, 600, 600]}
      overflowX="hidden"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={800} height={600}>
          <Pie
            data={data}
            // isAnimationActive={isAnimationActive}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="90%"
            label={<CustomisedLabel />}
            labelLine={false}
          >
            <LabelList
              position="outside"
              fontSize="14px"
              fontWeight="bold"
              fill="#000"
              stroke="none"
              width={200}
              style={{
                wordWrap: 'break-word'
              }}
              valueAccessor={valueAccessor('value')}
            />
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            content={<CustomTooltip />}
            allowEscapeViewBox={{ x: true, y: false }}
          />
        </PieChart>
      </ResponsiveContainer>
      <Stack align="flex-end" p={4}>
        <Text>By Percentile of Household Income 2020</Text>
        <Link href="https://data.cso.ie/table/HFC2038" color="blue.500">
          Data provided by CSO
        </Link>
      </Stack>
    </Flex>
  );
};
