---
title: "Create Rules in Data Collection"
description: Web SDK -  Create Rules in Data Collection for a Luma Website.
author: Michael Mgebroff
authorImage: https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
coverImage: https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
date: "10-30-2023"
---

1. Create the GlobalPageTop rule.
2. Create the productView rule.
3. Create the checkOut rule.
4. Create the addToCart rule

## Create the GlobalPageTop Rule

1. Ensure the Adobe Experience Platform Data Collection page with your tag property is open.
2. On the left pane, click Rules, as shown:
   ![Adobe](/images/websdk/websdk40.png "Web SDK - Create Rules in Data Collection")
   As you have not created any rule yet, a help video opens.
3. Click Create New Rule. The Create Rule page opens.
4. In the Name box, type GlobalPageTop.
5. In the IF section, under EVENTS, where you will define the event that triggers the rule, click Add, as shown:
   ![Adobe](/images/websdk/websdk41.png "Web SDK - Create Rules in Data Collection")
   The Event Configuration dialog opens.
6. From the Extension dropdown, ensure Core is selected.
7. From the Event Type dropdown, select Library Loaded (Page Top).
8. Click Keep Changes. The Create Rule page opens.
9. In the THEN section, under ACTIONS, where you will define the rule action, click Add, as shown:
   ![Adobe](/images/websdk/websdk42.png "Web SDK - Create Rules in Data Collection")
   The Action Configuration dialog opens.
10. From the Extension dropdown, select Adobe Experience Platform Web SDK.
11. From the Action Type dropdown, select Send event.
12. Configure Adobe Experience Platform Data Collection Module 3: Data Collection: Tag ConfigurationPage 57Adobe Copyright Protected12. Expand the ADVANCED OPTIONS section and ensure the Wait to run next action checkbox is selected.
13. On the right, in the Type box, type web.webpagedetails.pageViews.
14. To update the XDM data box, click the database icon. The Select Data Element dialog opens.
15. Click the pageView D ata Element that you created earlier and click Select. The Action Configuration dialog is updated.
16. Click Keep Changes. The Create Rule page opens.
17. Click Save. The rule is saved and listed on the Rules page.

## Create the productView Rule

1. Ensure the Rules page is open and click Add Rule. The Create Rule page opens
2. In the Name box, type productView.
3. In the IF section, under EVENTS, click Add. The Event Configuration dialog opens.
4. From the Extension dropdown, select Adobe Client Data Layer.
5. From the Event Type dropdown, select Data Pushed. The Data Pushed section opens.
6. On the Data Pushed section, under Listen to, select Specific Event, as shown:
   ![Adobe](/images/websdk/websdk43.png "Web SDK - Create Rules in Data Collection")
7. In the Event / Key to register for box, type productView.
8. Under the Time scope section, ensure All is selected.
9. Click Keep Changes. The Create Rule page opens.
10. In the THEN section, under ACTIONS, click Add. The Action Configuration dialog opens.
11. From the Extension dropdown, select Adobe Experience Platform Web SDK.
12. From the Action Type dropdown, select Send Event.
13. In the ADVANCED OPTIONS section, ensure the Wait to run next action checkbox is selected.
14. In the Type box, type commerce.productViews.
15. To update the XDM data box, click the database icon. The Select Data Element dialog opens.
16. Select the productView Data Element that you created earlier and click Select. The ActionConfiguration dialog is updated and should look similar to below screenshot:
    ![Adobe](/images/websdk/websdk44.png "Web SDK - Create Rules in Data Collection")
17. Click Keep Changes. The Create Rule page opens.
18. Click Save. The rule is saved and listed on the Rules page.

## Create the checkOut Rule

1. Ensure the Rules page is open and click Add Rule. The Create Rule page opens.
2. In the Name box, type checkOut.
3. In the IF section, under EVENTS, click Add. The Event Configuration dialog opens.
4. From the Extension dropdown, select Adobe Client Data Layer.
5. From the Event Type dropdown, select Data Pushed. The Data Pushed section opens.
6. On the Data Pushed section, under Listen to, select Specific Event.
7. In the Event / Key to register for box, type checkOut.
8. Under Time scope, ensure All is selected.
9. Click Keep Changes. The Create Rule page opens.
10. In the THEN section, under ACTIONS, click Add. The Action Configuration dialog opens.
11. From the Extension dropdown, select Adobe Experience Platform Web SDK.
12. From the Action Type dropdown, select Send event.
13. In the ADVANCED OPTIONS section, ensure the Wait to run next action check box is selected.
14. In the Type box, type commerce.purchases.
15. To update the XDM data box, click the database icon. The Select Data Element dialog opens.
16. Click the checkOut Data Element that you created earlier and click Select. The Action Configuration dialog is updated and should look similar to the below screenshot:
    ![Adobe](/images/websdk/websdk45.png "Web SDK - Create Rules in Data Collection")
17. Click Keep Changes. The Create Rule page opens.
18. Click Save. The rule is saved and listed on the Rules page.

## Create the addToCart Rule

1. Ensure the Rules page is open and click Add Rule. The Create Rule page opens.
2. In the Name box, type addToCart.
3. In the IF section, under EVENTS, click Add. The Event Configuration dialog opens.
4. From the Extension dropdown, select Adobe Client Data Layer.
5. From the Event Type dropdown, select Data Pushed. The Data Pushed section opens.
6. On the Data Pushed section, under Listen to, select Specific Event.
7. In the Event / Key to register for box, type addToCart.
8. Under Time scope, click All. The Event Configuration dialog appears.
9. Click Keep Changes. The Create Rule page opens.
10. In the THEN section, under ACTIONS, click Add. The Action Configuration page opens.
11. From the Extension dropdown, select Adobe Experience Platform Web SDK.
12. From the Action Type dropdown, select Send event.
13. In the ADVANCED OPTIONS section, ensure the Wait to run next action checkbox is selected.
14. In the Type box, type commerce.productListAdds.
15. To update the XDM data box, click the database icon. The Select Data Element dialog opens.
16. Click the addToCart Data Element that you created earlier and click Select. The Action Configuration dialog is updated and should look similar to the below screenshot:
    ![Adobe](/images/websdk/websdk46.png "Web SDK - Create Rules in Data Collection")
17. Click Keep Changes. The Create Rule page opens.
18. Click Save. The rule is saved and listed on the Rules page.
