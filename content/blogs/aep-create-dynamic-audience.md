---
title: "Create a Dynamic Audience"
description: Create a Dynamic Audience in Adobe Real - Time Customer Data.
author: Michael Mgebroff
authorImage: https://images.unsplash.com/photo-1640158615573-cd28feb1bf4e?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
coverImage: https://images.unsplash.com/photo-1640158615573-cd28feb1bf4e?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
date: "10-25-2023"
---

Scenario: Create a dynamic audience for customers who have made two purchases this month, where the order value of second purchase is greater than the order value of the first purchase.

1. Click Create audience. The Create audience dialog opens.
2. Ensure the Build rule audience creation method is selected and click Create. The rule builder canvas opens.
3. On the left pane, click the Events tab.
4. Under EVENT TYPES, perform the following steps:

   - Search Purchases and drag and drop it onto the rule builder.
   - Search Any and drag and drop it onto the rule builder next to Purchases.
   - Search Purchases and drag and drop it next to the Any event type. The Events section should now look, as shown:
     ![Adobe](/images/segments/segments32.png "Create a Dynamic Audience")

5. Click the Any time drop- down arrow and select This Month.
6. On the left pane, ensure the Search box is clear, and notice that the three variables you added are displayed under the BROWSE VARIABLES section, as shown:
   ![Adobe](/images/segments/segments33.png "Create a Dynamic Audience")
7. Click Purchases 2, as shown. The variables are listed at the top
   ![Adobe](/images/segments/segments34.png "Create a Dynamic Audience")
8. Ensure you have selected Purchases, as shown. The Event Rule section is displayed at the bottom.
   ![Adobe](/images/segments/segments35.png "Create a Dynamic Audience")
9. On the left pane, navigate to Commerce > Order and drag Price Total onto the Add event section, as shown:
   ![Adobe](/images/segments/segments36.png "Create a Dynamic Audience")
10. Click the folder icon on the left pane, as shown, and click Variables.
    ![Adobe](/images/segments/segments37.png "Create a Dynamic Audience")
11. Under BROWSE VARIABLES, click Purchases 1. The variables are listed at the top
12. Navigate to Commerce > Order and drag Price Total onto the Add to compare operands box. TheAdd to compare operands box appears only after you drag Price Total variable onto the EventsRules section, as shown:
    ![Adobe](/images/segments/segments38.png "Create a Dynamic Audience")
13. Click the equals drop- down arrow and select is greater than. Now, you have a dynamic segment where the price total of purchase 2 is greater than the price total of purchase 1.
    ![Adobe](/images/segments/segments39.png "Create a Dynamic Audience")
14. In the Name box on the right pane, provide a name for the segment such as Dynamic Audience_Today’sDate.
15. Click Save and close to save the audience.
