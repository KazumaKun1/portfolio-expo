import { Link, type Href } from "expo-router";
import { ReactNode } from "react";
import { Pressable, Text } from "react-native";

import { cn } from "@/lib/utils";

type LinkProps = {
  label: string;
  href: Href | string;
  icon?: ReactNode;
  className?: string;
};

export function LinkButton(props: LinkProps) {
  return (
    <Link href={props.href as Href} asChild>
      <Pressable
        accessibilityRole="link"
        accessibilityLabel={props.label}
        className={cn(
          "flex-row items-center gap-1.5 rounded-full border border-border px-4 py-2",
          "hover:bg-secondary active:opacity-70 transition-colors duration-300",
          props.className,
        )}
      >
        {props.icon}
        <Text className="text-sm font-medium text-foreground">
          {props.label}
        </Text>
      </Pressable>
    </Link>
  );
}
