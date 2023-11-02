---
title: "Web SDK - Event Forwarding"
description: Configure Event Forwarding in Adobe Data Collect.
author: Michael Mgebroff
authorImage: https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=3570&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
coverImage: https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=3570&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
date: "10-31-2023"
---

1. Create an E vent Forwarding property
2. Configure a Data stream
3. Configure Event Forwarding to send event data to a non- Adobe application

## Create an Event Forwarding Property

1. Open the Adobe Experience Platform Data Collection > Tag Properties browser tab.
2. Click Tag Properties, as shown:
   ![Adobe](/images/websdk/websdk48.png "Web SDK - Event Forwarding")
   The Tag Properties page opens.
3. On the left pane, under DATA COLLECTION, click Event Forwarding, as shown:
   ![Adobe](/images/websdk/websdk49.png "Web SDK - Event Forwarding")
   The Event Forwarding Propertied page opens.
4. Click New Property. The Create Property page opens.
5. In the Name box, type Luma Server- Side Web SDK
   ![Adobe](/images/websdk/websdk50.png "Web SDK - Event Forwarding")
6. Verify whether the property that you created is listed on the Event Forwarding Properties page.

## Configure a Data stream

For Event Forwarding to use the data you send to the Edge network, you must link the newly createdE vent Forwarding property to the same Data stream used to send data to Adobe solutions.

1. Ensure the Event Forwarding Properties page is open.
2. On the left pane, under DATA COLLECTION, click Data streams, as shown:
   ![Adobe](/images/websdk/websdk51.png "Web SDK - Event Forwarding")
   The Data streams page opens.
3. In the Search box, type Luma Website Data stream and pressEnter. Your Data stream appears in the filter.
4. Click Luma Website Data stream as shown:
   ![Adobe](/images/websdk/websdk52.png "Web SDK - Event Forwarding")
   The Luma Website Data stream - page opens.
5. Click Add Service, as shown:
   ![Adobe](/images/websdk/websdk53.png "Web SDK - Event Forwarding")
   The Add Service page opens.
6. Perform the following actions, as shown:

   - From the Service (required) dropdown, select Event Forwarding.
   - Ensure the Enabled toggle key is set to Turned on.
   - From the Property dropdown, select Luma <date> Server - Side - WebSDK.
   - From the Environment dropdown, select Development.
     ![Adobe](/images/websdk/websdk54.png "Web SDK - Event Forwarding")

   Note: Repeat the steps 5 and 6 for Staging and nd Production Data streams when you are ready to promote the changes through the publishing flow.

7. Click Save. Your Data stream page opens.
8. Notice that the Event Forwarding service is added to your Data stream, as shown:
   ![Adobe](/images/websdk/websdk55.png "Web SDK - Event Forwarding")
