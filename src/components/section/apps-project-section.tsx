import { AppShowcase } from "@/components/common/app-showcase";
import { APPS } from "@/data/apps";

import { Text, View } from "react-native";

export function AppsProjectSection() {
  return (
    <View className="w-full max-w-md items-center gap-6">
      <Text className="text-xl font-medium text-foreground">Simply Series</Text>
      <Text className="text-sm text-muted-foreground text-center">
        Apps I build for myself, designed to be simple and direct, with a
        neurodivergent-friendly UX. I&apos;m AuDHD, and I build the tools I wish
        existed.
      </Text>
      {APPS.map((app) => (
        <AppShowcase key={app.name} app={app} />
      ))}
    </View>
  );
}
