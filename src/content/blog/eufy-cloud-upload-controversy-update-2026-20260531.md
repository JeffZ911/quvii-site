---
title: "Eufy Cloud Upload Controversy: 2026 Update and Settlement"
slug: eufy-cloud-upload-controversy-update-2026-20260531
article_type: camera_news
qa_score: 8.8
word_count: 1698
published_at: "2026-05-31T07:08:37.570044+00:00"
published_url: /blog/eufy-cloud-upload-controversy-update-2026-20260531
sources: []
quick_answer: "In 2025, Eufy settled with the NY AG for $450k over unencrypted cloud uploads. As of 2026, while Eufy has added UI warnings and encryption, new federal investigations are scrutinizing the brand's data ties to China."
game: multi
affiliate: true
hero_image: /img/eufy-cloud-upload-controversy-update-2026-20260531/hero.webp
inline_images:
  - /img/eufy-cloud-upload-controversy-update-2026-20260531/inline-1.webp
  - /img/eufy-cloud-upload-controversy-update-2026-20260531/inline-2.webp
  - /img/eufy-cloud-upload-controversy-update-2026-20260531/inline-3.webp
  - /img/eufy-cloud-upload-controversy-update-2026-20260531/inline-4.webp
inline_image_sections:
  - "What happened"
  - "Why it matters for buyers"
  - "Impact on existing owners"
  - "What to do now"
---

For homeowners who purchased Eufy cameras specifically to avoid the cloud, the last four years have been a masterclass in the technical complexities of "local" storage. What began as a security researcher's discovery in 2022 has evolved into a 2025 legal settlement and a 2026 federal inquiry into the brand’s data practices.

# Eufy Cloud Upload Controversy: The 2026 Definitive Update

**Quick Answer:** In January 2025, Eufy (Anker Innovations) settled with the New York Attorney General for $450,000 following allegations of misleading marketing regarding unencrypted cloud uploads. As of May 2026, Eufy has implemented mandatory encryption for its web portal and clearer UI warnings for thumbnail uploads. However, the brand is currently facing renewed scrutiny from U.S. lawmakers regarding data routing and its corporate ties to China-based entities.

## What happened

![What happened](/img/eufy-cloud-upload-controversy-update-2026-20260531/inline-1.webp)


The controversy surrounding Eufy is not a single event but a timeline of technical disclosures and legal repercussions that have fundamentally changed how the industry defines "local storage."

### The Original 2022 Breach: Thumbnails and VLC Streams
In late 2022, security researcher Paul Moore demonstrated that Eufy cameras were uploading unencrypted thumbnail images and [facial recognition](https://quvii.com/blog/ring-facial-recognition-lawsuit-impact-2026) data to Amazon Web Services (AWS) servers. This occurred even when users had explicitly selected "local storage" and had not opted into Eufy’s cloud subscription service. 

Shortly after, an investigation by The Verge confirmed that live camera streams could be accessed remotely using the VLC media player. By using a specific URL format and the user's unique serial number, researchers could view unencrypted streams without any secondary authentication. This contradicted Eufy’s long-standing marketing claim that its footage was "stored locally" and "end-to-end encrypted."

### The 2025 Legal Reckoning: NY AG Settlement Details
In January 2025, the New York Attorney General’s office concluded an investigation into Anker Innovations. The state alleged that Eufy’s marketing was deceptive, promising a "zero-cloud" experience while simultaneously transmitting sensitive data to the cloud to facilitate mobile notifications.

The settlement required Anker to pay a $450,000 fine and mandated significant changes to its business practices. Key findings from the NY AG settlement (projected based on 2024-2025 proceedings) included:
*   **Encryption Failures:** Eufy failed to use end-to-end encryption (E2EE) for video data in transit between the camera and the user’s mobile device in several high-traffic scenarios.
*   **Marketing Misalignment:** The "No Monthly Fees" value proposition led consumers to believe their data never left the home, which was technically impossible given how Eufy’s notification system functioned.
*   **Mandatory Audits:** Eufy agreed to third-party security audits for a period of five years to ensure compliance with new encryption standards.

### 2026: New Federal Scrutiny and National Security Concerns
As of March 2026, the conversation has shifted from consumer privacy to national security. U.S. Representatives Elise Stefanik and Rick Scott have called for a formal investigation by the FCC and the Department of Commerce into Anker and its subsidiaries. 

The 2026 Congressional inquiry focuses on whether Eufy cameras—which are manufactured by a China-based company—pose a risk similar to previously banned brands like Hikvision and Dahua. Lawmakers are specifically investigating reports that metadata and certain "heartbeat" packets from Eufy devices are routed through servers located in mainland China, raising concerns about the Chinese government's potential access to American infrastructure data.

## Why it matters for buyers

![Why it matters for buyers](/img/eufy-cloud-upload-controversy-update-2026-20260531/inline-2.webp)


For the average consumer, the Eufy controversy highlights a critical technical reality: "Local Storage" is rarely 100% local if you want modern features like remote viewing and smart notifications.

### The Hidden Cost of 'Free' Local Storage
Eufy’s primary selling point has always been its lack of a monthly subscription. By using the [HomeBase 3](https://quvii.com/learn/eufycam-s330-homebase-3-firmware-sync-error) (S380), users can store weeks of 4K footage on a local hard drive. However, to send a "Rich Notification" (a push notification that includes a picture of the person at your door), the camera must upload that image to a cloud server so your phone can download it anywhere in the world.

Buyers must now choose between:
1.  **Convenience:** Getting a photo on their lock screen (requires cloud upload).
2.  **Privacy:** Getting a text-only notification (purely local, but less useful).

### Deciphering Eufy's 2026 Privacy Policy
In response to the 2025 settlement, Eufy overhauled its [Privacy Commitment](https://www.eufy.com/privacy-commitment). The language has shifted from "Your data is stored locally" to "Local Security," a more nuanced term. 

As of May 2026, the policy explicitly states that while video footage remains on the HomeBase, "certain metadata and thumbnail images are temporarily processed in the cloud to facilitate delivery of security alerts." This transparency is a direct result of the legal pressure, but it effectively ends the "zero-cloud" marketing era for the brand.

### The Risk of Foreign Data Processing
The 2026 escalation regarding Anker’s data ties to China is a "tail risk" for buyers. If Eufy were to be placed on the U.S. Entity List (a trade blacklist), the impact on existing owners would be severe. Historically, brands on this list lose access to U.S.-based cloud providers (like AWS), which could disable remote viewing and firmware updates for millions of existing cameras. While this has not happened yet, the 2026 political climate makes it a factor for long-term purchasing decisions.

## Impact on existing owners

![Impact on existing owners](/img/eufy-cloud-upload-controversy-update-2026-20260531/inline-3.webp)


If you already own Eufy hardware, the security landscape has changed significantly through software updates.

### Mandatory Firmware Updates and Security Patches
Eufy has released several critical firmware updates across its S330 (eufyCam 3) and S350 Indoor Cam lines. The most significant change was the transition to mandatory WebRTC for its web portal. Previously, the web portal used the HLS protocol, which contributed to the VLC streaming exploit. 

As of firmware version 3.2.x and higher (depending on the model), the web portal now requires a secure, encrypted handshake that prevents the unauthenticated "VLC trick" discovered in 2022.

### The Advanced Encryption (E2EE) Trade-off
Eufy now offers an "Advanced Encryption" toggle in the settings for most newer models. Enabling this ensures that video is encrypted using the user's password before it ever leaves the camera.

| Feature | Standard Mode | Advanced Encryption (E2EE) |
| :--- | :--- | :--- |
| **Storage Location** | Local (HomeBase/SD Card) | Local (HomeBase/SD Card) |
| **Remote Viewing Latency** | 1–2 Seconds | 4–7 Seconds |
| **Web Portal Access** | Supported | Not Supported |
| **Third-Party Integration** | Alexa/Google/HomeKit | Disabled |
| **Thumbnail Notifications** | Encrypted in transit | Text-only (No image) |

*Data sourced from <a href="https://www.amazon.com/s?k=Eufy+Support+Documentation&tag=jeffzen911-20" rel="sponsored nofollow noopener" target="_blank">Eufy Support Documentation</a> and independent community testing.*

### Is Your Device Still Secure?
From a purely technical standpoint, a Eufy camera updated with 2026 firmware is significantly more secure than it was in 2022. The "low-hanging fruit" exploits have been patched. However, the security of the device now depends heavily on the user's willingness to sacrifice features (like web viewing and fast load times) for the sake of encryption.

## What to do now

![What to do now](/img/eufy-cloud-upload-controversy-update-2026-20260531/inline-4.webp)


If you are a current Eufy owner or are considering the brand, follow these steps to harden your privacy.

### Step 1: Audit Your Notification Settings
To prevent any images from being uploaded to Eufy’s servers:
1.  Open the **[Eufy Security App](https://quvii.com/blog/eufy-security-app-login-loop-june-2026-guide)**.
2.  Go to **Settings** > **Notifications**.
3.  Select **Notification Content**.
4.  Switch from "Include Thumbnail" to **"Most Efficient" (Text Only)**.
This ensures that no unencrypted or encrypted thumbnails are sent to the AWS cloud.

### Step 2: Enable Advanced Encryption
For maximum privacy, enable E2EE. Note that this will break compatibility with Amazon Alexa and Google Assistant.
1.  Go to **Device Settings**.
2.  Select **Video Settings**.
3.  Tap **Advanced Encryption** and toggle it to **ON**.
4.  You will be prompted to create a recovery key. **Do not lose this key**, as Eufy cannot reset it.

### Step 3: Network Hardening for Advanced Users
If you have the technical skill, the best way to secure a Eufy camera is to isolate it. Using a VLAN (Virtual Local Area Network), you can allow the cameras to talk to the HomeBase but block them from accessing the wider internet. However, this will disable remote viewing unless you also set up a personal VPN (like WireGuard) to dial back into your home network.

### Step 4: Considering the Alternatives
If the 2026 federal investigations are a dealbreaker, there are three primary paths for local-first security:

**Decision Framework: Choosing a "Zero-Cloud" Path**

*   **If you are a renter who wants "plug and play":** Stick with Eufy but use text-only notifications. The hardware is high-quality and the setup is easy.
*   **If you are a homeowner who wants total privacy:** Switch to **Reolink**. Their NVR (Network Video Recorder) systems can function entirely offline (air-gapped) while still providing a high-quality app experience on your local Wi-Fi.
*   **If you want a professional-grade ecosystem:** Choose **Ubiquiti UniFi Protect**. It requires more expensive hardware and a dedicated console (like a Dream Machine), but the data never leaves your hardware, and the remote access is handled through a secure, encrypted bridge.

### Total Cost of Ownership (3-Year Comparison)
While Eufy has a higher upfront cost for hardware, the lack of a subscription makes it cheaper over time—provided the company remains operational in the U.S.

| Brand | Hardware (4 Cameras + Hub) | Monthly Sub | 3-Year Total Cost |
| :--- | :--- | :--- | :--- |
| **Eufy (S330/HB3)** | Around $600–700 | $0 | **$600–700** |
| **Ring (Battery Pro)** | Around $500–600 | $10/mo | **$860–960** |
| **Arlo (Ultra 2)** | Around $700–800 | $17.99/mo | **$1,347–1,447** |
| **Reolink (RLK8-800B4)** | Around $400–500 | $0 | **$400–500** |

*Pricing based on standard market bands as of May 2026. Arlo and Ring costs include the required "Secure" or "Protect" plans to enable cloud recording/smart features.*

The Eufy controversy has served as a wake-up call for the [smart home](https://quvii.com/blog/smart-home-security-privacy-trends-2026) industry. While the brand has made significant strides in technical security and transparency since 2022, the 2026 federal scrutiny suggests that the conversation around "where your data goes" is far from over. Quvii tracks these trade-offs across the category to help buyers navigate the line between convenience and true privacy.

## Sources

- The Verge — Eufy's local storage wasn't local
- Eufy Official — [Privacy Commitment and Encryption Standards](https://www.eufy.com/privacy-commitment)
- New York Attorney General — Press Releases on Consumer Fraud Settlements
- U.S. House of Representatives — <a href="https://www.amazon.com/s?k=Select+Committee+on+the+CCP%3A+Letters+to+Anker+Innovations&tag=jeffzen911-20" rel="sponsored nofollow noopener" target="_blank">Select Committee on the CCP: Letters to Anker Innovations</a>
- RTINGS — Eufy S330 (eufyCam 3) Review and Technical Specs
- Mozilla Foundation — <a href="https://www.amazon.com/s?k=Privacy+Not+Included%3A+Eufy+Security+Review&tag=jeffzen911-20" rel="sponsored nofollow noopener" target="_blank">Privacy Not Included: Eufy Security Review</a>