import {
  Pie,
  PieChart,
  Cell,
  ResponsiveContainer,
  LabelList,
  Tooltip
} from 'recharts';
import type { PieLabelRenderProps, TooltipProps } from 'recharts';
import { Box, Text, useMediaQuery } from '@chakra-ui/react';

const data = [
  { name: '50%', value: 1.4 },
  { name: '30%', value: 25.9 },
  { name: '20%', value: 72.7 }
];

const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

const valueAccessor =
  (attribute: string | number) =>
  ({ payload }: { payload: PieLabelRenderProps }): string => {
    const [isMobile] = useMediaQuery('(max-width: 768px)');
    return isMobile
      ? `${payload[attribute]}%`
      : `${payload[attribute]}% of wealth is owned by ${payload['name']} of
      the population`;
  };

const CustomTooltip = ({
  active,
  payload
}: TooltipProps<'value', 'name'>): JSX.Element => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  console.log('isMobile', isMobile);
  if (!isMobile) return <></>;
  if (active && payload && payload.length) {
    return (
      <Box width={200}>
        <Text fontWeight="bold">
          {payload[0].value}% of wealth is owned by {payload[0].name}of the
          population
        </Text>
      </Box>
    );
  }

  return <></>;
};

export const WealthDistributionPieChart = (): JSX.Element => {
  return (
    <Box width={[400, 400, 600, 800]} height={[400, 400, 600, 600]}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={800} height={600}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="50%"
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
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};
