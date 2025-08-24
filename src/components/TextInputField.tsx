import { useState } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { Radius } from "../utils/theme";

interface TextInputFieldProps extends TextInputProps {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  error?: string;
  icon?: React.ReactNode;
}

export function TextInputField({
  label,
  containerStyle,
  inputStyle,
  error,
  icon,
  ...rest
}: TextInputFieldProps) {
  const { colors } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.textInput,
            {
              backgroundColor: colors.base100,
              borderColor: isFocused ? colors.primary : colors.base100,
              color: colors.baseContent,
            },
            inputStyle,
          ]}
          {...rest}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <View style={styles.iconContainer}>{icon && icon}</View>
      </View>
      {error && <Text style={{ color: "red" }}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  inputContainer: { flexDirection: "row", alignItems: "center" },
  textInput: {
    flex: 1,
    paddingRight: 16,
    paddingLeft: 32,
    paddingBlock: 12,
    borderRadius: Radius.lg,
    borderWidth: 1,
  },
  iconContainer: {
    position: "absolute",
    left: 8,
  },
});
