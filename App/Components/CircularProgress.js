import * as React from "react";
import { Dimensions, Animated } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Colors } from 'App/Theme';

const { width } = Dimensions.get("window");
const size = width - 115;
const strokeWidth = 4;
const AnimatedPath = Animated.createAnimatedComponent(Path);
const { PI, cos, sin } = Math;
const r = (size - strokeWidth) / 2;
const cx = size / 2;
const cy = size / 2;

const A = PI;
const startAngle = PI;
const endAngle = 2*PI ;

const x1 = cx - r * cos(startAngle);
const y1 = -r * sin(startAngle) + cy;
const x2 = cx - r * cos(endAngle);
const y2 = -r * sin(endAngle) + cy;
const d = `M ${x1} ${y1} A ${r} ${r} 0 1 0 ${x2} ${y2}`;


export default ({ progress }) => {
  const circumference = r * A;
  const alpha = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, A],
  });
  const strokeDashoffset = Animated.multiply(alpha, r);
  return (
    <Svg width={size} height={size}>
      <Path
        stroke={Colors.red}
        fill="none"
        {...{ d, strokeWidth }}
      />
      <AnimatedPath
        stroke={Colors.grey2}
        fill="none"
        strokeDasharray={`${circumference}, ${circumference}`}
        {...{ d, strokeDashoffset, strokeWidth }}
      />
    </Svg>
  );
};


