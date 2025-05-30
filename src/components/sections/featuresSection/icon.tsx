import Image from "next/image";
import {ArrowDownNarrowWide, AtSign, Code, SquareMenu, Workflow} from "lucide-react";

const isNew = true
export function getIconForFeature(iconName: string) {
  // You would replace these with actual SVG icons
  switch (iconName) {
    case "autocomplete":
      return <Workflow />
    case "documentation":
      return <SquareMenu />
    case "jsdoc":
      return <Code />

    case "sorting":
      return <ArrowDownNarrowWide />

    default:
      return null;
  }
}
