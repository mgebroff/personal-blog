---
title: Calculated Metrics and Dimensions
description: Create calculated metrics and dimensions Using Adobe Customer Journey Analytics
author: Michael Mgebroff
authorImage: https://images.unsplash.com/photo-1578353022439-8cbcd4439e6a?auto=format&fit=crop&q=80&w=3570&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
coverImage: https://images.unsplash.com/photo-1578353022439-8cbcd4439e6a?auto=format&fit=crop&q=80&w=3570&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
date: "2022-11-02"
---

## Create calculated metrics and dimensions

Although we have organized all the components in the data view, you still need to adapt some of them, so that business users are ready to start their analysis. If you remember, we did not specifically bring in metrics such as Add to Cart, Product View or Purchases into the D ata V iew. However, we do have a dimension called Product Interaction Type.

1. Create Product Views derived from Event Type

   - On the Projects page, click the project that you created in Task 1 of this exercise, if it is not already opened, as shown
     ![Adobe](/images/cja/cja34.png "Create calculated metrics and dimensions")
     Note: Refresh your browser if the Add (+) is not visible to the right of the components

2. In the METRICS component section, click the + sign, as shown. The Calculated Metric Builder page opens.
3. In the Search components box on the left, type Event Type. The result of the search appears.
4. Drag Event Type component onto the Definitions section. The Create Filter fromDimension dialog box opens, as shown
   ![Adobe](/images/cja/cja35.png "Create calculated metrics and dimensions")
5. Click the Select value box, search or type commerce.productViews and press the Enter key. The value is updated in the dialog box, as shown:
   ![Adobe](/images/cja/cja36.png "Create calculated metrics and dimensions")
6. Click Done. The Summary and Definition sections of the Calculated metric builder page is updated.
7. In the Search components box, type Events. The Events (events) component appears in the search result.
8. Drag Events (events) to the Definitions section. The Calculated metric builder page is updated, as shown:
   ![Adobe](/images/cja/cja37.png "Create calculated metrics and dimensions")
9. In the Title box, type Product Views.
10. In the Description box, provide a description. For example, Product Views.
11. Click Save to save the calculated metric and verify that the Product Views - metric is listed in the METRICS section, as shown
    ![Adobe](/images/cja/cja38.png "Create calculated metrics and dimensions")

## Calculated Metrics for Product Add to Cart

1. In the METRICS component section, click the + sign. The Calculated metric builder page opens.
2. In the Search components box on the left, type Event Type. The result of the search appears.
3. Drag Event Type component onto the Definitions section. The Create Filter fromDimension dialog box opens, as shown
4. Click the Select value box, type commerce.productListAdds and press the Enter key. The value is updated in the dialog box, as shown:
   ![Adobe](/images/cja/cja39.png "Create calculated metrics and dimensions")
5. Click Done. The Summary and Definition sections of the Calculated metric builder page is updated.
6. Customer Journey Analytics Powered by Adobe Experience Platform 676. In the Search components box, type Events. The Events (events) component appears in the search result.
7. Drag Events (events) to the Definitions section. The Calculated metric builder page is updated.
8. In the Title box, type Add to Cart.
9. In the Description box, provide a description.
10. Click Save to save the calculated metric and verify that the Add to Cart metric is listed in the METRICS section.

## Create Calculated Metric for Product Purchases – Event Type

1. In the METRICS component section, click the + sign. The Calculated metric builder page opens.
2. In the Search components box on the left, type Event Type. The result of the search appears
3. Drag Product Interaction Type component onto the Definitions section. The Create Filter from Dimension dialog box opens, as shown.
4. Click the Select value box, type commerce.purchases and press the Enter key. The value is updated in the dialog box
5. Click Done. The Summary and Definition sections of the Calculated metric builder page is updated.
6. In the Search components box, type Events. The Events (events) component appears in the search result.
7. Drag Events (events) to the Definitions section. The Calculated metric builder page is updated.
8. In the Title box, type Purchases.
9. In the Description box, provide a description.
10. Click Save to save the calculated metric and verify that the Purchases metric is listed in the METRICS section, as shown
    ![Adobe](/images/cja/cja40.png "Create calculated metrics and dimensions")

## Calculate the Conversion Rate using the formula: purchases/session in percentage

Typically, conversion rate means Conversions / Sessions.

1. Click the Purchase metric that you created in the previous task and select the information icon, as shown. The Purchases pop-up window appears
   ![Adobe](/images/cja/cja41.png "Create calculated metrics and dimensions")
2. Click the Edit (pencil) icon. The Calculated metric builder page opens as shown
   ![Adobe](/images/cja/cja42.png "Create calculated metrics and dimensions")
3. In the Search components box, type Sessions. The Sessions (sessions) component appears in the search result.
4. Drag Sessions (sessions) to the Definitions section and place it below Events. The Calculated metric builder page is updated, as shown:
   ![Adobe](/images/cja/cja43.png "Create calculated metrics and dimensions")
5. Notice that the division operator is automatically selected.
6. Click the Format drop-down arrow and select Percent. In the Decimal places box, type or select 2, as shown
7. In the Decimal places box, type 2, as shown:
   ![Adobe](/images/cja/cja44.png "Create calculated metrics and dimensions")
8. In the Title box, type Conversion Rate.
9. In the Description box, provide a description.
10. Click Save as to save the calculated metrics without making changes to the Purchases calculated metrics. The Conversion Rate metric is listed in the METRICSsection, as shown
    ![Adobe](/images/cja/cja45.png "Create calculated metrics and dimensions")
