import React from 'react';

import { FeatureKey, FeatureTier } from '@/features/billing';

import { FeatureTeaser } from './feature-teaser';

export const LockedFeatureGuard = ({
  children,
  locked,
  lockTitle,
  lockDescription,
  lockVideoUrl,
  lockDocumentationUrl,
  lockBullets,
  lockTier,
  featureKey,
  showContactSales = true,
}: LockedFeatureGuardProps) => {
  // Synkra: gates demolished — always render children regardless of `locked`.
  void locked;
  return children;
  // eslint-disable-next-line no-unreachable
  if (!locked) {
    return children;
  }

  return (
    <FeatureTeaser
      title={lockTitle}
      description={lockDescription}
      bullets={lockBullets}
      tier={lockTier}
      documentationUrl={lockDocumentationUrl}
      videoUrl={lockVideoUrl}
      featureKey={featureKey}
      showContactSales={showContactSales}
    />
  );
};

export default LockedFeatureGuard;

type LockedFeatureGuardProps = {
  children: React.ReactNode;
  featureKey: FeatureKey;
  showContactSales?: boolean;
  locked: boolean;
  lockTitle: string;
  lockDescription: string;
  lockVideoUrl?: string;
  lockDocumentationUrl?: string;
  lockBullets?: string[];
  lockTier?: FeatureTier;
};
