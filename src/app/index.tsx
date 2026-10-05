import { ThemeToggle } from "@/components/common/theme-toggle";

import { AppsProjectSection } from "@/components/section/apps-project-section";
import { HeroSection } from "@/components/section/hero-section";
import { TechStackSection } from "@/components/section/tech-stack-section";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ScrollView, View } from "react-native";

export default function Index() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 native:bg-background">
      <View className="absolute top-0 right-0 z-10 p-3">
        <ThemeToggle />
      </View>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        }}
      >
        <View className="flex-1 items-center justify-center gap-3 pb-5 px-4 sm:px-0">
          <View className="h-[200px]" />
          <HeroSection />
          <View className="h-[1px] w-9/12 bg-gray-400 my-4 px-5" />
          <TechStackSection />
          <View className="h-[1px] w-9/12 bg-gray-400 my-4 px-5" />
          <AppsProjectSection />
        </View>
      </ScrollView>
    </View>
  );
}
