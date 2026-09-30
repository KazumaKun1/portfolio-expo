import { useColorScheme } from "nativewind";
import { Platform, Pressable } from "react-native";

import { THEME } from "@/lib/theme";

import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";

export function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const iconColor =
    THEME[colorScheme === "dark" ? "dark" : "light"].secondaryForeground;

  if (Platform.OS !== "web") return null;

  return (
    <Pressable
      onPress={toggleColorScheme}
      className="rounded-full bg-secondary px-2 py-2"
    >
      <MaterialDesignIcons
        name="theme-light-dark"
        size={16}
        color={iconColor}
      />
    </Pressable>
  );
}
