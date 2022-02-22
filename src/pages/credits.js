import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function CreditsPage() {
  return (
    <>
      <Seo title="Credits" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="credits" heading="Credits" />
      </Page>
    </>
  );
}
