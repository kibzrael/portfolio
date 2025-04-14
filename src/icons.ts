import arrowDown from "./assets/icons/arrow-down.svg?raw";
import arrowLeft from "./assets/icons/arrow-left.svg?raw";
import arrowRight from "./assets/icons/arrow-right.svg?raw";
import arrowUpRight from "./assets/icons/arrow-up-right.svg?raw";
import customizeComputer from "./assets/icons/customize-computer.svg?raw";
import databaseManagement from "./assets/icons/database-management.svg?raw";
import systemCloud from "./assets/icons/system-cloud.svg?raw";
//
import aws from "./assets/icons/aws.svg?raw";
import django from "./assets/icons/django.svg?raw";
import docker from "./assets/icons/docker.svg?raw";
import figma from "./assets/icons/figma.svg?raw";
import firebase from "./assets/icons/firebase.svg?raw";
import flutter from "./assets/icons/flutter.svg?raw";
import github from "./assets/icons/github.svg?raw";
import golang from "./assets/icons/golang.svg?raw";
import googlecloud from "./assets/icons/googlecloud.svg?raw";
import jquery from "./assets/icons/jquery.svg?raw";
import linkedin from "./assets/icons/linkedin.svg?raw";
import mongodb from "./assets/icons/mongodb.svg?raw";
import nextjs from "./assets/icons/nextjs.svg?raw";
import nginx from "./assets/icons/nginx.svg?raw";
import nodejs from "./assets/icons/nodejs.svg?raw";
import postgresql from "./assets/icons/postgresql.svg?raw";
import react from "./assets/icons/react.svg?raw";
import tailwind from "./assets/icons/tailwind.svg?raw";
import typescript from "./assets/icons/typescript.svg?raw";
import upwork from "./assets/icons/upwork.svg?raw";
import vue from "./assets/icons/vue.svg?raw";

const icons = {
  // Interface
  arrowDown,
  arrowUpRight,
  arrowLeft,
  arrowRight,
  customizeComputer,
  databaseManagement,
  systemCloud,

  // Brands
  github,
  linkedin,
  upwork,
  nextjs,
  golang,
  docker,
  mongodb,
  aws,
  django,
  figma,
  firebase,
  flutter,
  googlecloud,
  nginx,
  nodejs,
  postgresql,
  react,
  tailwind,
  typescript,
  jquery,
  vue,
};

export function renderIcons() {
  const els = document.getElementsByClassName("icon");

  for (let i = 0; i < els.length; i++) {
    const el = els[i];
    const icon = icons[el.innerHTML as keyof typeof icons] || "";
    if (icon) {
      el.innerHTML = icon;
    }
  }
}
