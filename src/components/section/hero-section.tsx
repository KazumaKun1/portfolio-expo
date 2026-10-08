import { useColorScheme } from "nativewind";

import { LinkButton } from "@/components/common/link-button";
import { THEME } from "@/lib/theme";

import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";

import { Platform, Text, View } from "react-native";

export function HeroSection() {
  const { colorScheme } = useColorScheme();
  const iconColor =
    THEME[colorScheme === "dark" ? "dark" : "light"].secondaryForeground;
  const iconTransitionStyle =
    Platform.OS === "web"
      ? { transitionProperty: "color", transitionDuration: "300ms" }
      : undefined;

  return (
    <View className="items-center gap-3 w-full max-w-xl">
      <View className="gap-5">
        <View className="items-center">
          <Text className="text-4xl sm:text-5xl font-semibold text-foreground">
            Arviejhay
          </Text>
          <Text className="text-4xl sm:text-5xl font-semibold text-foreground">
            Alejandro
          </Text>
        </View>
        <Text className="text-base text-muted-foreground text-center">
          iOS Developer · Learning React Native (Expo)
        </Text>
      </View>
      <View className="flex-row flex-wrap justify-center gap-3">
        <LinkButton
          label="Resume"
          href="https://drive.google.com/file/d/1BohMJ0BKVN5LORP4mczO31OO_qtojc2y/preview"
          icon={
            <MaterialDesignIcons
              name="file-document"
              size={14}
              color={iconColor}
              style={iconTransitionStyle}
            />
          }
        />
        <LinkButton
          label="GitHub"
          href="https://github.com/KazumaKun1"
          icon={
            <FontAwesome6
              name="github"
              iconStyle="brand"
              size={14}
              color={iconColor}
              style={iconTransitionStyle}
            />
          }
        />
        <LinkButton
          label="Email"
          href="mailto:arviejhay123@gmail.com"
          icon={
            <MaterialDesignIcons
              name="email-outline"
              size={14}
              color={iconColor}
              style={iconTransitionStyle}
            />
          }
        />
      </View>
      <Text className="text-xs sm:text-sm text-muted-foreground text-center font-light max-w-md">
        iOS developer with 6+ years of experience across fintech, e-commerce
        grocery, telecommunications, and CRM apps for food pantry tracking.
      </Text>
    </View>
  );
}
