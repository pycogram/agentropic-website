import type { Metadata } from "next";
import Crates from "./crates-content";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://agentropic.org/crates",
  },
};

export default function CratesPage() {
  return <Crates />;
}