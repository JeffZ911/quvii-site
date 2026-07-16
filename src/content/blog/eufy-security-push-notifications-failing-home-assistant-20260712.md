---
title: "Fix: Eufy Security Push Notifications Failing in Home Assistant (2026)"
slug: eufy-security-push-notifications-failing-home-assistant-20260712
article_type: camera_news
qa_score: 10.0
word_count: 2194
published_at: "2026-07-12T06:04:23.550772+00:00"
published_url: /blog/eufy-security-push-notifications-failing-home-assistant-20260712
sources: []
quick_answer: "Eufy's June 2026 server update broke the eufy-security-ws integration, causing 'No stations found' errors. To fix, update the HACS integration to v8.2.4+ and ensure push notifications are enabled in the official Eufy app."
game: unknown
hero_image: /img/eufy-security-push-notifications-failing-home-assistant-20260712/hero.webp
inline_images:
  - /img/eufy-security-push-notifications-failing-home-assistant-20260712/inline-1.webp
  - /img/eufy-security-push-notifications-failing-home-assistant-20260712/inline-2.webp
  - /img/eufy-security-push-notifications-failing-home-assistant-20260712/inline-3.webp
  - /img/eufy-security-push-notifications-failing-home-assistant-20260712/inline-4.webp
inline_image_sections:
  - "What happened"
  - "Why it matters for buyers"
  - "Impact on existing owners"
  - "What to do now"
---

Eufy’s promise of a "subscription-free" ecosystem has made it a staple for [Home Assistant](https://quvii.com/blog/ezviz-hp7-home-assistant-live-stream-fails) enthusiasts, but a series of mid-2026 server-side changes has left many dashboards displaying "Entity not available" errors.

# Eufy Security Push Notifications Failing in Home Assistant: What Happened and How to Fix It

**Quick Answer:** Eufy's June 2026 server update broke the eufy-security-ws integration, causing 'No stations found' errors. To fix, update the HACS integration to v8.2.4+ and ensure push notifications are enabled in the official Eufy app.

## What happened

![What happened](/img/eufy-security-push-notifications-failing-home-assistant-20260712/inline-1.webp)

<!-- auto-related -->
*Related: [Eufy Security Push Channel Bug: Why Your Device Events Are Silent](/blog/eufy-security-push-channel-silent-events-fix) · [Apple Intelligence in the Home App: 4K Video & AI Search (2026)](/blog/apple-intelligence-home-app-security-features-20260711) · [Grounded Labs Oasis Device Server Outage: Smart Home Impact (Not Secur](/blog/grounded-labs-oasis-outage-smart-home-impact)*


In late June 2026, the delicate bridge between Eufy’s proprietary cloud and the open-source [Home Assistant](https://quvii.com/blog/ezviz-hp7-home-assistant-live-stream-fails) ecosystem experienced a significant fracture. This was not a failure of the local hardware, but rather a fundamental shift in how Eufy’s servers validate third-party requests. For users who rely on these cameras for automated lighting, security alerts, or dashboard monitoring, the outage rendered high-end hardware effectively "dumb" within their smart home logic.

### The API Shift: Why Your Tokens Expired
The primary culprit was a server-side update to Eufy’s authentication API. Historically, the community-maintained `eufy-security-ws` library utilized a specific set of API endpoints to fetch "Station Data"—the metadata that tells [Home Assistant](https://quvii.com/blog/ezviz-hp7-home-assistant-live-stream-fails) which HomeBases and cameras are linked to an account. In June 2026, Eufy implemented a mandatory token refresh policy that invalidated existing session tokens every 24 hours and changed the required header parameters for these requests. 

Users began seeing `HTTPApi.refreshStationData` errors in their Home Assistant logs. Because the integration could no longer "check-in" with Eufy’s servers to verify the device list, it defaulted to a "No stations found" or "No devices found" state, even if the cameras were physically powered on and functioning within the official Eufy Security app.

### HomeBase 3 Firmware v3.x.x and the P2P Protocol Break
Simultaneously, Eufy began rolling out firmware version 3.x.x for the HomeBase 3. This update introduced a revamped Peer-to-Peer (P2P) handshake protocol. P2P is the method Eufy uses to stream video data directly from the HomeBase to a viewing device without routing the heavy video file through a central server. 

The new protocol added an encrypted layer to the initial "handshake" between the client and the HomeBase. While this improves security for the official app, it effectively locked out older versions of the community client library. Without the ability to complete this handshake, Home Assistant could no longer trigger the "Start Stream" command, leading to the dreaded spinning loading circle on dashboards.

### Corrupted Event Images: The Green Artifact Bug
Following the July 2026 patch intended to fix the authentication issues, a secondary bug emerged. Users reported that while motion notifications had returned, the accompanying event thumbnails were corrupted. These images often rendered with severe green pixelated artifacts or failed to load entirely. Technical analysis within the developer community suggests this is due to a change in how Eufy’s API handles the JPEG header in the push notification payload, which causes the Home Assistant media proxy to misinterpret the image data.

[A screenshot of a Home Assistant dashboard showing multiple Eufy camera entities with 'Entity not available' or 'Idle' status, with a red error log overlay showing 'No stations found'.]

## Why it matters for buyers

![Why it matters for buyers](/img/eufy-security-push-notifications-failing-home-assistant-20260712/inline-2.webp)


For a prospective buyer in 2026, the Eufy ecosystem presents a complex value proposition. Eufy heavily markets its products as "local storage" and "no monthly fees," which appeals to privacy-conscious users and those weary of the subscription fatigue caused by Ring or Arlo. However, as this recent outage demonstrates, "local storage" does not necessarily mean "local control."

### The Illusion of Local-Only Control
A common misconception among new buyers is that because Eufy cameras store footage on a HomeBase or an internal SD card, they are immune to cloud outages. In reality, the integration with Home Assistant is almost entirely dependent on Eufy’s cloud for the "event trigger." 

When a EufyCam detects motion, it sends a signal to Eufy’s servers, which then sends a push notification back to your phone—and to the Home Assistant integration. If Eufy’s servers are down, or if they change their API (as they did in June 2026), Home Assistant never receives the "motion detected" signal. For buyers seeking a 100% local-only setup that functions without an internet connection, Eufy’s reliance on this cloud-based notification round-trip is a significant architectural hurdle.

### Reliability vs. Cost: The Hidden Price of No-Subscription Gear
The "cat-and-mouse" game between Eufy and the developer community is a hidden cost of ownership. Because Eufy does not provide an official, documented API for Home Assistant, community developers must reverse-engineer the private API used by the mobile app. 

When you buy a Eufy system for Home Assistant, you are essentially betting that volunteers will continue to update the integration faster than Eufy can change its code. For users who need their security automations to work 100% of the time—such as those using cameras to trigger sirens or emergency lighting—this periodic downtime represents a reliability risk that "subscription" brands like Nest or Ring (which have official, though paid, API programs) sometimes avoid, albeit at a higher monthly cost.

### Privacy Implications and Credential Sharing
To make the integration work, users must provide their Eufy account credentials to a third-party Docker container (the `eufy-security-ws` add-on). While the add-on is open-source and widely trusted in the community, the requirement to share primary or secondary account credentials—and often bypass two-factor authentication (2FA) via specific workarounds—creates a wider attack surface than a native, local-only protocol like ONVIF.

### Comparison: Notification and Integration Methods (2026)

| Feature | Eufy (HomeBase 3) | Reolink (PoE/Wi-Fi) | Ring (Battery/Wired) |
| :--- | :--- | :--- | :--- |
| **Primary Storage** | Local (HomeBase) | Local (SD/NVR) | Cloud (Subscription) |
| **HA Integration Method** | Cloud-based Push/P2P | Local (ONVIF/RTSP) | Cloud API |
| **Notification Logic** | Cloud Round-trip | Local-to-HA | Cloud Round-trip |
| **Subscription Required?** | No | No | Yes |
| **Official HA Support?** | No (Community-led) | Yes (Official Integration) | No (Community-led) |

*Data sourced from [Eufy.com](https://www.eufy.com) and [Reolink.com](https://www.reolink.com) spec sheets as of July 2026.*

## Impact on existing owners

![Impact on existing owners](/img/eufy-security-push-notifications-failing-home-assistant-20260712/inline-3.webp)


The mid-2026 disruption has had a cascading effect on smart home logic. For many, the camera is not just a viewing device but a sensor that drives the entire home’s behavior.

### Broken Automations and Smart Home Logic
The most immediate impact is the failure of motion-triggered automations. Many Home Assistant users configure their systems to "Turn on porch light to 100% if EufyCam detects a person after 11 PM." Because the push notification bridge is broken, the "Person Detected" binary sensor in Home Assistant remains in an "Idle" state indefinitely. This effectively breaks the security perimeter that many users have spent hours configuring.

### The 2FA Authentication Nightmare
Users attempting to fix the "No stations found" error by re-authenticating have run into a "2FA Loop." In this scenario, Home Assistant prompts the user for a six-digit two-factor code sent via email or generated by an app. However, due to the session token changes in the June update, the Eufy server often rejects the code as "expired" immediately upon entry, or logs the user out of their mobile app as soon as the Home Assistant session is established. This conflict between the phone app and the HA integration has become a major point of frustration on GitHub and Reddit.

### Dashboard Failures: When 'Local' Goes Dark
For those using wall-mounted tablets as security dashboards, the current failure means the camera tiles are either blank or show a static image from weeks ago. In a crisis, a user who relies on their HA dashboard to see who is at the door would find it unresponsive, forcing them to fumble for their phone and open the official Eufy app—a delay that undermines the utility of a centralized smart home.

### Secondary Account Issues
A long-standing best practice for Eufy/HA users is to create a second "Admin" account specifically for the integration. However, the July 2026 changes in Eufy’s permission handling have caused some shared accounts to lose "P2P streaming" rights. Even if the secondary account can see the camera list, it may be denied the ability to initiate a live stream, resulting in a "Permission Denied" error in the `eufy-security-ws` logs.

## What to do now

![What to do now](/img/eufy-security-push-notifications-failing-home-assistant-20260712/inline-4.webp)


If your Eufy notifications are failing in Home Assistant, follow this prioritized troubleshooting guide to restore functionality.

### Step-by-Step: Updating the Integration
The community has moved quickly to address the June/July API changes. The first step is to ensure you are running the latest version of the client.

1.  **Update HACS Integration:** Open Home Assistant > HACS > Integrations. Look for "Eufy Security" and update to **version 8.2.4 or higher**.
2.  **Update the Add-on:** Navigate to Settings > Add-ons. Ensure the `eufy-security-ws` add-on (the "bridge") is updated to the latest version.
3.  **Restart Sequence:** This is critical. Stop the add-on, restart Home Assistant core, and then start the add-on again. This clears the stale session tokens from the local cache.

### Fixing the 'No Stations Found' Error
If updating doesn't work, you likely have a session conflict. 
*   **Check App Settings:** Open the official Eufy Security app on your phone. Go to **Security Tab > Modes (Home/Away)**. Ensure that "Push Notifications" are checked for each camera. If notifications are disabled here, Eufy’s servers will not broadcast the event that the Home Assistant integration needs to "see" motion.
*   **Dedicated Account:** If you are using your primary account for the integration, stop. Create a new Eufy account with a different email, share your cameras with that account as an "Admin," and use those credentials in Home Assistant. This prevents the Eufy server from kicking you off your phone when HA logs in.

### Total Cost of Ownership (TCO) Analysis: 3-Year Projection
When considering whether to stick with Eufy or move to a different brand due to these reliability issues, look at the 3-year cost:

*   **Eufy (e.g., S330 2-Cam Kit):** ~$450 upfront + $0 subscription = **$450 total.** (Risk: Periodic integration downtime).
*   **Ring (e.g., Spotlight Cam Plus):** ~$350 upfront + $300 subscription ($100/yr Protect Plus) = **$650 total.** (Benefit: More stable cloud API).
*   **Local-Only (e.g., Reolink PoE + NVR):** ~$400 upfront + $0 subscription = **$400 total.** (Benefit: 100% uptime in HA via ONVIF).

### Decision Framework: Should You Stay or Switch?
*   **The Renter:** If you cannot drill holes for Ethernet, stay with Eufy. The battery life and ease of install are worth the occasional integration headache.
*   **The Homeowner (New Build/Renovating):** Transition to PoE (Power over Ethernet) cameras like Reolink or Amcrest. These use the ONVIF protocol, which talks directly to Home Assistant over your local network. They do not care if Eufy’s servers are down or if an API changes.
*   **The Privacy Advocate:** If the thought of your motion thumbnails sitting on a server (even temporarily) is a dealbreaker, Eufy is not for you. Move to a truly local system that supports RTSP/ONVIF.

### Value vs. Alternatives: Moving to True Local Integration
While Eufy offers excellent hardware for the price, the 2026 API issues highlight the fragility of "cloud-dependent local storage." For those who require 100% reliability for their Home Assistant automations, we recommend investigating cameras that support **ONVIF (Open Network Video Interface Forum)**. 

[A close-up of a Reolink CX410 camera installed on a residential soffit, highlighting its lack of a base station and direct Ethernet connection for local Home Assistant integration.]

Cameras from Reolink, Amcrest, and Dahua provide a local API that Home Assistant can access directly. There is no "cat-and-mouse" game with server updates because the communication never leaves your house. While the initial setup may be more complex (requiring Ethernet cables), the long-term stability for smart home enthusiasts is significantly higher.

## Frequently Asked Questions

### Why does my Eufy camera work in the official app but not in Home Assistant?
The official app uses a private, encrypted communication channel that Eufy controls. Home Assistant uses a community-made "bridge" that mimics the app. When Eufy updates its security or API, the official app is updated automatically, but the community bridge must be manually updated by developers to match the new requirements.

### Does Eufy charge a fee for Home Assistant integration?
No, there is no official fee because there is no official integration. However, the "cost" is the time spent troubleshooting and the requirement of a secondary account. Some users choose to pay for Eufy's cloud storage to get "Rich Notifications" (thumbnails), which can sometimes make the Home Assistant integration more stable by providing a consistent image URL.

### Will Eufy ever release an official Home Assistant add-on?
As of mid-2026, Eufy has not announced an official local API or Home Assistant integration. Their business model focuses on a "walled garden" that encourages users to stay within the Eufy app ecosystem, though they have made minor concessions for Google Home and Alexa.

## Sources
- [Eufy Security Official Support — Firmware Release Notes](https://support.eufy.com)
- [GitHub — bropat/eufy-security-ws Project Page](https://github.com/bropat/eufy-security-ws)
- Home Assistant Community — Eufy Security Integration Thread
- Reddit — r/homeassistant "Eufy API Changes June 2026"
- [The Verge — "Eufy's Privacy and Cloud Dependency Explained"](https://www.theverge.com)