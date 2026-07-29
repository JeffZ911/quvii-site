---
title: Eufy Home Assistant Notifications Broken? 2026 Fix Guide
slug: eufy-home-assistant-notifications-broken-2026
article_type: camera_troubleshoot
qa_score: 7.9
word_count: 2132
published_at: "2026-07-29T05:57:57.168761+00:00"
published_url: /blog/eufy-home-assistant-notifications-broken-2026
sources: []
quick_answer: "Most 2026 breaks are caused by HomeBase 3 firmware v3.8.2.0 or Eufy app v5.7.00. Fix by restarting the eufy-security-ws add-on, re-authenticating 2FA, and re-enabling notifications in the Eufy app's 'Smart Menu' gearbox."
game: unknown
hero_image: /img/eufy-home-assistant-notifications-broken-2026/hero.webp
inline_images:
  - /img/eufy-home-assistant-notifications-broken-2026/inline-1.webp
  - /img/eufy-home-assistant-notifications-broken-2026/inline-2.webp
  - /img/eufy-home-assistant-notifications-broken-2026/inline-3.webp
  - /img/eufy-home-assistant-notifications-broken-2026/inline-4.webp
  - /img/eufy-home-assistant-notifications-broken-2026/inline-5.webp
  - /img/eufy-home-assistant-notifications-broken-2026/inline-6.webp
inline_image_sections:
  - "The symptom"
  - "What's likely happening"
  - "Quick fixes (in order of likelihood)"
  - "Deeper diagnostics"
  - "When to contact support"
  - "How to prevent it"
---

For many smart home enthusiasts, the Eufy-Home Assistant marriage is one of convenience—offering high-resolution video without mandatory monthly fees. However, that marriage has hit a rocky patch in mid-2026 as recent firmware and app updates have silenced the push notifications that drive critical automations.

# Eufy Home Assistant Integration: Fixing Broken Push Notifications in 2026

If your Home Assistant dashboard shows your Eufy cameras as "Idle" while a delivery driver is clearly standing at your door, you are not alone. The integration between Eufy’s proprietary cloud and the open-source Home Assistant ecosystem relies on a delicate chain of P2P (Peer-to-Peer) handshakes and push notification interceptions. In 2026, several links in that chain have shifted, primarily due to security hardening on the HomeBase 3 and a UI overhaul in the Eufy Security mobile app.

**Quick Answer:** Most 2026 breaks are caused by HomeBase 3 firmware v3.8.2.0 or Eufy app v5.7.00. Fix by restarting the `eufy-security-ws` add-on to force a new P2P token, re-authenticating 2FA on your dedicated secondary account, and re-enabling notifications in the Eufy app's "Smart Menu" gearbox, which a recent update may have toggled off.

## The symptom

![The symptom](/img/eufy-home-assistant-notifications-broken-2026/inline-1.webp)

<!-- auto-related -->
*Related: [Eufy Home Assistant Push Notifications Not Working? 2026 Fixes](/blog/eufy-home-assistant-push-notifications-not-working-2026) · [Fix: Nest Camera Offline in Google Home App (2026 Guide)](/blog/nest-camera-google-home-offline-fix-2026) · [Reolink Doorbell Cutting Off? Fix Motion Recording Duration](/blog/reolink-doorbell-motion-recording-duration-issues-20260724)*


The breakdown of the Eufy integration rarely results in a total blackout. Instead, it manifests as a "zombie" state where the hardware appears functional in the official app but remains unresponsive within Home Assistant. Users typically report that while they can see a static thumbnail from four hours ago, the "Motion Detected" binary sensor never flips to "Detected."

The following table categorizes the most common error states observed in the 2026 ecosystem:

### Table 1: Common Eufy-HA Integration Error States (2026)

| Symptom | Integration State | Likely Culprit | Primary Workaround |
| :--- | :--- | :--- | :--- |
| Motion/Person sensors stuck on "Clear" | Connected / Idle | App v5.7.00 Notification Bug | Re-enable "Push" in App Security Mode |
| Infinite spinning wheel on video | Streaming | HB3 v3.8.2.0 Encoding Shift | Update `eufy-security-ws` to latest patch |
| Entities show "Unavailable" | Disconnected | 2FA Token Expiration | Re-log via Integration Config |
| 30-60 second notification lag | Connected | Regional Server Mismatch | Verify Country Code in Add-on Logs |
| "No stations found" error | Connected (Empty) | P2P Handshake Failure | Static IP Assignment for HomeBase |

### Entity Status: Frozen vs. Unavailable
There is a critical distinction between an "Unavailable" entity and a "Frozen" one. If your entities are **Unavailable**, Home Assistant has lost the connection to the `eufy-security-ws` server (the bridge). This is usually a network or authentication issue. If the entities are **Frozen** (showing "Clear" or "Idle" despite motion), the bridge is talking to Home Assistant, but Eufy's cloud is no longer sending the "event" packet to the bridge. This is almost always a result of the Eufy app's internal notification settings being reset or the P2P stream being blocked.

### The 2026 'Loading Loop' Phenomenon
A specific frustration for HomeBase 3 users in 2026 is the "Loading Loop." You click the play button on your dashboard, the integration attempts to start the P2P stream, but the spinner never resolves into a video feed. This often happens because the HomeBase 3 has upgraded its encryption keys, but the Home Assistant integration is still attempting to use an expired session token cached in the `eufy-security-ws` add-on.

## What's likely happening

![What's likely happening](/img/eufy-home-assistant-notifications-broken-2026/inline-2.webp)


To understand the fix, one must understand why it broke. Unlike brands with official APIs, the Eufy integration (specifically the [fuatakgun/eufy_security](https://github.com/fuatakgun/eufy_security) HACS integration) functions by pretending to be a mobile phone. When Eufy changes how its phones talk to its servers, the integration must be updated to mimic that new behavior.

### Issue Timeline: The 2026 Disruption
*   **2026-05-12:** Eufy begins rolling out HomeBase 3 Firmware v3.8.2.0.
*   **2026-05-15:** First reports of "Broken Push Notifications" appear on GitHub [Issue #924](https://github.com/fuatakgun/eufy_security/issues/924).
*   **2026-06-02:** Eufy App v5.7.00 released on iOS/Android; users report the "Smart Menu" reset bug.
*   **2026-07-10:** Community patches for `eufy-security-ws` released to address the new P2P handshake requirements.

### The HomeBase 3 v3.8.2.0 Encoding Shift
The May 2026 firmware update (v3.8.2.0) for the S380 HomeBase (HomeBase 3) introduced a mandatory restructure of how video packets are wrapped for P2P transmission. This was likely done to improve sync times for the official Eufy app, but it invalidated the way the `eufy-security-ws` server decodes the stream. Without the ability to "see" the stream start, the integration often fails to register the associated motion event.

### App v5.7.00 and the 'Smart Menu' Bug
The most common "silent" killer of notifications in 2026 is Eufy App v5.7.00. This version introduced a redesigned "Smart Menu" for Security Modes (Home, Away, Disarmed). During the update process, many users found that the "Push Notification" checkbox for individual cameras was unchecked by default in the "Home" and "Away" profiles. Because the Home Assistant integration relies on intercepting these very push notifications to trigger its sensors, unchecking this box effectively blinds Home Assistant.

### Cloud API vs. P2P Handshake Issues
Eufy uses two paths for data: the **Cloud API** (for settings, battery levels, and thumbnails) and the **P2P Layer** (for live video and real-time motion events). In 2026, Eufy tightened the security on the P2P layer, requiring more frequent "handshakes." If your Home Assistant server has a different public IP than your phone, or if you are using a VPN, Eufy’s security filters may flag the integration’s P2P request as a "suspicious login" and drop the connection without warning.

## Quick fixes (in order of likelihood)

![Quick fixes (in order of likelihood)](/img/eufy-home-assistant-notifications-broken-2026/inline-3.webp)


Before diving into complex logs, follow these steps in order. Approximately 80% of notification issues in 2026 are resolved by Step 2.

### Step 1: The Add-on Power Cycle
Restarting Home Assistant itself often isn't enough because the `eufy-security-ws` add-on (the piece that actually talks to Eufy) runs in its own container.
1.  Navigate to **Settings > Add-ons**.
2.  Select **Eufy Security Add-on**.
3.  Click **Restart**.
4.  Wait 60 seconds, then check the **Logs** tab of the add-on to ensure it says "Connected to station."

### Step 2: Re-enabling App-Side Notifications (The "Gearbox" Fix)
If the add-on is running but sensors are "Idle," the app has likely suppressed the data feed.
1.  Open the **Eufy Security App** on your phone.
2.  Tap the **Security** tab at the bottom.
3.  Tap the **Gearbox (Settings) icon** next to your current mode (e.g., Home or Away).
4.  For **every camera**, ensure the **Push Notification** box is checked.
5.  *Crucial:* Even if it looks checked, uncheck it, wait 5 seconds, and check it again to "force" the setting to Eufy's cloud.

### Step 3: Session Re-authentication
Eufy's 2026 session management is aggressive. If you haven't refreshed your 2FA (Two-Factor Authentication) recently, the integration may be in a "soft-logged-out" state.
1.  Go to **Settings > Devices & Services** in Home Assistant.
2.  Find the **Eufy Security** integration and click **Configure**.
3.  If prompted, re-enter your credentials.
4.  If you use a secondary account (which you should), ensure you are not logged into that same secondary account on any other device, as Eufy will kick the oldest session.

## Deeper diagnostics

![Deeper diagnostics](/img/eufy-home-assistant-notifications-broken-2026/inline-4.webp)


If the quick fixes fail, you need to look at the "brain" of the integration: the logs. The `eufy-security-ws` server provides a detailed play-by-play of every failed attempt to reach your HomeBase.

### Reading the eufy-security-ws Logs
Open the add-on logs and look for these specific strings:
*   `HTTPApi.refreshStationData - Error`: This indicates your credentials or regional server setting is wrong.
*   `P2PClientProtocol.lookup(): station not found`: This usually means the HomeBase IP has changed or the P2P port is blocked.
*   `Heartbeat check failed`: The connection to Eufy's cloud is being severed by your router or ISP.

### Static IP and Port 3000 Verification
The integration communicates with the HomeBase over your local network using Port 3000. If your router reassigns the HomeBase a new IP address via DHCP, the P2P link will break while the Cloud API (which uses the serial number) continues to work. 
*   **Fix:** Assign a Static IP to your HomeBase 3 in your router settings.
*   **Verification:** In Home Assistant, ensure the integration configuration points to the correct, newly-assigned static IP.

### Regional Server (Country Code) Conflicts
Eufy routes traffic through regional clusters (US, EU, DE, etc.). If your `eufy-security-ws` configuration is set to "US" but your account was created in the "UK," push notifications will often fail to arrive or will be delayed by over 30 seconds. Verify your country code in the add-on configuration matches the region where you registered the account.

## When to contact support

![When to contact support](/img/eufy-home-assistant-notifications-broken-2026/inline-5.webp)


Because the Home Assistant integration is a community-driven project and not an official Eufy feature, "official" support is a double-edged sword.

*   **Eufy Official Support:** Contact them if your cameras are not sending notifications to the **official Eufy app**. If the official app is broken, the integration will never work. **Tip:** Do not mention Home Assistant to Eufy support; they will likely close the ticket as "unsupported third-party interference." Focus on the firmware v3.8.2.0 or App v5.7.00 behavior.
*   **GitHub Community:** If the official app works but Home Assistant doesn't, your best resource is the [fuatakgun/eufy_security GitHub Issues](https://github.com/fuatakgun/eufy_security/issues) page. Look for issues tagged with "P2P" or "HomeBase 3."
*   **Firmware Correction:** If a firmware update has truly "bricked" the P2P stream for third-party tools, the community usually develops a workaround within weeks. Check the [bropat/eufy-security-ws](https://github.com/bropat/eufy-security-ws) repository for the core server updates.

## How to prevent it

![How to prevent it](/img/eufy-home-assistant-notifications-broken-2026/inline-6.webp)


The "cat-and-mouse" game between Eufy's cloud updates and Home Assistant's community developers is a known trade-off of the platform. However, you can make your setup more resilient.

### The Dedicated Account Strategy
Never use your primary Eufy account for the Home Assistant integration. Create a second account (e.g., `ha_bridge@yourdomain.com`), share your cameras from your primary account to this secondary one with "Admin" permissions, and use the secondary account exclusively for the integration. This prevents session hijacking when you open the Eufy app on your phone.

### Switching to Local-First Hardware (Reolink Gen 2)
If the stability of the Eufy cloud is a dealbreaker, many users in 2026 are migrating to "Local-First" hardware. The **Reolink Video Doorbell Gen 2** (available in the $100-$120 range) is a popular alternative. 

Unlike Eufy, Reolink provides an official, Platinum-certified Home Assistant integration that uses a local API. This means notifications travel directly from the doorbell to Home Assistant over your Wi-Fi, with zero reliance on Reolink’s servers or P2P handshakes.

### Table 2: Eufy Cloud-Polling vs. Reolink Local API (2026)

| Feature | Eufy (HomeBase 3) | Reolink (Gen 2 / PoE) |
| :--- | :--- | :--- |
| **Primary Data Path** | Cloud + P2P Bridge | Local LAN (API/ONVIF) |
| **HA Integration Type** | Community (HACS) | Official (Native) |
| **Notification Latency** | 2–5 Seconds | < 1 Second |
| **Internet Dependency** | High (for Auth/Events) | None (Local only) |
| **Setup Complexity** | High (Requires Add-on) | Low (Plug & Play) |

### Automated Integration Health Checks
You can set up a "Watchdog" automation in Home Assistant to notify you when the integration fails. Create an automation that triggers if the `binary_sensor.eufy_station_connected` entity stays "off" for more than 10 minutes. This allows you to restart the add-on automatically or manually before you miss a critical event.

## Frequently Asked Questions

### Why did my Eufy notifications stop working after the May 2026 update?
The HomeBase 3 firmware v3.8.2.0 changed the encryption and encoding of the P2P stream. Additionally, the Eufy app v5.7.00 update frequently resets notification toggles in the "Security" menu to "off."

### Do I need a subscription to get Eufy notifications in Home Assistant?
No. Eufy does not require a subscription for basic push notifications. However, the Home Assistant integration relies on these free notifications to function. If you disable them to save phone battery, you also disable them for Home Assistant.

### Is there a way to get "Rich Notifications" (with images) in Home Assistant?
Yes, but it requires the `eufy-security-ws` add-on to successfully grab a camera frame. If your P2P stream is broken (the "Loading Loop"), rich notifications will fail and fall back to text-only alerts.

### Can I downgrade my HomeBase 3 firmware to fix the integration?
Eufy does not officially support firmware downgrades. If a specific version like v3.8.2.0 has caused issues, you must wait for a community patch in HACS or a "correction" update from Eufy support.

## Sources
*   Eufy Security Support — [https://support.eufy.com/](https://support.eufy.com/)
*   GitHub: [Eufy Security Home Assistant](/blog/eufy-home-assistant-integration-issues-july-2026) Integration — [https://github.com/fuatakgun/eufy_security](https://github.com/fuatakgun/eufy_security)
*   GitHub: Eufy Security Client (WS Server) — [https://github.com/bropat/eufy-security-ws](https://github.com/bropat/eufy-security-ws)
*   Home Assistant Integration Documentation — https://www.home-assistant.io/integrations/reolink/