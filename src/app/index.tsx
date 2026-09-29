import { ThemeToggle } from "@/components/common/theme-toggle";
import { HeroSection } from "@/components/section/hero-section";

import { View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-background transition-colors duration-300">
      <View className="flex-row-reverse p-3">
        <ThemeToggle />
      </View>
      <View className="flex-1 items-center justify-center gap-3">
        <HeroSection />
        <View className="h-[1px] w-9/12 bg-gray-400 my-4 px-5" />
      </View>
    </View>
  );
}
