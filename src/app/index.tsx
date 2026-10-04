import { ThemeToggle } from "@/components/common/theme-toggle";

import { HeroSection } from "@/components/section/hero-section";
import { TechStackSection } from "@/components/section/tech-stack-section";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ScrollView, View } from "react-native";

export default function Index() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      className="flex-1 bg-background transition-colors duration-300"
      contentContainerStyle={{
        flexGrow: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <View className="flex-row-reverse p-3">
        <ThemeToggle />
      </View>
      <View className="flex-1 items-center justify-center gap-3 pb-5">
        <HeroSection />
        <View className="h-[1px] w-9/12 bg-gray-400 my-4 px-5" />
        <TechStackSection />
      </View>
    </ScrollView>
  );
}
