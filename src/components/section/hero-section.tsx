import { useColorScheme } from "nativewind";
import { Platform, Text, View } from "react-native";

import { Badge } from "@/components/common/badge";
import { THEME } from "@/lib/theme";

import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";

export function HeroSection() {
  const { colorScheme } = useColorScheme();
  const iconColor =
    THEME[colorScheme === "dark" ? "dark" : "light"].secondaryForeground;
  const iconTransitionStyle =
    Platform.OS === "web"
      ? { transitionProperty: "color", transitionDuration: "300ms" }
      : undefined;

  return (
    <View className="items-center gap-3">
      <View className="gap-1">
        <View className="items-center">
          <Text className="text-4xl font-semibold text-foreground">
            Arviejhay
          </Text>
          <Text className="text-4xl font-semibold text-foreground">
            Alejandro
          </Text>
        </View>
        <Text className="text-base text-muted-foreground">
          iOS Developer · Expanding into React Native (Expo)
        </Text>
      </View>
      <View className="flex-row gap-2">
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
      </View>
    </View>
  );
}
