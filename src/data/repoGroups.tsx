import { ReactNode } from "react";
import { github_icon, tbun_icon } from "../assets";
import { RepoIcon, RepoImageIcon } from "./RepoIcon";

export const repoGroups: {
  name: ReactNode;
  repos: {
    icon: ReactNode;
    name: ReactNode;
    repo: string;
    page?: string;
    external?: string;
  }[];
}[] = [
  {
    name: "Vite.js - React - Typescript",
    repos: [
      {
        icon: <RepoImageIcon src={github_icon} />,
        name: "GitHub Page",
        repo: "tanachai-b.github.io",
        page: "https://tanachai-b.github.io",
        external: "https://directories.tbun.dev",
      },
      {
        icon: <RepoImageIcon src={tbun_icon} />,
        name: "TBUN.dev",
        repo: "tbun-dev",
        external: "https://www.tbun.dev",
      },
      {
        icon: <RepoIcon icon="sticky_note_2" color="#ffd000" />,
        name: "Sticky Notes",
        repo: "sticky-notes",
      },
      {
        icon: <RepoIcon icon="palette" color="#ff6000" />,
        name: "Color Swatches",
        repo: "color-swatches",
      },
      {
        icon: <RepoIcon icon="paid" color="#00a080" />,
        name: "Cheapest!",
        repo: "cheapest",
      },
    ],
  },
  {
    name: "Next.js - React - Typescript",
    repos: [
      {
        icon: <RepoIcon icon="account_balance" color="#00c080" />,
        name: "Personal Finance",
        repo: "personal-finance",
      },
      {
        icon: <RepoIcon icon="watch" color="#80ff00" />,
        name: "Watch Face",
        repo: "watch-face",
      },
      {
        icon: <RepoIcon icon="keyboard" color="#6000ff" />,
        name: "Thai Keyboard",
        repo: "thai-keyboard",
      },
      {
        icon: <RepoIcon icon="code" color="#ff40e0" />,
        name: "Next.js",
        repo: "next-js-projects",
      },
    ],
  },
  {
    name: "Plain Javascript",
    repos: [
      {
        icon: <RepoIcon icon="deployed_code" color="#00c0ff" />,
        name: "Equations 3D",
        repo: "equations-3d",
        external: "https://equations-3d.web.app/",
      },
      {
        icon: <RepoIcon icon="rocket_launch" color="#0000ff" />,
        name: "Starship Command",
        repo: "starship-command",
      },
    ],
  },
  {
    name: "Archived / Unfinished",
    repos: [
      {
        icon: <RepoIcon icon="public" color="#ffffff20" />,
        name: "Orbit Lines (Unfinished)",
        repo: "orbit-lines",
      },
      {
        icon: <RepoIcon icon="directions_car" color="#ffffff20" />,
        name: "Car Simulator (Unfinished)",
        repo: "car-simulator",
      },
      {
        icon: <RepoIcon icon="calendar_month" color="#ffffff20" />,
        name: "Diary Reader (Empty)",
        repo: "diary-reader",
      },
      {
        icon: <RepoIcon icon="palette" color="#ffffff20" />,
        name: "Color Palette (Archived)",
        repo: "color-palette",
      },
    ],
  },
];
