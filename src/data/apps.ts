import type { ImageSourcePropType } from "react-native";

export type AppStatus = "In development" | "TestFlight beta" | "Released";

export type AppLinkKind = "github" | "testflight" | "website";

export type AppLink = { label: string; href: string; kind?: AppLinkKind };

export type AppProject = {
  name: string;
  description: string;
  icon: { light: ImageSourcePropType; dark: ImageSourcePropType };
  screenshots?: { light: ImageSourcePropType; dark: ImageSourcePropType }[];
  video?: { youtubeId: string; title: string };
  tech: { label: string; items: string[] }[];
  status: AppStatus;
  links?: AppLink[];
};

export const APPS: AppProject[] = [
  {
    name: "Simply Job Tracker",
    description:
      "An offline app for simply tracking job applications with ease.",
    icon: {
      light: require("@/assets/images/simply-job-tracker-light.png"),
      dark: require("@/assets/images/simply-job-tracker-dark.png"),
    },
    screenshots: [
      {
        light: require("@/assets/images/simply-job-tracker/main-light.png"),
        dark: require("@/assets/images/simply-job-tracker/main-dark.png"),
      },
      {
        light: require("@/assets/images/simply-job-tracker/detail-light.png"),
        dark: require("@/assets/images/simply-job-tracker/detail-dark.png"),
      },
      {
        light: require("@/assets/images/simply-job-tracker/edit1-light.png"),
        dark: require("@/assets/images/simply-job-tracker/edit1-dark.png"),
      },
      {
        light: require("@/assets/images/simply-job-tracker/edit2-light.png"),
        dark: require("@/assets/images/simply-job-tracker/edit2-dark.png"),
      },
      {
        light: require("@/assets/images/simply-job-tracker/main-offer-filter-light.png"),
        dark: require("@/assets/images/simply-job-tracker/main-offer-filter-dark.png"),
      },
      {
        light: require("@/assets/images/simply-job-tracker/ai-light.png"),
        dark: require("@/assets/images/simply-job-tracker/ai-dark.png"),
      },
      {
        light: require("@/assets/images/simply-job-tracker/widget-light.png"),
        dark: require("@/assets/images/simply-job-tracker/widget-dark.png"),
      },
    ],
    video: {
      youtubeId: "XAOWGyN88E0",
      title: "Simply Job Tracker walkthrough",
    },
    tech: [
      {
        label: "Architecture",
        items: ["Swift", "MVVM", "Coordinator Pattern"],
      },
      {
        label: "Apple Frameworks",
        items: [
          "SwiftUI",
          "SwiftData",
          "Observation",
          "Swift Concurrency",
          "WidgetKit",
          "App Intents",
          "Foundation Models",
        ],
      },
      {
        label: "Testing & Delivery",
        items: ["Swift Testing", "XCTest", "Xcode Cloud"],
      },
      { label: "Services", items: ["RevenueCat"] },
    ],
    status: "TestFlight beta",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/KazumaKun1/SimplyJobTracker",
        kind: "github",
      },
      {
        label: "TestFlight",
        href: "https://testflight.apple.com/join/8agt7ksG",
        kind: "testflight",
      },
      {
        label: "App Builders PH",
        href: "https://appbuildersph.com/apps/simplyjobtracker",
        kind: "website",
      },
    ],
  },
];
