import { isNil } from '@activepieces/core-utils';
import { PlatformUsage } from '@activepieces/shared';
import { useCallback, useState } from 'react';

import { platformHooks } from '@/hooks/platform-hooks';

const CREDITS_WARNING_THRESHOLD = 70;

export function useCreditsState() {
  const { platform } = platformHooks.useCurrentPlatform();

  const [streamCreditsExhausted, setStreamCreditsExhausted] = useState(false);
  const [warningDismissed, setWarningDismissed] = useState(false);

  // [SYNKRA] AP-native credit exhaustion is disabled — Synkra's own
  // ai_execution_guard enforces quotas server-side against
  // synkra_subscription.aiOpsUsed. The AP creditsRemaining counter is
  // never written by Synkra billing, so reading it here produced a
  // permanent false "credits limit reached" banner. Real exhaustion
  // surfaces from the stream (streamCreditsExhausted) or the server.
  const creditsExhausted = streamCreditsExhausted;

  const creditsPercentUsed = computeCreditsPercentUsed(platform?.usage);
  const showLowCreditsWarning =
    platform?.billingEnforced === true &&
    !warningDismissed &&
    !creditsExhausted &&
    !isNil(creditsPercentUsed) &&
    creditsPercentUsed >= CREDITS_WARNING_THRESHOLD;

  const dismissCreditsWarning = useCallback(() => {
    setWarningDismissed(true);
  }, []);

  return {
    creditsPercentUsed,
    showLowCreditsWarning,
    creditsExhausted,
    setCreditsExhausted: setStreamCreditsExhausted,
    warningDismissed,
    dismissCreditsWarning,
  };
}

function hasExhaustedCredits({
  usage,
  billingEnforced,
}: {
  usage: PlatformUsage | undefined;
  billingEnforced: boolean | undefined;
}): boolean {
  if (isNil(usage)) {
    return false;
  }
  const appSumoExhausted =
    !isNil(usage.appSumoAiCreditsRemaining) &&
    usage.appSumoAiCreditsRemaining <= 0;
  const creditsExhausted =
    billingEnforced === true &&
    !isNil(usage.creditsRemaining) &&
    usage.creditsRemaining <= 0;
  return appSumoExhausted || creditsExhausted;
}

function computeCreditsPercentUsed(
  usage: PlatformUsage | undefined,
): number | null {
  if (isNil(usage) || isNil(usage.creditsRemaining)) {
    return null;
  }
  const { creditsUsed, creditsRemaining } = usage;
  const total = creditsUsed + creditsRemaining;
  if (total <= 0) {
    return null;
  }
  return Math.round((creditsUsed / total) * 100);
}
