---
title: "Create an Aggregation Audience"
description: Create an Aggregation Audience in Adobe Real - Time Customer Data.
author: Michael Mgebroff
authorImage: https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
coverImage: https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
date: "10-25-2023"
---

Scenario: Your organization wants you to create an audience that captures customers who are not a part of the company’s loyalty program but have made purchases of less than or equal to $1000 in the past.This audience will be targeted later inform them about the benefits of joining the loyalty program.

1. Click CUSTOMER > Audiences. The Audiences page opens.
2. Click Create audience to create a new audience. The Create audience dialog opens.
3. Ensure the Build rule creation method is selected and click Create.
4. On the left pane, ensure you are on the Attributes tab and navigate to XDM Individual Profile > Adlsplatform loyaltyDetails.
5. Drag level onto the rule builder. The loyalty level attribute is added.
6. Click the equals drop - down arrow and select does not exist. This indicates the target customer is nota part of the loyalty program. The Attributes section should look, as shown:
   ![Adobe](/images/segments/segments28.png "Create an Aggregation Audience")
7. On the left pane, under Fields, click the Events tab.
8. Under EVENT TYPES, look for Purchases and drag and drop it onto the rule builder. The Purchases event type is added.
9. C lick Purchases. The Event Rules section opens.
10. Under Event Rules, click the ellipsis, as shown, and select Aggregate.
    ![Adobe](/images/segments/segments29.png "Create an Aggregation Audience")
11. Click the Sum drop-down arrow and select Average.
12. Click the Select an attribute box, as shown, to select the required attribute. A dialog opens.
    ![Adobe](/images/segments/segments30.png "Create an Aggregation Audience")
13. Click XDM ExperienceEvent > Commerce > Order > Price Total. The attribute is added.
14. Click the equals drop- down arrow and select is less than or equal to.
15. In the enter a number box, type 1000. The Event Rules section should look, as shown:
    ![Adobe](/images/segments/segments31.png "Create an Aggregation Audience")
16. On the right pane, click Refresh estimate to view the qualified profiles.
17. In the Name box, provide a name for the audience such as Aggregate Audience_Today’sDate.
18. Click Save and close to save the audience. The audience summary opens.
