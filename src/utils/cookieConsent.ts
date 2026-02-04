// Cookie consent utilities for GDPR compliance

export type ConsentCategory = 'essential' | 'analytics' | 'marketing';

export interface ConsentPreferences {
    essential: boolean; // Always true, cannot be disabled
    analytics: boolean;
    marketing: boolean;
    timestamp: number;
}

const CONSENT_KEY = 'cookie_consent';

export const getConsentPreferences = (): ConsentPreferences | null => {
    try {
        const stored = localStorage.getItem(CONSENT_KEY);
        if (stored) {
            return JSON.parse(stored);
        }
    } catch {
        // localStorage not available or parsing failed
    }
    return null;
};

export const setConsentPreferences = (preferences: Omit<ConsentPreferences, 'essential' | 'timestamp'>): void => {
    const fullPreferences: ConsentPreferences = {
        essential: true, // Always enabled
        analytics: preferences.analytics,
        marketing: preferences.marketing,
        timestamp: Date.now(),
    };

    try {
        localStorage.setItem(CONSENT_KEY, JSON.stringify(fullPreferences));
    } catch {
        // localStorage not available
    }
};

export const hasConsentBeenGiven = (): boolean => {
    return getConsentPreferences() !== null;
};

export const hasAnalyticsConsent = (): boolean => {
    const prefs = getConsentPreferences();
    return prefs?.analytics ?? false;
};

export const hasMarketingConsent = (): boolean => {
    const prefs = getConsentPreferences();
    return prefs?.marketing ?? false;
};

export const clearConsent = (): void => {
    try {
        localStorage.removeItem(CONSENT_KEY);
    } catch {
        // localStorage not available
    }
};

// Accept all cookies
export const acceptAllCookies = (): void => {
    setConsentPreferences({
        analytics: true,
        marketing: true,
    });
};

// Reject all non-essential cookies
export const rejectAllCookies = (): void => {
    setConsentPreferences({
        analytics: false,
        marketing: false,
    });
};
