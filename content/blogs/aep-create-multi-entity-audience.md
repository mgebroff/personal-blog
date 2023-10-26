---
title: "Create a Multi-Entity Audience"
description: Create a Multi-Entity Audience in Adobe Real - Time Customer Data.
author: Michael Mgebroff
authorImage: https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&q=80&w=3538&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
coverImage: https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&q=80&w=3538&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
date: "10-25-2023"
---

## Verify Multi-Entity Relationship i n Experience Platform

1. On the left navigation pane, click CUSTOMER > Identities. The Identities page opens.
2. Click Browse. The list of existing identities is displayed, as shown:
3. Scroll down to find Demo System - ProductSKU. This is the main identifier and reconciliation key between the two XDM schemas, Website Interactions schema and Product Catalog schema.
4. On the left navigation pane, click DATA MANAGEMENT > Schemas. The Schemas page opens on the Overview tab.
5. Click Browse. All the available schemas are listed.
6. Scroll down and click Product Catalog Schema. The Product Catalog Schema page opens displaying the structure of the schema, as shown:
   ![Adobe](/images/segments/segments24.png "Create a Multi-Entity Audience")
7. In the schema structure, navigate to \_adlsplatform | Object and expand it. The identity fields under the node are displayed, as shown. In this example, observe that productSKU | String is a defined identity.
   ![Adobe](/images/segments/segments25.png "Create a Multi-Entity Audience")
8. Note that a fingerprint icon appears inside the node indicating a defined identity.
9. Click Cancel to close the schema structure window to return to the Schemas page.
10. In the NAME column, scroll down to find and click Demo System - Event Schema for Website(Global v1.1). The Demo System - Event Schema for Website (Global v1.1) page opens.
11. On the Composition pane, scroll down to Relationships and click productListItems.SKU.
12. The productListItems.SKU relationship details are displayed, as shown. Observe the reference schema details on the Field properties pane.
    ![Adobe](/images/segments/segments26.png "Create a Multi-Entity Audience")
13. Click Cancel to return to the Schemas page.

## Create a Multi-Entity Audience in Experience Platform

1. On the left navigation pane, click CUSTOMER > Audiences. The Audiences page opens.
2. On the top-right, click Create audience. The Create audience dialog opens
3. Ensure the Build rule audience creation method is selected and click Create.
4. On the left pane, click the Events tab. The existing event classes and types are displayed.
5. In the search box, type color. The fields associated with color are listed.
6. Drag and drop productColor onto the rule builder. The productColor rule is added.
7. In the Events Rule section, retain equals as the operator.
8. In the productColor value box, type blue and click Enter. The selected color name appears under the value box. The rule should look, as shown
   ![Adobe](/images/segments/segments27.png "Create a Multi-Entity Audience")
9. On the Audience properties pane, click Refresh estimate to see the audience population, if any. You may not see any result if the instance has no previous data.
10. On the Audience properties, in the Name box, provide an audience name such as MultiEntityAudience_Today’sDate.
11. Ensure the Evaluation method is selected as Batch.
12. Click Save and Close. The audience summary is displayed.

    Note: Streaming segmentation does not support multi- entity segmentation yet. The batch segments take 24 hours to be evaluated, and, therefore, may not contain any data after the segment is created.
