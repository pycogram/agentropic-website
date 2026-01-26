import type { Metadata } from "next";
import UseCases from './usecase-content';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://agentropic.org/about",
  },
};

export default function UseCasesPage() {
  return <UseCases />;
}