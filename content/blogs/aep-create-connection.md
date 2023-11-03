---
title: Create and configure a connection
description: Create and configure a connection Using Adobe Experience Platform
author: Michael Mgebroff
authorImage: https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
coverImage: https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
date: "2022-11-02"
---

create a CJA Connections configured with Website datasets AEP Demo - Website Interactions, AEP Demo - Website Registration, and AEP Demo - Call Center Interactions. The product of the exercise is an enabled connection required for the creation of Data Views

1. Create a new CJA connection.
2. Add Experience Platform datasets to the connection.
3. Stitch together selected datasets in the connection.
4. Configure the naming and streaming details and enable the CJA connection.

## Task 1: Create a new CJA connection

1. Log into the Experience Platform UI with Cloud credentials. The Landing Page of the Platform UIopens, as shown:

![Adobe](/images/cja/cja68.png "Create and configure a connection")

2. Click the app selector icon at the upper- right corner and select Customer Journey Analytics. TheCustomer Journey Analytics page opens.
3. Verify that you have access to Projects, Connections, Data Views and Components tabs on the top navigation bar, as shown:

![Adobe](/images/cja/cja69.png "Create and configure a connection")

4. Click the Connections tab to view the available connections.
5. Click Create new Connection. The Create connection page opens. The page is categorized into three different sections, as shown:

![Adobe](/images/cja/cja70.png "Create and configure a connection")

There are four different areas in the CJA Connection Configuration:

1. Connection Settings

   - Name: Required
   - Description: Optional but Recommended
   - ags: Optional

2. dd datasets: Lists of available Experience Platform datasets.
3. Data setting.

   - Enable rolling data window: Allows you to Define data retention as a rolling window in months at a connection level.
   - Select number of months: Allows you delete older data and retain latest months dataSpecified by the number of months
   - Sandbox: The AEP Org containing data to be use
   - Average number of daily events: Select a range for the number of expected daily events for the entire connection.

4. Dataset list details: Add and Configure datasets in a connection

## Task 2: Configure the CJA Connection

1.  Provide the details of the Connection settings section, as shown:

    - Name: Omnichannel Data Connection-PROD- MMDDYYYY. For example, AMO – Omnichannel Data Connection- PROD-04202022.
    - Description (Optional): In the Description box, type a description for the connection. In this case, simply use the name as the description, i.e. Omnichannel DataConnection- PROD-04202022

2.  Configure the Data setting as follows:

    - Enable rolling data window: Unchecked
    - Sandbox: Prod
    - Average number of daily events: less than 1 million

3.  Add the datasets to the connection using the steps below:

    - Click Add datasets on the top right corner o r click Add datasets button in the Dataset list window. An Add dataset windows opens, as shown:

    ![Adobe](/images/cja/cja71.png "Create and configure a connection")

4.  Search for and select the following datasets to the CJA Connection

    - AEP Demo Luma Telco Website Interactions
    - AEP Demo Website Registration
    - AEP Demo Call Center Interactions

    The CJA Connection with the selected dataset is as shown:

    ![Adobe](/images/cja/cja72.png "Create and configure a connection")

5.  Click Next to continue to the Dataset setting phase, as show:

    ![Adobe](/images/cja/cja73.png "Create and configure a connection")

6.  Enable Import all new data and Backfill all existing data for all datasets in the connection.

    Click Add dataset to return to the CJA Connection settings, as shown:
    ![Adobe](/images/cja/cja74.png "Create and configure a connection")

7.  Click Connection preview button on the top right corner. The combined data from the selected dataset opens, as shown:
    ![Adobe](/images/cja/cja75.png "Create and configure a connection")

8.  Review and close the Connection preview window.
9.  Click Save to save the CJA Connection configuration.
10. Close the No Support.. Window Overly. The Connection Manager opens, as shown:

    ![Adobe](/images/cja/cja76.png "Create and configure a connection")

## Note:

Backfill historical data

Import all existing data lets you backfill historical data. Keep this in mind:

    - We have removed the backfill (historical data import) limitation. Previously, you could backfill a maximum of 2.5 billion rows on your own and otherwise required engineering involvement. Now,you can backfill data on your own, without any limitations.
    - We prioritize new data added to a dataset in the connection, so this new data has the lowest latency.
    - Any backfill (historical) data is imported at a slower rate. The latency is influenced by how much historical data you have, combined with the Average number of daily events  setting you selected.For example, if you have more than one billion rows of data per day, plus 3 years of historical data,that could take multiple weeks to import. On the other hand, if you have less than a million rows per day and one week of historical data, that would take less than an hour.
    - Backfilling applies to the whole connection, not to each dataset individually.
    - The  Adobe Analytics Source Connector  imports up to 13 months of data, irrespective of size.

## Data Available for Reporting

    - There is a latency of 1- 2 hours to get the data to appear in reporting once it is added.
    - Represents the total number of event dataset rows available for reporting, for the entire connection.This count is independent of any calendar settings.
    - You can Refresh and check the status Backfill data, as shown:

![Adobe](/images/cja/cja77.png "Create and configure a connection")

Click the Connection Link on the top right corner or the Menu bar of the screen to return to theCreate New Connection window, as shown:
