import type { ReactNode } from "react";
import { Text, View } from "react-native";

import { cn } from "@/lib/utils";

type BadgeProps = {
  label: string;
  icon?: ReactNode;
  className?: string;
};

export function Badge(props: BadgeProps) {
  return (
    <View
      className={cn(
        "flex-row items-center gap-1 rounded-full bg-secondary px-3 py-1 border border-border transition-colors duration-300",
        props.className,
      )}
    >
      {props.icon}
      <Text className="text-xs font-medium text-secondary-foreground transition-colors duration-300">
        {props.label}
      </Text>
    </View>
  );
}
