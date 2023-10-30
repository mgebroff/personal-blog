---
title: "Web SDK - Configure Data Stream"
description: Create and Configure Data stream with Experience Platform Service.
author: Michael Mgebroff
authorImage: https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=2936&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
coverImage: https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=2936&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
date: "10-26-2023"
---

1. Ensure the Adobe Experience Platform home page is open.
2. Scroll down the left pane, under DATA COLLECTION, click Data streams. The Data streams page opens.
3. Click New Data stream, as shown.

   ![Adobe](/images/websdk/websdk.png "WebSdk - Configure Data stream")
   The New Data Stream wizard opens.

4. Perform the following, as shown:

   - In the Name box, type Luma Website Datastream - < today’s date> in mm-dd-yyyy format.
   - In the Description box, type Luma Website Datastream for Experience Platform Service.
   - From the Event Schema dropdown, select AEP Demo Website Interactions Schema
     ![Adobe](/images/websdk/websdk2.png "WebSdk - Configure Data stream")

   Note: The Save and Add Mapping option helps map, transform, and validate data to and from XDM. When configuring a Platform- enabled Data stream, you can use data preparation capabilities to map your source data to XDM when sending it to the PlatformEdge Network. For now, you can skip the Save and Add Mapping option for data preparation.

5. Click Save. The Add services page opens.
6. Click Add Service, as shown:
   ![Adobe](/images/websdk/websdk3.png "WebSdk - Configure Data stream")
   The Add Service page opens.
7. Perform the following, as shown:
   - From the Service (required) dropdown, select Adobe Experience Platform.
   - From the Event Dataset (required) dropdown, select AEP Demo – Website Interactions.
   - From the Profile Dataset dropdown, select AEP Demo – Website Registrations.
   - Ensure the Edge Segmentation checkbox is selected.
     ![Adobe](/images/websdk/websdk4.png "WebSdk - Configure Data stream")
8. Click Save to save the configuration with Experience Platform service enabled. The summary page of the Data stream configuration opens, as shown:
   ![Adobe](/images/websdk/websdk5.png "WebSdk - Configure Data stream")
