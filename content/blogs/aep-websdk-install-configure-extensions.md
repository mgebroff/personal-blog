---
title: "Web SDK - Configure Extensions"
description: Install and Configure Extensions in Data Collect.
author: Michael Mgebroff
authorImage: https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
coverImage: https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
date: "10-26-2023"
---

1. Install and configure Experience Platform Web SDK Extension.
2. Install and configure Experience Cloud ID Service Extension.
3. Install and configure Adobe Client Data Layer Extension.

## Install and Configure Experience Platform Web SDK Extension

Note: Ensure you have created a Data stream and a T ag property for Luma Website

1. Ensure the Tag Properties page with the property that you created in the previous activity is open.
2. Click Luma Website Property, as shown:
   ![Adobe](/images/websdk/websdk9.png "Web SDK - Configure Extensions")
   The Luma Website Property page opens.
3. On the left pane, click Extensions. The installed extensions are displayed.
4. Notice that the Core extension is installed by default, as shown:
   ![Adobe](/images/websdk/websdk10.png "Web SDK - Configure Extensions")
5. Click the Catalog tab, as shown:
   ![Adobe](/images/websdk/websdk11.png "Web SDK - Configure Extensions")
   All available extensions are displayed.
6. In the Search box, type Adobe Experience Platform and press Enter. The Adobe ExperiencePlatform Web SDK appears.
7. Click Install, as shown:
   ![Adobe](/images/websdk/websdk12.png "Web SDK - Configure Extensions")
   The Install Extension page opens. You can configure the extension in this page.
8. Scroll down the page and look for Data Streams.
9. From the Production Environment dropdown, select PRODUCTION Prod (VA7), as shown:
   ![Adobe](/images/websdk/websdk13.png "Web SDK - Configure Extensions")
10. From the Select a data stream dropdown, select the data stream that you created in previous activity,for example, Luma Website Data stream , as shown:
    ![Adobe](/images/websdk/websdk14.png "Web SDK - Configure Extensions")
11. From the Staging Environment and Development Environment dropdowns, select PRODUCTIONProd (VA7).
12. For the Select a data stream dropdowns under Staging Environment and DevelopmentEnvironment, select the Data stream that you created in previous activity, for example, Luma Website Data stream.
13. Click Save. The extension is configured and installed, and is now available on the Installed tab, as shown:
    ![Adobe](/images/websdk/websdk15.png "Web SDK - Configure Extensions")

    Note: You will use this extension in subsequent steps.

## Install the Experience Cloud ID Service

The Experience Cloud ID Service extension enables you to integrate the Experience Cloud ID Service with the property you created earlier. You will use this service for creating and storing unique and persistent identifiers for your website visitors.

1. Ensure the Installed tab of Luma Web Property.
2. Click Catalog to access the available extensions.
3. In the Search box, type Experience Cloud and press Enter. The Experience Cloud ID Service appears.
4. Click Install, as shown:
   ![Adobe](/images/websdk/websdk15.png "Web SDK - Configure Extensions")
   The Install Extension page opens.
5. Notice that the Marketing Cloud Organization ID box is updated by default. The ID is a 24- character,alphanumeric string followed by @AdobeOrg.

   Note: If the Marketing Cloud Organization ID box is not auto populated and if you do not know this ID, you need to contact the Customer Care.

6. Leave the Exclude specific paths box blank.

   Note: If you update Exclude specific paths, the Experience Cloud ID does not load when the URL matches any of the specified paths.

7. Leave the Opt In and Variables sections blank

   Note: In the Variables dropdown, you can set the name- value pairs as the ExperienceCloud ID instance properties, when required.

8. Click Save. The Experience Cloud ID Service extension will now be available on the Installed tab, as shown:
   ![Adobe](/images/websdk/websdk17.png "Web SDK - Configure Extensions")

## Install the Adobe Client Data layer Extension

1. Ensure the Installed tab of Luma Web Property is open.
2. Click Catalog to access the available extensions.
3. In the Search box, type Data Layer and press Enter. The Adobe Client Data Layer appears.
4. Click Install, as shown:
   ![Adobe](/images/websdk/websdk18.png "Web SDK - Configure Extensions")
   The Install Extension page opens.
5. In the Data Layer name box, replace adobeDataLayer with digitalData from Luma Website, as shown:
   ![Adobe](/images/websdk/websdk19.png "Web SDK - Configure Extensions")
6. Click Save. The extension is installed and will now be available on the Installed tab, as shown:
   ![Adobe](/images/websdk/websdk20.png "Web SDK - Configure Extensions")
