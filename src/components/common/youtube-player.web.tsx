import { View } from "react-native";

import type { YouTubePlayerProps } from "./youtube-player";

// Web: a plain iframe. (react-native-webview doesn't support web.)
export function YouTubePlayer({ videoId, title }: YouTubePlayerProps) {
  // 202 = YouTube's 200px minimum player height + the 1px border on each side.
  return (
    <View className="w-full max-w-md aspect-video min-h-[202px] overflow-hidden rounded-2xl border border-border bg-black">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
        title={title}
        loading="lazy"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{ width: "100%", height: "100%", border: 0 }}
      />
    </View>
  );
}
