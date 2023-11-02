---
title: "Compose Audience Adobe Real Time"
description: Compose Audience by Adding an Existing in Adobe Real - Time Customer Data.
author: Michael Mgebroff
authorImage: https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
coverImage: https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
date: "10-26-2023"
---

Create Audiences and Activate Destinations in Adobe Real- TimeCustomer Data PlatformModule 2: Create Audiences and Activate Destinations in Real- TimeCDP B2C EditionPage 46Adobe Copyright ProtectedActivity 2.9: Compose Audience by Adding an Existing AudienceScenario: In this activity, you will compose an audience by adding an existing audience. Further, you will narrow down the target audience by excluding the bronze members and selecting only the top 1000profiles.

1. Ensure you are o n the CUSTOMER > Audiences page.
2. Click Create audience. The Create Audience dialog opens.
3. Ensure Compose audience is selected and click Create. The Create audience page opens.
4. Click the Audience block on the canvas. The Audience pane opens on the right.
5. Click Add audience. The Add audience dialog opens.
6. Select one of the audiences you created in a previous activity. For Example, Sequential Audience.
7. Click Add. The audience is added.
8. Click the + icon below the Audience block, as shown. Additional actions such as Exclude, Enrich, Rank,and Split are displayed.
   ![Adobe](/images/segments/segments40.png "Compose Audience by Adding an Existing Audience")
9. Click Exclude. The Exclude pane opens on the right.
10. From the Type dropdown, s elect Exclude using attribute. You can also exclude audiences using the audiences you have created already
11. To define the exclusion rule, click the pencil icon under the Attribute field. The Select a profile attribute dialog opens.
12. Click the loyaltyDetails folder. The folder opens with two attributes, level and points.
13. Select the level attribute and click Select. The Attribute box in the Exclude pane is updated.
14. In the Excluded values box, type bronze. The Exclude pane should now look, as shown:
    ![Adobe](/images/segments/segments40.png "Compose Audience by Adding an Existing Audience")
15. In the canvas, notice that the Estimated record output has changed. In this example, it is 42k in theAudience block and 31k in the Exclude block as you excluded the bronze members, as shown. The numbers in your sandbox may vary.
    ![Adobe](/images/segments/segments42.png "Compose Audience by Adding an Existing Audience")
16. Click the + icon below the Exclude block and click Rank. The Rank pane opens on the right.
17. Under Attribute, click the pencil icon. The Select a profile attribute dialog opens.
18. Click the loyaltyDetails folder. The folder opens.
19. Select the points attribute and click Select. The Attribute field in the Rank pane is updated.
20. Click the Rank By dropdown and select Descending order.
21. Turn on the Add profile limit key. T his option enables you to specify the maximum number of profiles to be included in the composition.
22. In the Included profiles box, type 1000. In the canvas, notice that the Estimated record output in theRank block changed to 1k. This is because, you specified the loyalty points ranking attribute and restricted the profile limit to 1000. Now, you can target the top 1000 profiles.
23. Click the Save audience block. The Save pane opens on the right.
24. In the Save name box, replace the existing name with a suitable name such as Top1000Profiles.
25. Click the icon next to the default Composition name at the top of the page. The Composition properties dialog opens.
26. In the Title box, provide a suitable name such as Exclude Bronze Members.
27. Click Save. The title is updated.
28. Click Publish. The audience is published.
