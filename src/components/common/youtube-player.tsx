import { View } from "react-native";
import { WebView } from "react-native-webview";

export type YouTubePlayerProps = {
  videoId: string;
  title: string;
};

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

  return (
    <View className="w-full max-w-md aspect-video overflow-hidden rounded-2xl border border-border bg-black">
      <WebView
        // A base URL gives the embed a referrer, which YouTube requires.
        source={{ html, baseUrl: "https://www.youtube.com" }}
        allowsFullscreenVideo
        allowsInlineMediaPlayback
        scrollEnabled={false}
        accessibilityLabel={title}
      />
    </View>
  );
}
