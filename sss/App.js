import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { useSharedValue, useAnimatedStyle } from "react-native-reanimated";

const SIZE = 100.0;


export default function App() {
  const progress = useSharedValue(1);
  // const scale=useSharedValue(1);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform:[{scale:scale.value}],
    };
  }, []);

  useEffect(() => {
    progress.value = withTiming(0, {duration: 5000});
    // scale.value = withTiming()
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          { height: SIZE, width: SIZE, backgroundColor: "blue" },
          reanimatedStyle,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
