import {AuroraBackgroundDemo} from "@/app/components/ui/auroBackgroundDemo"
import { NavbarDemo } from "./components/ui/NavbarDemo";
import { LampDemo } from "./components/ui/lamp";
import { SparklesPreview } from "./components/ui/sparklespreview";
import { StickyScrollRevealDemo } from "./components/ui/StickyScrollRevealDemo";
import { TabsDemo } from "./components/ui/TabsDemo";

export default function Home() {
  return <div>
    <NavbarDemo/>
    <SparklesPreview/>
    <LampDemo/>
    <AuroraBackgroundDemo/>
    <StickyScrollRevealDemo/>
    <TabsDemo/>
  </div>;
}
