---
title: "Create an Audience Based on Attributes"
description: Create Audiences and Activate Destinations in Adobe Real - Time Customer Data.
author: Michael Mgebroff
authorImage: https://images.unsplash.com/photo-1616458964840-5108e4d3adb3?auto=format&fit=crop&q=80&w=3544&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
coverImage: https://images.unsplash.com/photo-1616458964840-5108e4d3adb3?auto=format&fit=crop&q=80&w=3544&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
date: "10-25-2023"
---

1. Ensure you are logged in to platform.adobe.com. The Home page opens.
2. On the top navigation bar, at the top- right of the Home page, verify that the correct training region is selected.
3. Ensure you are on the right sandbox provided to you by your Instructor.
4. On the left navigation pane, click CUSTOMER > Audiences. The Audiences page opens.
5. Click Create audience, as shown, to create a new audience. The Create audience dialog opens.
   ![Adobe](/images/segments/segment.png "Create an Audience Based on Attributes")
6. Select the Build rule creation method, as shown, and click Create.
   ![Adobe](/images/segments/segment2.png "Create an Audience Based on Attributes")
7. On the left pane, under Fields, ensure you are on the Attributes tab.
8. Under BROWSE ATTRIBUTES, click XDM Individual Profile. The available attributes for the XDMIndividual Profile attribute are listed, as shown:
   ![Adobe](/images/segments/segment3.png "Create an Audience Based on Attributes")
9. Click the Person folder. The fields under the Person folder are listed, as shown:
   ![Adobe](/images/segments/segment4.png "Create an Audience Based on Attributes")
10. Select Birth date (YYYY-MM- DD) and drag it onto the rule builder canvas, as shown:
    ![Adobe](/images/segments/segment5.png "Create an Audience Based on Attributes")
11. In the Attributes section, click the Today drop-down arrow and click Rolling range from the list that appears, as shown. A box appears pre populated with 1.
    ![Adobe](/images/segments/segment6.png "Create an Audience Based on Attributes")
12. Click the Day(s) drop- down arrow and select Years.
13. Click the to link. A box appears pre populated with 2.
14. Enter 18 in the first box and 45 in the second (to) box. The attributes should now look, as show:
    ![Adobe](/images/segments/segment7.png "Create an Audience Based on Attributes")
15. To include the customers who have email ID, ensure you are on the Fields > Attributes tab on the left pane.
16. Click XDM Individual Profile. The available attributes are listed.
17. Click Adlsplatform folder. For example, Adlsplatformapac.
    ![Adobe](/images/segments/segment8.png "Create an Audience Based on Attributes")
18. Navigate to Identification > core. All available fields under core are listed.
19. Drag email under the existing rule in the rule builder. While dragging, ensure the blue line appears under the existing, as shown.

    Note that the AND operator appears connecting the email rule with birth date.
    ![Adobe](/images/segments/segments9.png "Create an Audience Based on Attributes")

20. Click the equals operator drop-down arrow next to email and select exists. The rule builder should now look, as shown:
    ![Adobe](/images/segments/segments10.png "Create an Audience Based on Attributes")
21. On the left menu, type loyalty in the search box. The fields associated with loyalty are listed. Being a custom field, the loyalty program data will be in a folder named with your tenant ID. For example, Adlsplatformapac.
22. Click the loyaltyDetails folder. The available options are listed.
23. Drag the level field onto the rule builder, under the email attribute you added earlier.
24. Click the select or type options drop- down arrow and click gold from the list. The gold status is added. The segment is now defined with the customers who have an emailID, are aged 18 – 45 years,and are a part of the gold membership, as shown:
    ![Adobe](/images/segments/segments11.png "Create an Audience Based on Attributes")

    Note: You can select multiple values for loyalty status. As it is referenced as an enumeration in the XDM schema, the values are available from the Select or type options drop - down menu.

25. In the Audience properties pane on the right, click Refresh estimate. The estimated profile count is displayed. I t may take a few seconds to refresh the estimate
26. In the Name box, type Segment18 – 45GoldEmail.
27. Under Evaluation method, ensure Streaming is selected. If not, click the drop- down arrow and selectStreaming.
28. Click Save. A success message appears indicating the segment is saved.
29. Click Save and close. A summary of the newly created segment is displayed.

Note: T he summary also lists the sample profiles. You can click the profile IDs to view the details.

30. Click Edit audience on the profile summary page.
31. On the Audience properties pane, click Code view to view the segment definition for API. The code view is displayed, as shown schema.
    ![Adobe](/images/segments/segments12.png "Create an Audience Based on Attributes")
32. Click Cancel to return to the newly created segment page. Stay on this page for the next activity.
