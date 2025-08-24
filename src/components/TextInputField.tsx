import { Input, Text } from "@ui-kitten/components";
import { useState } from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { Spacing } from "../utils/theme";
import { LucideIcon } from "lucide-react-native";

interface TextInputFieldProps extends TextInputProps {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  error?: string;
  icon?: LucideIcon;
}

export function TextInputField({
  label,
  containerStyle,
  inputStyle,
  error,
  icon,
  ...rest
}: TextInputFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const Icon = icon || null;

  return (
    <View style={[styles.container, containerStyle]}>
      <Input
        style={[styles.textInput, inputStyle]}
        placeholder="Place your Text"
        value={rest.value}
        label={label}
        accessoryLeft={
          Icon ? () => <Icon size={20} strokeWidth={1.5} /> : undefined
        }
        {...rest}
      />
      {error && <Text style={{ color: "red" }}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.md,
  },
  textInput: {
    flex: 1,
  },
  iconContainer: {
    position: "absolute",
    left: 8,
  },
});
