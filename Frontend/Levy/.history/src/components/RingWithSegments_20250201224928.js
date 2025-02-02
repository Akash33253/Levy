import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

const RingWithSegments = () => {
  const radius = 50; // Radius of the circle
  const strokeWidth = 2; // Width of the ring
  const segments = [
    { start: 0, end: 90, color: 'red' },
    { start: 90, end: 180, color: 'blue' },
    { start: 180, end: 270, color: 'green' },
    { start: 270, end: 360, color: 'yellow' },
  ];

  const createPath = (start, end) => {
    const startAngle = (start - 90) * (Math.PI / 180); // Convert to radians
    const endAngle = (end - 90) * (Math.PI / 180); // Convert to radians

    const startX = radius + radius * Math.cos(startAngle);
    const startY = radius + radius * Math.sin(startAngle);
    const endX = radius + radius * Math.cos(endAngle);
    const endY = radius + radius * Math.sin(endAngle);

    const largeArcFlag = end - start <= 180 ? 0 : 1;

    return `M${radius},${radius} L${startX},${startY} A${radius},${radius} 0 ${largeArcFlag} 1 ${endX},${endY} Z`;
  };

  return (
    <View>
      <Svg width={2 * radius} height={2 * radius}>
        {segments.map((segment, index) => (
          <Path
          key={index}
          d={createPath(segment.start, segment.end)}
          fill="none" // Makes the inside transparent
          stroke={segment.color} // Set the border color
          strokeWidth={strokeWidth} // Set the width of the border
          />
        ))}
      </Svg>
    </View>
  );
};

export default RingWithSegments;
