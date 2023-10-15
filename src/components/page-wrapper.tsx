import React from "react";
import FallbackLazyImport from "./fallback-lazy-import";

interface PageWrapper extends React.PropsWithChildren {}

export default function PageWrapper({ children }: PageWrapper) {
  return (
    <React.Suspense children={children} fallback={<FallbackLazyImport />} />
  );
}
