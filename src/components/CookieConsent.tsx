import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    hasConsentBeenGiven,
    acceptAllCookies,
    rejectAllCookies,
    setConsentPreferences,
} from "@/utils/cookieConsent";

interface CookieConsentProps {
    onConsentChange?: () => void;
}

const CookieConsent = ({ onConsentChange }: CookieConsentProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

    useEffect(() => {
        // Show banner if consent hasn't been given
        if (!hasConsentBeenGiven()) {
            // Small delay for smoother page load
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAcceptAll = () => {
        acceptAllCookies();
        setIsVisible(false);
        onConsentChange?.();
    };

    const handleRejectAll = () => {
        rejectAllCookies();
        setIsVisible(false);
        onConsentChange?.();
    };

    const handleSavePreferences = () => {
        setConsentPreferences({
            analytics: analyticsEnabled,
            marketing: false, // Not using marketing cookies
        });
        setIsVisible(false);
        onConsentChange?.();
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed bottom-0 left-0 right-0 z-[100] p-4 lg:p-6"
                >
                    <div
                        className="max-w-4xl mx-auto rounded-2xl border shadow-xl backdrop-blur-md"
                        style={{
                            background: "hsl(var(--card) / 0.95)",
                            borderColor: "hsl(var(--border))",
                        }}
                    >
                        <div className="p-5 lg:p-6">
                            {/* Main Content */}
                            <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6">
                                <div className="flex-1">
                                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                                        Cookie Preferences
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        We use cookies to enhance your experience. Essential cookies are required for the site to function.
                                        Analytics cookies help us understand how you use our site.
                                    </p>
                                </div>

                                {/* Buttons - Equal Prominence */}
                                <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                                    <button
                                        onClick={handleRejectAll}
                                        className="px-5 py-2.5 rounded-full text-sm font-medium border transition-all hover:bg-secondary"
                                        style={{ borderColor: "hsl(var(--border))" }}
                                    >
                                        Reject All
                                    </button>
                                    <button
                                        onClick={() => setShowDetails(!showDetails)}
                                        className="px-5 py-2.5 rounded-full text-sm font-medium border transition-all hover:bg-secondary"
                                        style={{ borderColor: "hsl(var(--border))" }}
                                    >
                                        Customise
                                    </button>
                                    <button
                                        onClick={handleAcceptAll}
                                        className="px-5 py-2.5 rounded-full text-sm font-medium transition-all"
                                        style={{
                                            background: "hsl(var(--gold))",
                                            color: "hsl(var(--navy))",
                                        }}
                                    >
                                        Accept All
                                    </button>
                                </div>
                            </div>

                            {/* Expandable Details */}
                            <AnimatePresence>
                                {showDetails && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-5 mt-5 border-t" style={{ borderColor: "hsl(var(--border))" }}>
                                            <div className="space-y-4">
                                                {/* Essential Cookies */}
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="text-sm font-medium text-foreground">Essential Cookies</p>
                                                        <p className="text-xs text-muted-foreground">Required for the site to function</p>
                                                    </div>
                                                    <div
                                                        className="w-10 h-6 rounded-full flex items-center px-1 cursor-not-allowed"
                                                        style={{ background: "hsl(var(--gold))" }}
                                                    >
                                                        <div className="w-4 h-4 rounded-full bg-white ml-auto" />
                                                    </div>
                                                </div>

                                                {/* Analytics Cookies */}
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="text-sm font-medium text-foreground">Analytics Cookies</p>
                                                        <p className="text-xs text-muted-foreground">Help us improve the site (Google Analytics)</p>
                                                    </div>
                                                    <button
                                                        onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                                                        className="w-10 h-6 rounded-full flex items-center px-1 transition-colors"
                                                        style={{
                                                            background: analyticsEnabled
                                                                ? "hsl(var(--gold))"
                                                                : "hsl(var(--muted))",
                                                        }}
                                                    >
                                                        <div
                                                            className="w-4 h-4 rounded-full bg-white transition-transform"
                                                            style={{
                                                                transform: analyticsEnabled ? "translateX(16px)" : "translateX(0)",
                                                            }}
                                                        />
                                                    </button>
                                                </div>
                                            </div>

                                            <button
                                                onClick={handleSavePreferences}
                                                className="mt-5 px-5 py-2.5 rounded-full text-sm font-medium transition-all"
                                                style={{
                                                    background: "hsl(var(--gold))",
                                                    color: "hsl(var(--navy))",
                                                }}
                                            >
                                                Save Preferences
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Settings link component for footer/settings page
export const CookieSettingsLink = () => {
    const handleOpenSettings = () => {
        // Clear consent to show banner again
        localStorage.removeItem('cookie_consent');
        window.location.reload();
    };

    return (
        <button
            onClick={handleOpenSettings}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
        >
            Cookie Settings
        </button>
    );
};

export default CookieConsent;
