import { Slot } from "expo-router";
import { ThemeProvider } from "expo-router/react-navigation";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import { Platform } from "react-native";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from "react-native-reanimated";

import { NAV_THEME } from "@/lib/theme";

import "../global.css";

// NativeWind 4's transition interop reads shared values during render, which
// Reanimated 4's strict mode flags. Harmless, so keep other warnings but drop strict.
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const theme = colorScheme === "dark" ? "dark" : "light";

  useEffect(() => {
    if (Platform.OS !== "web") return;
    document.documentElement.classList.toggle("dark", colorScheme === "dark");
  }, [colorScheme]);

  return (
    <ThemeProvider value={NAV_THEME[theme]}>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
      <Slot />
    </ThemeProvider>
  );
}
