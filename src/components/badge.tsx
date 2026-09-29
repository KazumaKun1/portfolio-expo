import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";

import { cn } from "@/lib/utils";

type BadgeProps = {
  label: string;
  icon?: keyof typeof Ionicons.glyphMap;
  className?: string;
};

export function Badge(props: BadgeProps) {
  return (
    <View
      className={cn(
        "flex-row items-center gap-1 rounded-full bg-secondary px-3 py-1",
        props.className,
      )}
    >
      {props.icon ? (
        <Ionicons name={props.icon} size={14} className="text-secondary-foreground" />
      ) : null}
      <Text className="text-xs font-medium text-secondary-foreground">
        {props.label}
      </Text>
    </View>
  );
}
