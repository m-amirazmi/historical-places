import { Text, useTheme } from "@ui-kitten/components";
import { StyleSheet, TouchableNativeFeedback, View } from "react-native";
import { Radius, Spacing } from "../utils/theme";

type PillProps = {
  text: string;
  onPress: () => void;
  selected: boolean;
};

export function Pill({ onPress, selected, text }: PillProps) {
  const theme = useTheme();

  const bgColor = selected
    ? theme["color-primary-700"]
    : theme["color-basic-400"];
  const textColor = selected
    ? theme["color-primary-100"]
    : theme["color-basic-700"];

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingInline: Spacing.md,
    paddingBlock: Spacing.sm,
    borderRadius: Radius.sm,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
});
