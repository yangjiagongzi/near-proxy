import React from "react";
import Close from "~/assets/svg/close.svg?react";
import Comparer from "~/assets/svg/comparer.svg?react";
import Decoder from "~/assets/svg/decoder.svg?react";
import Dict from "~/assets/svg/dict.svg?react";
import Home from "~/assets/svg/home.svg?react";
import Intruder from "~/assets/svg/intruder.svg?react";
import Note from "~/assets/svg/note.svg?react";
import Output from "~/assets/svg/output.svg?react";
import Project from "~/assets/svg/project.svg?react";
import Proxy from "~/assets/svg/proxy.svg?react";
import Repeater from "~/assets/svg/repeater.svg?react";
import Settings from "~/assets/svg/settings.svg?react";
import Tool from "~/assets/svg/tool.svg?react";

const IconMap = {
  Close,
  Comparer,
  Decoder,
  Dictionary: Dict,
  Home,
  Repeater,
  Note,
  Output,
  Project,
  Settings,
  Tool,
  Proxy,
  Intruder,
} as const;

const SVGSizes = {
  xs: 20,
  sm: 24,
  md: 28,
  lg: 44,
  xl: 72,
} as const;

export type IconName = keyof typeof IconMap;
export type IconSize = keyof typeof SVGSizes;

type Props = {
  name: IconName;
  size: IconSize;
  color?: string;
};

const Icon: React.FC<Props> = ({ name, size, color = "#000" }) => {
  const SvgComp = IconMap[name];
  const svgSize = SVGSizes[size];
  return <SvgComp width={svgSize} height={svgSize} stroke={color} />;
};

export default Icon;
