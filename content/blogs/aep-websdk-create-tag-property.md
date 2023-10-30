---
title: "Web SDK - Create a Tag Property"
description: Web SDK - Create a Tag Property for a Luma Website.
author: Michael Mgebroff
authorImage: https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=3474&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
coverImage: https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=3474&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
date: "10-26-2023"
---

1. Go to the Adobe Experience Platform Data Collection browser tab.
2. On the left pane, under DATA COLLECTION, click Tags, as shown:

   ![Adobe](/images/websdk/websdk6.png "Web SDK - Create a Tag Property")
   The Tag Properties page opens

3. Click New Property. The Create Property dialog opens.
4. Perform the following, as shown:

   - In the Name box, type Luma Web Property.
   - In the Domains box, type enablementadobe.com.
     ![Adobe](/images/websdk/websdk7.png "Web SDK - Create a Tag Property")

5. Expand the ADVANCED OPTIONS section:

   - Ensure the Run rule components in sequence checkbox is selected.
   - Ensure the Return an empty string for missing data elements checkbox is not selected for this training.

   Note: You can s elect Return an empty string for missing data elements checkbox if you want undefined values to be empty rather than the default values.

6. Click Save. The new property is created and listed in the Tag Properties page.
7. In the Search box, type Luma Website Property. The property that you created in the previous activity appears in the filter list, as shown:
   ![Adobe](/images/websdk/websdk8.png "Web SDK - Create a Tag Property")
