import { useColorScheme } from "nativewind";
import { Image, Text, View } from "react-native";

import { Badge } from "@/components/common/badge";
import { LinkButton } from "@/components/common/link-button";
import type { AppLinkKind, AppProject } from "@/data/apps";
import { THEME } from "@/lib/theme";
import { cn } from "@/lib/utils";

import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";

function LinkIcon({ kind, color }: { kind?: AppLinkKind; color: string }) {
  switch (kind) {
    case "github":
      return (
        <FontAwesome6 name="github" iconStyle="brand" size={14} color={color} />
      );
    case "testflight":
      return (
        <FontAwesome6 name="apple" iconStyle="brand" size={14} color={color} />
      );
    case "website":
      return <MaterialDesignIcons name="web" size={14} color={color} />;
    default:
      return null;
  }
}

export function AppShowcase({ app }: { app: AppProject }) {
  const { colorScheme } = useColorScheme();
  const theme = colorScheme === "dark" ? "dark" : "light";
  const iconColor = THEME[theme].secondaryForeground;
  const shadow =
    theme === "dark"
      ? "0px 0px 24px 0px rgba(255,255,255,0.08)"
      : "0px 12px 24px 0px rgba(0,0,0,0.15)";

  return (
    <View className="items-center gap-5">
      <View
        className="size-20 rounded-[18px]"
        style={{
          boxShadow: shadow,
          transitionProperty: "box-shadow",
          transitionDuration: "300ms",
        }}
      >
        <View className="size-full overflow-hidden rounded-[18px] border border-border">
          <View
            className={cn(
              "absolute inset-0 transition-opacity duration-300",
              theme === "light" ? "opacity-100" : "opacity-0",
            )}
          >
            <Image
              source={app.icon.light}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View
            className={cn(
              "absolute inset-0 transition-opacity duration-300",
              theme === "dark" ? "opacity-100" : "opacity-0",
            )}
          >
            <Image
              source={app.icon.dark}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        </View>
      </View>
      <View className="items-center gap-2">
        <Text className="text-lg font-medium text-foreground">{app.name}</Text>
        <Badge label={app.status} />
        <Text className="text-sm text-muted-foreground text-center">
          {app.description}
        </Text>
      </View>
      <View className="flex-row flex-wrap justify-center gap-2 max-w-md">
        {app.tech.map((t) => (
          <Badge key={t} label={t} />
        ))}
      </View>
      {app.links?.length ? (
        <View className="flex-row flex-wrap justify-center gap-3">
          {app.links.map((link) => (
            <LinkButton
              key={link.href}
              label={link.label}
              href={link.href}
              icon={<LinkIcon kind={link.kind} color={iconColor} />}
            />
          ))}
        </View>
      ) : null}
    </View>
  );
}
