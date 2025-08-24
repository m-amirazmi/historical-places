import { Card, Text, useTheme } from "@ui-kitten/components";
import { LucideIcon } from "lucide-react-native";
import { Image, StyleSheet, View } from "react-native";
import { FontSize, Radius, Spacing } from "../utils/theme";

type NumberCardProp = {
  icon: LucideIcon;
  iconTheme: "success" | "info" | "error" | "warning";
  number: number;
  text: string;
};

export function NumberCard({ icon, iconTheme, number, text }: NumberCardProp) {
  const theme = useTheme();

  const Icon = icon;

  let iconBgColor;
  let iconColor;

  switch (iconTheme) {
    case "success":
      iconBgColor = theme["color-success-transparent-100"];
      iconColor = theme["color-success-700"];
      break;
    case "error":
      iconBgColor = theme["color-danger-transparent-100"];
      iconColor = theme["color-danger-700"];
      break;
    case "info":
      iconBgColor = theme["color-info-transparent-100"];
      iconColor = theme["color-info-700"];
      break;
    case "warning":
      iconBgColor = theme["color-warning-transparent-100"];
      iconColor = theme["color-warning-700"];
      break;
    default:
      break;
  }

  return (
    <Card style={styles.card}>
      <View style={styles.container}>
        <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
          <Icon color={iconColor} />
        </View>
        <View>
          <Text style={[styles.numberText]}>{number}</Text>
          <Text category="p2">{text}</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    flex: 1,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    zIndex: 10,
    gap: Spacing.md,
  },
  iconContainer: {
    padding: Spacing.sm,
    borderRadius: Radius.sm,
  },
  numberText: {
    fontSize: FontSize.xl,
  },
});
