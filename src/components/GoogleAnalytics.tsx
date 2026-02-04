import { useEffect } from "react";
import { hasAnalyticsConsent } from "@/utils/cookieConsent";

interface GoogleAnalyticsProps {
    measurementId: string;
}

declare global {
    interface Window {
        dataLayer: unknown[];
        gtag: (...args: unknown[]) => void;
    }
}

const GoogleAnalytics = ({ measurementId }: GoogleAnalyticsProps) => {
    useEffect(() => {
        // Only load if user has consented to analytics
        if (!hasAnalyticsConsent()) {
            return;
        }

        // Check if already loaded
        if (typeof window.gtag === "function") {
            return;
        }

        // Initialize dataLayer
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(...args: unknown[]) {
            window.dataLayer.push(args);
        };
        window.gtag("js", new Date());
        window.gtag("config", measurementId, {
            anonymize_ip: true, // GDPR: Anonymize IP addresses
            cookie_flags: "SameSite=None;Secure", // Secure cookie settings
        });

        // Load gtag script
        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
        document.head.appendChild(script);

        return () => {
            // Cleanup on unmount (though unlikely needed)
            const existingScript = document.querySelector(
                `script[src*="${measurementId}"]`
            );
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, [measurementId]);

    return null; // This component doesn't render anything
};

export default GoogleAnalytics;
