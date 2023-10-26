---
title: "Create a Sequential Audience"
description: Create a Sequential Audience in Adobe Real - Time Customer Data.
author: Michael Mgebroff
authorImage: https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=2048&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
coverImage: https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=2048&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
date: "10-25-2023"
---

Scenario: Create a sequential audience based on the following shopping events of a customer who visited your website:

1. Customer visits a specific section of the webpage.
2. Customer visits a specific page and adds a product to the cart.
3. Customer does not proceed to purchase the product.

Creating a sequential audience with the above events in the same order will help you to target the customers who finalized a product but did not continue to purchase it. You can then send them promotional or reminder communications to complete the purchase.

To create a sequential audience for the above listed sequence

1. On the left navigation pane, under CUSTOMER > Audiences. The Audiences page opens.
2. Click Create audience. The Create audience dialog opens.
3. Select Build rule as the audience creation method and click Create. The rule builder canvas opens.
4. On the left pane, click the Events tab. The existing events and event types are displayed.
5. Under BROWSE CLASSES, click XDM ExperienceEvent. All sub folders under the event are displayed
6. In the search box, type Page Views. The field is listed, as shown:
   ![Adobe](/images/segments/segments20.png "Compose Audience by Building Rule")
7. From the left pane, under the EVENT TYPES, drag the field Page Views onto the rule builder canvas.
8. On the left pane search box, type Product List (Cart) Adds. The field is listed.
9. Drag the Product List (Cart) Adds field onto the rule builder canvas next to the existing rule, as shown:

   Note: To ensure the new rule is added next to the existing rule, look for a blue line on the right of the existing rule. The Product List (Cart) Adds event rule is added next to PageViews.
   ![Adobe](/images/segments/segments21.png "Compose Audience by Building Rule")

10. On the left pane search box, type Purchases. The field is listed.
11. From the left pane, under the EVENT TYPES, drag the Purchases field onto the rule builder canvas,next to the Product List Adds rule.
12. Click the clock icon between the rules Product List Adds and Purchases, as shown. The timing options appear.
    ![Adobe](/images/segments/segments22.png "Compose Audience by Building Rule")
13. Select the After checkbox. The timing options appear.
14. Type 1 to indicate a period of one week. The time span between the two rules in a segment is now set.This time span decides the sequence in sequential segmentation.
15. Click the Purchases rule. The Event Rules section appears.
16. On the Event rules section, click the Include drop-down arrow, as shown, and click Exclude.
    ![Adobe](/images/segments/segments23.png "Compose Audience by Building Rule")
    The rule changes to exclude the selected event page.
17. On the Audience properties pane, click Refresh estimate to view the qualified profiles.
18. In the Name box, type Sequential Audience_Today’sDate.
19. Click Save and Close. The audience details page opens.
