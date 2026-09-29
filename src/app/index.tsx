import { Text, View } from "react-native";
import "../global.css";

import { Badge } from "@/components/badge";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center gap-2">
      <View>
        <Text className="text-4xl">Arviejhay</Text>
        <Text className="text-4xl">Alejandro</Text>
      </View>
      <Text className="text-base">
        iOS · Expanding into React Native (Expo)
      </Text>
      <View className="flex-row gap-2">
        <Badge label="Swift" icon="swift" />
        <Badge label="SwiftUI" icon="swift" />
        <Badge label="UIKit" />
        <Badge label="Objective-C" />
      </View>
    </View>
  );
}
