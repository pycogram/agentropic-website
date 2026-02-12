import type { Metadata } from "next";
import UseCases from './usecase-content';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.agentropic.org/use-case",
  },
};

export default function UseCasesPage() {
  return <UseCases />;
}