import { ReactNode } from "react";
import { Text, View } from "react-native";

type TechSubsectionProps = {
  label?: string;
  children: ReactNode;
};

export function TechSubsection({ label, children }: TechSubsectionProps) {
  return (
    <View className="items-center gap-4">
      {label ? (
        <Text className="text-sm text-muted-foreground text-center">
          {label}
        </Text>
      ) : null}
      <View className="flex-row flex-wrap justify-center gap-2 max-w-[600px]">
        {children}
      </View>
    </View>
  );
}
