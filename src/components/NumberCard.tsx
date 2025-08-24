import { LucideIcon } from "lucide-react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { Radius, Spacing } from "../utils/theme";

type NumberCardProp = {
  icon: LucideIcon;
  iconTheme: "success" | "info" | "error" | "warning";
  number: number;
  text: string;
};

export function NumberCard({ icon, iconTheme, number, text }: NumberCardProp) {
  const { colors } = useTheme();
  const Icon = icon;

  let iconBgColor;
  let iconColor;

  switch (iconTheme) {
    case "success":
      iconBgColor = colors.success;
      iconColor = colors.successContent;
      break;
    case "error":
      iconBgColor = colors.error;
      iconColor = colors.errorContent;
      break;
    case "info":
      iconBgColor = colors.info;
      iconColor = colors.infoContent;
      break;
    case "warning":
      iconBgColor = colors.warning;
      iconColor = colors.warningContent;
      break;
    default:
      break;
  }

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.base100, borderColor: colors.accentContent },
      ]}
    >
      <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
        <Icon color={iconColor} />
      </View>
      <View>
        <Text style={[styles.numberText, { color: colors.primaryContent }]}>
          {number}
        </Text>
        <Text style={[styles.numberSubText, { color: colors.baseContent }]}>
          {text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: Spacing.sm,
    borderRadius: Radius.lg,
    zIndex: 10,
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  },
  iconContainer: {
    padding: Spacing.sm,
    borderRadius: Radius.lg,
  },
  numberText: {
    fontSize: 24,
  },
  numberSubText: {
    fontSize: 12,
  },
});
