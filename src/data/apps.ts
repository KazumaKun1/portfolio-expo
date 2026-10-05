import type { ImageSourcePropType } from "react-native";

export type AppStatus = "In development" | "TestFlight beta" | "Released";

export type AppLinkKind = "github" | "testflight" | "website";

export type AppLink = { label: string; href: string; kind?: AppLinkKind };

export type AppProject = {
  name: string;
  description: string;
  icon: { light: ImageSourcePropType; dark: ImageSourcePropType };
  tech: string[];
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
    tech: [
      "Swift",
      "SwiftUI",
      "SwiftData",
      "Apple Foundation Models",
      "Swift Testing",
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
