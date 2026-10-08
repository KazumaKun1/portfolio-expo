import type { AppProject } from "@/data/apps";
import { THEME } from "@/lib/theme";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import { ScrollView, View, useWindowDimensions } from "react-native";
import Animated, {
    Easing,
    cancelAnimation,
    useAnimatedStyle,
    useReducedMotion,
    useSharedValue,
    withRepeat,
    withTiming,
} from "react-native-reanimated";

const ITEM_WIDTH = 220;
const GAP = 12;
const ITEM_STEP = ITEM_WIDTH + GAP;
// Pixels per second. Lower is slower.
const SPEED = 30;
// Fade covers a share of the carousel width, so it scales with the screen.
const FADE_WIDTH = "18%";
const FADE_MIN_WIDTH = 48;
const FADE_MAX_WIDTH = 280;

type Screenshots = NonNullable<AppProject["screenshots"]>;

// Same color, fully transparent, so the gradient doesn't fade through gray.
const transparent = (hsl: string) =>
  hsl.replace(/^hsl\((\S+) (\S+) (\S+)\)$/, "hsla($1, $2, $3, 0)");

function Screenshot({ source }: { source: Screenshots[number]["light"] }) {
  return (
    <View style={{ width: ITEM_WIDTH, marginRight: GAP }}>
      <View className="overflow-hidden rounded-2xl border border-border">
        <Image
          source={source}
          contentFit="cover"
          // Web lazy-loads by default, so images clipped outside the container
          // would pop in as they slide into view. Load them all up front.
          loading="eager"
          style={{ aspectRatio: 1170 / 2532, width: "100%" }}
        />
      </View>
    </View>
  );
}

function EdgeFade({ side, color }: { side: "left" | "right"; color: string }) {
  return (
    <LinearGradient
      colors={
        side === "left"
          ? [color, transparent(color)]
          : [transparent(color), color]
      }
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{
        pointerEvents: "none",
        position: "absolute",
        top: 0,
        bottom: 0,
        [side]: 0,
        width: FADE_WIDTH,
        minWidth: FADE_MIN_WIDTH,
        maxWidth: FADE_MAX_WIDTH,
      }}
    />
  );
}

export function ScreenshotCarousel({
  screenshots,
}: {
  screenshots: Screenshots;
}) {
  const { colorScheme } = useColorScheme();
  const mode = colorScheme === "dark" ? "dark" : "light";
  const reducedMotion = useReducedMotion();
  // Span the whole screen (the parent column is narrower), so the edge fade
  // scales with the screen instead of the section.
  const { width: screenWidth } = useWindowDimensions();

  const loopWidth = screenshots.length * ITEM_STEP;
  const translateX = useSharedValue(0);

  useEffect(() => {
    if (reducedMotion) return;
    translateX.value = 0;
    translateX.value = withRepeat(
      withTiming(-loopWidth, {
        duration: (loopWidth / SPEED) * 1000,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
    return () => cancelAnimation(translateX);
  }, [loopWidth, reducedMotion, translateX]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  // Users who prefer reduced motion get a normal swipeable row instead.
  if (reducedMotion) {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ width: screenWidth, flexGrow: 0 }}
        contentContainerClassName="px-4"
      >
        {screenshots.map((shot, i) => (
          <Screenshot key={i} source={shot[mode]} />
        ))}
      </ScrollView>
    );
  }

  const background = THEME[mode].background;

  return (
    <View className="overflow-hidden" style={{ width: screenWidth }}>
      {/* Two copies back to back so the loop wraps without a visible jump. */}
      <Animated.View
        style={[{ flexDirection: "row", width: loopWidth * 2 }, animatedStyle]}
      >
        {[0, 1].map((copy) =>
          screenshots.map((shot, i) => (
            <Screenshot key={`${copy}-${i}`} source={shot[mode]} />
          )),
        )}
      </Animated.View>
      <EdgeFade side="left" color={background} />
      <EdgeFade side="right" color={background} />
    </View>
  );
}
