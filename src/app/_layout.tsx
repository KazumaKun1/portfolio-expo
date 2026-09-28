import { PortalHost } from "@rn-primitives/portal";
import { ThemeProvider } from "expo-router/react-navigation";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

import { NAV_THEME } from "@/lib/theme";

import "../global.css";

export default function RootLayout() {
  const colorScheme = useColorScheme() === "dark" ? "dark" : "light";

  return (
    <ThemeProvider value={NAV_THEME[colorScheme]}>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <Slot />
      <PortalHost />
    </ThemeProvider>
  );
}
