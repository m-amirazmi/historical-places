import React, { useRef, useEffect } from "react";
import { View, Animated, StyleSheet, Button } from "react-native";
import { Loader as LoaderIcon } from "lucide-react-native";

export default function Loader() {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startRotation();
  }, []);

  const startRotation = () => {
    rotateAnim.setValue(0);
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
        isInteraction: false,
      })
    ).start();
  };

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ rotate: rotation }] }}>
        <LoaderIcon size={90} strokeWidth={1.5} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
