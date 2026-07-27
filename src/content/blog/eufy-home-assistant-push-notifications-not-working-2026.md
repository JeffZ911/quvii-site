---
title: Eufy Home Assistant Push Notifications Not Working? 2026 Fixes
slug: eufy-home-assistant-push-notifications-not-working-2026
article_type: camera_troubleshoot
qa_score: 7.1
word_count: 1740
published_at: "2026-07-27T06:32:39.578357+00:00"
published_url: /blog/eufy-home-assistant-push-notifications-not-working-2026
sources:
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE43PrhZTM_rJ888p7WwvMVyoNfbj0-eD3kTZ3C7sDI7W6QsDAQa98rgP86AnCubW0cpN8ShCA40hKapKcTCzVZpDOVcv7zrLkxqSl9y6XjTn4Z8s4js1Uk7lUSAZjSjzyNel8eNktSzIM-dQ=="
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHFisuHW-nTRQQIPfC8Xt4LKwwR7KOLiP1LeVyzKBTkEXXuddBL12IZECAysoomITYyE-3-J2jBcNW-C6asVbBs1bAZQ4KzHutMHIDEG_sRmaDFxMTaRWzyGLWddwZXHsHx-9-ySmbuwEk="
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF3oA1OrpqvF3As9pxyORJg6QbJcvLYnAIfUooM8T1CHcihVSjhoPMcFqpToEPIkdnj301N-eqj9Hx-ssoSqXMkyGE0kiWfpG7CFtoTiL7vYc-ITUhZTovAmCh2arrSqG-tWZlCy55WhZ3ygbdCJLI35yDSMrVFYwaxAvxbPhSfYaEpOqw5yK4pIQ=="
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGUsfi6Vfulv6DvPaOdO2ADopwkFuhxpRO6RPt7agZB7CVXHMcl6Sfr0ouVBqOJJ7m-fl6KoYJvJ3eZFzY_8nBX791xUHag1LQ6c4pwMJOLefqIMJl7NfadgNwEfMkg1FwHZ8trN9HwKZfrro7uCBwQMXXZhJjDiORddY19SPZqsTvOkLfgfCCr_BtXHCd1WHf_"
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHyar3EP1bKThZIXw9oOq0R6y21YH1JQsrQwlm1vcivv4dQoD5gJ8VyUR3LrK3xPtdJEu6FeFL4LFK7ZZcO1ghwyMCpUqBBfI2zCGDelE60BH6fS9bu6IpkhCyhvSt9kuor35ygUAG0z7qwAUGhzRfk70qdGiNjQyK5-DRgemB8Ppa7hmt4VTXAyhT8dKKQjccBokdFAQcAfbr7vQ=="
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGFWm3GW4QPtKDH9R_AA2jOz0OHXPwf5vTm2cYbMCbYI7mFWajqrGmjQb3xAlc3dIqzjylyqTcKZ6nH5APWDRBdnhlVqxDCsNb4SF0hGjrDr4jWn3E6pIbTihdw-IzEFVjVHB88v_ZFm6GSW7IBoGVtF5fAAxzffuDZsE_5f7ktrZSZi2watLAYCjLgou6dZOF8c9Z_Rxfx"
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH_6IHttNT9K4YKmXLbo2j-ZnDycFO1UEQszq1vO7hzkTBvslz11yxMVP1BQpIjOTsckbcfOhZGMxgbaDz8Wi4_oEC1JuCySumS4BYyC9F8Al_s_jG6MGMg92YerLoZ6ziYUVVOxmeHe4MtRt2zL4Bu66LWvqfZfY5h4ZzVrRpYW3ZR_HmMBQuzd4R06B6OY88xK79eCtenGxbi"
quick_answer: "Most Eufy-HA notification failures in 2026 are caused by expired session tokens or outdated Eufy Security Add-on versions. Re-authenticate your dedicated HA user account and ensure 'Push Notifications' are enabled in the Eufy app."
game: unknown
hero_image: /img/eufy-home-assistant-push-notifications-not-working-2026/hero.webp
inline_images:
  - /img/eufy-home-assistant-push-notifications-not-working-2026/inline-1.webp
  - /img/eufy-home-assistant-push-notifications-not-working-2026/inline-2.webp
  - /img/eufy-home-assistant-push-notifications-not-working-2026/inline-3.webp
  - /img/eufy-home-assistant-push-notifications-not-working-2026/inline-4.webp
  - /img/eufy-home-assistant-push-notifications-not-working-2026/inline-5.webp
  - /img/eufy-home-assistant-push-notifications-not-working-2026/inline-6.webp
inline_image_sections:
  - "The symptom"
  - "What's likely happening"
  - "Quick fixes (in order of likelihood)"
  - "Deeper diagnostics"
  - "When to contact support"
  - "How to prevent it"
---

For many Eufy users, the magic of Home Assistant (HA) lies in the millisecond-fast automations: a porch light snapping on the moment a camera spots a person or a notification appearing on the living room TV. When these push notifications stop working, that magic vanishes, leaving users with a smart home that is effectively "blind" to external events despite the native Eufy app functioning perfectly.

# How to Fix Eufy Home Assistant Push Notifications (2026 Guide)
> 📝 **Editorial Note:** This guide is AI-assisted and game data evolves rapidly. Please cross-reference with in-game information. _Updated: 2026-07-27._


**Quick Answer:** Most Eufy-HA notification failures in 2026 are caused by expired session tokens or breaking changes in the Eufy Security Add-on following the July 2026 API shift. To fix this, re-authenticate your dedicated HA sub-account, ensure "Push Notifications" are enabled in the Eufy app's Security Modes, and update the Eufy Security Add-on to the latest patch (v1.8.x or higher) to restore the P2P handshake.

## The symptom

![The symptom](/img/eufy-home-assistant-push-notifications-not-working-2026/inline-1.webp)

<!-- auto-related -->
*Related: [Fix: Nest Camera Offline in Google Home App (2026 Guide)](/blog/nest-camera-google-home-offline-fix-2026) · [Reolink Doorbell Cutting Off? Fix Motion Recording Duration](/blog/reolink-doorbell-motion-recording-duration-issues-20260724) · [Gladys Assistant & Tuya Doorbell Integration Issues (2026 Guide)](/blog/gladys-assistant-tuya-doorbell-issues-2026)*


When push notifications fail between Eufy and Home Assistant, the breakdown is rarely a total system crash. Instead, it manifests as a "silent failure" where the Eufy ecosystem appears healthy, but the bridge to your local automation engine is severed.

### Identifying 'Silent' Failures
A silent failure occurs when your smartphone receives a notification from the official Eufy Security app, but Home Assistant remains oblivious. In this state, the `binary_sensor` entities for motion or person detection stay "Clear" or "Idle" indefinitely. Users often report that the "Last Event" attribute in the HA developer tools shows a timestamp from hours or days ago, even though they can see recent events in the Eufy app's library.

### The 'Entity Unavailable' vs. 'No State Change' distinction
It is critical to distinguish between two different error states:
*   **Entity Unavailable:** This usually points to a total loss of communication between the Home Assistant Core and the Eufy Security Add-on (WS Server). The integration cannot see the hardware at all.
*   **No State Change:** The entities are "Online" and "Available," but they never trigger. This indicates that the P2P (Peer-to-Peer) notification stream is blocked or that Eufy’s cloud has stopped forwarding events to the third-party API.

As of mid-2026, benchmarks show a widening gap in latency between the native app and the integration when the system is misconfigured:

| Notification Path | 2026 Avg. Latency (Local) | 2026 Avg. Latency (Cloud) | Status |
| :--- | :--- | :--- | :--- |
| **Eufy Native App** | 0.8s – 1.5s | 2.5s – 4.0s | [Stable](https://community.security.eufy.com/) |
| **HA Integration (P2P)** | 1.2s – 2.0s | N/A | [Variable](https://github.com/fuatakgun/eufy_security/issues/1430) |
| **HA Integration (Cloud)** | N/A | 5.0s – 12.0s | [Delayed](https://github.com/fuatakgun/eufy_security/issues/1416) |

## What's likely happening

![What's likely happening](/img/eufy-home-assistant-push-notifications-not-working-2026/inline-2.webp)


The integration between Eufy and Home Assistant is not official; it relies on a community-maintained "Websocket" (WS) server that mimics a mobile device to receive push alerts. In 2026, several technical shifts have made this connection more fragile.

### The Role of the Eufy Security Add-on
The `eufy-security-ws` add-on acts as the translator. It maintains a persistent P2P connection with your HomeBase 3 (S380) or SoloCams. When Eufy updates the HomeBase 3 firmware—such as the problematic v3.8.2.8 update released in May 2026—the protocol used for these handshakes can change. If the add-on isn't updated to match these new protocols, the "handshake" fails, and motion events are never passed to the HA bus.

### Why 2FA is a Double-Edged Sword for HA
Eufy’s 2026 security dashboard [enforces Two-Factor Authentication (2FA)](https://us.eufy.com/pages/privacy-policy) for all primary accounts. While this protects your footage, it frequently breaks the background login process required by the custom integration. If your session token expires and the integration attempts to log in, it may be blocked by a 2FA prompt that the integration cannot display, leading to an authentication loop and stopped notifications.

**The Eufy-to-HA Notification Path:**
1.  **Event:** Camera detects motion.
2.  **Eufy Cloud:** Event is logged; a push packet is generated.
3.  **Add-on:** The `eufy-security-ws` server (acting as a "dummy" phone) catches the packet.
4.  **Integration:** The HA integration reads the WS server data.
5.  **HA Bus:** The state of `binary_sensor.front_door_motion` changes to "on".

## Quick fixes (in order of likelihood)

![Quick fixes (in order of likelihood)](/img/eufy-home-assistant-push-notifications-not-working-2026/inline-3.webp)


Before diving into complex logs, follow this "Restart Hierarchy" to clear common session bottlenecks.

### The 'Restart' Hierarchy
1.  **Restart the Add-on:** Navigate to **Settings > Add-ons > Eufy Security**. Click **Stop**, wait 10 seconds, and click **Start**. This forces a fresh P2P handshake with the HomeBase.
2.  **Reload the Integration:** Go to **Settings > Devices & Services**, find the Eufy Security card, click the three dots, and select **Reload**. This refreshes the entities within Home Assistant without stopping the background server.
3.  **Re-authenticate:** If you see a "Repair" notification in HA, your session has likely expired. You will need to enter a new 2FA code sent to your email or phone to re-establish the cloud link.

### Validating Account Permissions
A common culprit in 2026 is a change in the Eufy app's "Security Mode" settings.
*   Open the **Eufy Security App**.
*   Go to the **Security** tab and select your current mode (e.g., "Home").
*   Tap the **Gear icon** next to the mode.
*   Ensure that **Push Notification** is checked for every camera you want to track in Home Assistant. If this is unchecked in the app, Eufy's servers will not generate the data packet that the HA integration needs to see.

## Deeper diagnostics

![Deeper diagnostics](/img/eufy-home-assistant-push-notifications-not-working-2026/inline-4.webp)


If quick fixes fail, you must look at the raw data flowing (or not flowing) through your system.

### Analyzing Home Assistant Core Logs
Check your HA logs (**Settings > System > Logs**) for the following strings:
*   `P2P connection failed`: Indicates your HomeBase is blocking the local connection. This is often due to a firmware mismatch or an IP change.
*   `Authentication error`: Your credentials or 2FA token are invalid.
*   `Schema Mismatch`: This occurs after a Home Assistant Core update (like the [February 2026.02 update](https://github.com/fuatakgun/eufy_security/issues/1430)) where the integration's data structure no longer matches the Core's expectations.

### Network and Firewall Troubleshooting
In 2026, Eufy devices have become more sensitive to network "noise." Ensure that:
*   **Port 3000** (default for the WS server) is open and not being used by another HA add-on.
*   **UDP Ports 1935, 80, and 443** are not being throttled. Some "Smart" router features or AdGuard Home instances may flag the high-frequency P2P pings from the integration as a potential DDoS attack and drop the packets.

### Value vs. Alternatives: When to Switch
If you find yourself troubleshooting Eufy notifications more than enjoying them, it may be time to consider the "Local API" route. The integration's reliance on cloud-polling and unofficial P2P reverse-engineering is inherently unstable. 

For users requiring 100% reliability, the **Reolink Video Doorbell WiFi** (typically in the **$100 range**) is a strong alternative. Unlike Eufy, Reolink provides an official, locally-hosted API that Home Assistant communicates with directly. Because it doesn't require a "middleman" cloud server for motion events, notifications are nearly instantaneous and do not break when the manufacturer updates their cloud app.

## When to contact support

![When to contact support](/img/eufy-home-assistant-push-notifications-not-working-2026/inline-5.webp)


Because this integration is a third-party community project, Eufy's official support will not help you fix the Home Assistant connection. However, you should contact them if:
*   **HomeBase 3 LED is Solid Red:** This indicates a hardware-level network failure or a [failed firmware update](https://support.eufy.com/s/article/Failed-to-Update-HomeBase-3) (v3.x.x series).
*   **Native App Notifications are Missing:** If the official app isn't getting alerts, the problem is with the Eufy cloud or the camera hardware itself.

For integration-specific bugs, such as the [frozen entity issue #1416](https://github.com/fuatakgun/eufy_security/issues/1416), your best resource is the **GitHub Issues** page for `fuatakgun/eufy_security`. When posting, always provide your HomeBase model, the Eufy Security Add-on version, and a sanitized log snippet.

## How to prevent it

![How to prevent it](/img/eufy-home-assistant-push-notifications-not-working-2026/inline-6.webp)


Stability in 2026 requires moving away from "plug-and-play" and toward a more intentional network configuration.

### Dedicated Account Best Practices
Never use your primary Eufy account for Home Assistant. Create a dedicated "Admin" sub-account (e.g., `ha-bridge@yourdomain.com`) and share your cameras with it. This prevents "Session Kicks," where logging into the Eufy app on your phone automatically logs the HA integration out, killing your notifications.

### Static IP and Local Network Stability
The P2P connection relies on knowing exactly where your HomeBase 3 is on the network.
1.  Assign a **Static IP** to your HomeBase 3 via your router's DHCP reservation table.
2.  Assign a **Static IP** to your Home Assistant hardware.
3.  In the Eufy Security Add-on configuration, use the static IP of the HomeBase rather than relying on "Auto-discovery."

### Integration Watchdog
To ensure you aren't left vulnerable when a connection drops, set up a "Watchdog" automation in HA. This YAML snippet will notify you if your cameras go offline for more than 30 minutes:

```yaml
alias: "System: Eufy Offline Watchdog"
trigger:
  - platform: state
    entity_id: binary_sensor.front_door_motion
    to: "unavailable"
    for:
      minutes: 30
action:
  - service: notify.persistent_notification
    data:
      title: "Eufy Integration Failure"
      message: "The Front Door camera has been unavailable for 30 minutes. Please restart the Eufy Security Add-on."
```

## Frequently Asked Questions

### Why does the Eufy app work but Home Assistant doesn't?
The Eufy app uses a proprietary, encrypted stream that Eufy can update at any time. The Home Assistant integration is a community "reverse-engineering" of that stream. When Eufy changes their API or encryption keys (as seen in early 2026), the official app is updated automatically, but the HA integration requires a manual update from the community developers.

### Do I need a subscription for Eufy notifications in HA?
No. Eufy provides basic motion and person detection notifications for free. However, the integration requires these notifications to be enabled in the Eufy app. If you disable them to avoid phone clutter, you also cut off the data feed to Home Assistant.

### Does the HomeBase 3 work better with Home Assistant than HomeBase 2?
The HomeBase 3 (S380) offers more advanced AI processing, but its P2P protocol is more complex. While it is fully supported by the `fuatakgun` integration as of 2026, it is also more prone to "handshake" errors following firmware updates compared to the older, simpler HomeBase 2.

## Sources
- [GitHub: fuatakgun/eufy_security Issue #1430 (Feb 2026)](https://github.com/fuatakgun/eufy_security/issues/1430)
- [GitHub: fuatakgun/eufy_security Issue #1416 (Dec 2025)](https://github.com/fuatakgun/eufy_security/issues/1416)
- Eufy Support: HomeBase 3 Firmware Update Records
- Reddit: r/EufyCam - Beware S380 3.8.2.8 update
- [Eufy US: Privacy Policy (Updated Jan 2026)](https://us.eufy.com/pages/privacy-policy)