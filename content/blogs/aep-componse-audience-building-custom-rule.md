---
title: "Compose Audience by Building Rule"
description: Compose Audience by Building a Custom Rule in Adobe Real - Time Customer Data.
author: Michael Mgebroff
authorImage: https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?auto=format&fit=crop&q=80&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
coverImage: https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?auto=format&fit=crop&q=80&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
date: "10-25-2023"
---

Scenario: In this activity, you will compose audience by building a new custom rule using attributes and events. You will create an audience of customers who are 45 years or older and viewed a product on your website, so that you can create an email campaign specifically for them

1. Ensure you are on the CUSTOMER > Audiences page.
2. Click Create audience. The Create Audience dialog opens.
3. Ensure Compose audience is selected and click Create. The Create audience page opens.
4. Click the Audience block on the canvas, as shown. The Audience pane opens on the right. Notice that there are options to add existing audience or create a new custom rule using attributes and events. In this activity, you will build a new rule.
   ![Adobe](/images/segments/segments15.png "Compose Audience by Building Rule")
5. On the right pane, click Build rule. The Custom rule canvas opens.
6. On the left pane, ensure you are on the Attributes tab and navigate to XDM Individual Profile > Adlsplatform Individual recognition > Core.
7. Drag and drop age onto the canvas. The age attribute is added.
8. Click the equals drop- down arrow and select is greater than or equal to.
9. In the Enter a Number box, type 45. The age attribute should now look, as shown
   ![Adobe](/images/segments/segments16.png "Compose Audience by Building Rule")
10. On the left pane, click the Events tab.
11. Under EVENTS TYPE, search for Product Views and drag and drop it onto the rule builder. TheEvents section of the rule builder is updated, as shown:
    ![Adobe](/images/segments/segments17.png "Compose Audience by Building Rule")
12. On the right pane, click Refresh estimate to view an estimate of the qualified profiles.
13. Click Save to save the audience. The Composition page opens. Notice that the Audience block is updated, a shown, with information such as the method used to create audience (in this case, Rule builder), attributes and events used to build the rule, and estimated record output.
    ![Adobe](/images/segments/segments18.png "Compose Audience by Building Rule")
14. Click the Save audience tile. A pane opens on the right.
15. Replace the default title with a suitable name. For example, Email Campaign.
16. Click the icon next to the default Composition name, as shown. The Composition properties dialog opens.
    ![Adobe](/images/segments/segments19.png "Compose Audience by Building Rule")
17. In the Title box, replace the default name with a suitable name. For example, Audience Composition_Today’sDate.
18. Click Save. The title is updated.
19. Click Publish. The audience is published.
20. Click CUSTOMER > Audiences. The Audiences page opens.
21. Click the Composition tab. A list of audience appears with the audience you created. You can click the ellipsis next to the audience name to access additional actions such as Duplicate, Manage access, and Delete.
