import { useColorScheme } from "nativewind";

import { Link } from "expo-router";
import { Platform, Text, View } from "react-native";

import { Badge } from "@/components/common/badge";
import { TechSubsection } from "@/components/common/tech-subsection";
import { THEME } from "@/lib/theme";

import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";

export function TechStackSection() {
  const { colorScheme } = useColorScheme();
  const iconColor =
    THEME[colorScheme === "dark" ? "dark" : "light"].secondaryForeground;
  const iconTransitionStyle =
    Platform.OS === "web"
      ? { transitionProperty: "color", transitionDuration: "300ms" }
      : undefined;

  return (
    <View className="gap-5">
      <Text className="text-xl font-medium text-foreground text-center">
        Core Tech Stack
      </Text>
      <TechSubsection label="Languages & Frameworks">
        <Badge
          label="Swift"
          icon={
            <MaterialDesignIcons
              name="language-swift"
              color={iconColor}
              style={iconTransitionStyle}
            />
          }
        />
        <Badge
          label="SwiftUI"
          icon={
            <FontAwesome6
              name="swift"
              iconStyle="brand"
              color={iconColor}
              style={iconTransitionStyle}
            />
          }
        />
        <Badge label="UIKit" />
        <Badge label="Objective-C" />
        <Badge label="Swift Concurrency (Async/Await)" />
      </TechSubsection>
      <TechSubsection label="Architectures">
        <Badge label="MVC" />
        <Badge label="MVVM/MVVM-C" />
        <Badge label="VIPER" />
      </TechSubsection>
      <TechSubsection label="Data & Testing">
        <Badge label="CoreData/SwiftData" />
        <Badge label="XCTest/Swift Testing" />
      </TechSubsection>
      <Text className="text-xl font-medium text-foreground text-center mt-4">
        Currently Learning
      </Text>
      <TechSubsection>
        <Badge
          label="TypeScript"
          icon={
            <MaterialDesignIcons
              name="language-typescript"
              color={iconColor}
              style={iconTransitionStyle}
            />
          }
        />
        <Badge label="Expo" />
        <Badge label="React Native" />
        <Badge label="NativeWind" />
      </TechSubsection>
      <Text className="text-xs text-muted-foreground text-center italic font-thin">
        This portfolio is built on React, React Native, TypeScript, NativeWind
        and Expo.{" "}
        <Link
          href="https://github.com/KazumaKun1/portfolio-expo"
          className="font-semibold underline text-blue-600 active:text-blue-800 dark:text-blue-400 dark:active:text-blue-300"
        >
          View Source
        </Link>
      </Text>
    </View>
  );
}
