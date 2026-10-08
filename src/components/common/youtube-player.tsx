import * as Application from "expo-application";
import { View } from "react-native";
import { WebView } from "react-native-webview";

export type YouTubePlayerProps = {
  videoId: string;
  title: string;
};

// YouTube requires embeds in a WebView to identify the app through the Referer,
// as https://<Android application ID or iOS bundle ID>.
const referer = Application.applicationId
  ? `https://${Application.applicationId.toLowerCase()}`
  : undefined;

// Native: render the embed inside a WebView. The web build uses
// youtube-player.web.tsx (a plain iframe) instead.
export function YouTubePlayer({ videoId, title }: YouTubePlayerProps) {
  const html = `<!doctype html><html><head>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style>html,body{margin:0;height:100%;background:#000}iframe{border:0;width:100%;height:100%}</style>
</head><body>
<iframe src="https://www.youtube-nocookie.com/embed/${videoId}?playsinline=1&rel=0"
  title="${title}" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>
</body></html>`;

  // 202 = YouTube's 200px minimum player height + the 1px border on each side.
  return (
    <View className="w-full max-w-md aspect-video min-h-[202px] overflow-hidden rounded-2xl border border-border bg-black">
      <WebView
        // For local HTML, the base URL is what the embed sees as its Referer.
        source={{ html, baseUrl: referer }}
        allowsFullscreenVideo
        allowsInlineMediaPlayback
        scrollEnabled={false}
        accessibilityLabel={title}
      />
    </View>
  );
}
