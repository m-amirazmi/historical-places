import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { Radius, Spacing } from "../utils/theme";

type PillProps = {
  text: string;
  onPress: () => void;
  selected: boolean;
};

export function Pill({ onPress, selected, text }: PillProps) {
  const { colors } = useTheme();

  const bgColor = selected ? colors.primary : colors.base200;
  const textColor = selected ? colors.primaryContent : colors.neutral;

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
