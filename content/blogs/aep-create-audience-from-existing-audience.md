---
title: "Create an Audience in Adobe Real - Time"
description: Create an Audience from Existing Audiences in Real - Time Customer Data.
author: Michael Mgebroff
authorImage: https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
coverImage: https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
date: "10-26-2023"
---

## Perform the following tasks

- Create an audience for customers who purchased products in the past
- Create an audience of male customers who added a product to the website cart
- Create an audience of male customers who added a product using mobile phones
- Create a new audience of male purchasers, whose product add method was website or mobile phones
- Activate the audience to a destination

## Create an Audience for Customers Who Purchased Products in the Past

1. Click Create audience. The Create audience dialog opens.
2. Ensure the Build rule audience creation method is selected and click Create. The rule builder opens.
3. On the left pane, on the Events tab, type Purchase ID in the search box. The Purchase ID events type is displayed.
4. Drag and drop Purchase ID onto the rule builder.
5. Under Event Rules, click the equals drop - down arrow and select exists.
6. In the Name box on the right pane, type a suitable name such as Your initials Purchasers.
7. Click Save to save the audience.
   ![Adobe](/images/segments/segments43.png "Create an Audience from Existing Audiences")

## Create an Audience of Male Customers Who Added a Product to the Web site Cart

1. Click Create audience. The Create audience dialog opens.
2. Ensure the Build rule audience creation method is selected and click Create. The rule builder is displayed.
3. On the left pane, ensure you are on the Attribute tab and navigate to XDM Individual Profile > Adlsplatform Individual recognition > Core.
4. Drag and drop gender onto the rule builder. The gender attribute is added.
5. From the Select or type options drop-down menu, select male.
6. On the left pane, click the Events tab.
7. Under EVENT TYPES, look for Product List Adds and drag and drop into the rule builder.
8. Ensure Product List Adds you added now is selected. The Event Rules section is displayed at the bottom.
9. On the left pane, navigate to XDM ExperienceEvent > Product list items and drag and drop Product add method onto the Add event field section.
10. From the Select or type options drop-down menu, select Web.
11. In the Name box on the right pane, enter a suitable name such as Male - Product add method web.
12. Click Save to save the audience.
    ![Adobe](/images/segments/segments44.png "Create an Audience from Existing Audiences")

    ![Adobe](/images/segments/segments45.png "Create an Audience from Existing Audiences")

## Create an Audience of Male Customers Who Added a Product Using Mobile Phones

1. Click Create audience. The Create audience dialog opens.
2. Ensure the Build rule audience creation method is selected and click Create. The rule builder is displayed.
3. On the left pane, ensure you are on the Attribute tab and navigate to XDM Individual Profile > Adlsplatform Individual recognition > Core
4. Drag and drop gender onto the rule builder. The gender attribute is added.
5. From the Select or type options drop-down menu, select male.
6. On the left pane, click the Events tab.
7. Under EVENT TYPES, look for Product List Adds and drag and drop into the rule builder.
8. Ensure Product List Adds you added now is selected. The Event Rules section is displayed at the bottom.
9. On the left pane, navigate to XDM ExperienceEvent > Product list items and drag and drop Product add method onto the Add event field section.
10. From the Select or type options drop-down menu, select Mobile.
11. In the Name box on the right pane, enter a suitable name such as Male - Product add method Mobile.
12. Click Save to save the audience.
    ![Adobe](/images/segments/segments44.png "Create an Audience from Existing Audiences")

    ![Adobe](/images/segments/segments46.png "Create an Audience from Existing Audiences")

## Create a New Audience of Male Purchasers Whose Product Add Method was Website or Mobile Phones

1. Click Create audience. The Create audience dialog opens.
2. Ensure the Build rule audience creation method is selected and click Create. The rule builder opens.
3. On the left pane, click the Audiences tab. The available audiences are displayed.
4. Click Experience Platform. The audiences you have created so far are displayed.
5. Drag the Purchasers segment you created in Task 1 onto the rule builder. The attributes are updated.
6. Click the ellipsis on the right, as shown, and click Add Container. A container is added with an Add operation.
7. From the left pane, drag and drop the Male - Product add method web audience you created in Task 2 onto the Add attribute or audience section. The audience is updated in the container and a message indicating that the container must include at least 2 rules is displayed on the right.
8. From the left pane, drag and drop the Male - Product add method Mobile audience you created in T ask 3 below the audience you added in the previous step.
9. Click the And operator. Notice that it changes to Or. Now, you have created an audience of customers who have made a purchase and whose product add method is mobile or web. Similarly, you can create other audiences using the audiences you have already created, which saves you time and effort.
10. On the right pane, in the Name box, type a name for the audience. For example, Project.
11. Click Save to save the audience.
    ![Adobe](/images/segments/segments47.png "Create an Audience from Existing Audiences")

## Activate the Audience to a Destination

1. Ensure you are on the Browse tab of the Audiences page and click the your Project segment you created earlier. The your initials Project segment page opens.
2. In the Activated destination section, click Activate to destination. The Activate destination page opens.
3. In the Select destination section, select the Amazon S3 destination you configured earlier and click Next. The Scheduling section is displayed.
4. In the Scheduling section, under SCHEDULE, click Create Schedule, a shown. The Scheduling your segment name dialog opens.
5. Under Frequency, ensure Once is selected.
6. Select a future date from the calendar.
7. Click Create. The schedule is updated.
8. Click Next. The Select attributes section is displayed.
9. Retain the default attributes and click Next. The Review section is displayed.
10. Review the details and click Finish.
