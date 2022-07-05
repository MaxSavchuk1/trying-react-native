import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const ZoomAnimation = ({ children, duration = 500 }) => {
  const anim = useRef(new Animated.Value(0)).current;

  const zoomIn = () => {
    Animated.timing(anim, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  };

  // const zoomOut = () => {
  //   Animated.timing(anim, {
  //     toValue: 0,
  //     duration: 500,
  //     useNativeDriver: true,
  //   }).start();
  // };

  useEffect(() => {
    zoomIn();
  }, []);

  return (
    <Animated.View
      style={{
        transform: [{ scale: anim }],
      }}
    >
      {children}
    </Animated.View>
  );
};

export default ZoomAnimation;
