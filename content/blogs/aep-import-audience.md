---
title: "Import Audience"
description: Import Audience in Adobe Real - Time Customer Data.
author: Michael Mgebroff
authorImage: https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
coverImage: https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
date: "10-25-2023"
---

Scenario: You have received a file that includes a list of audiences who have returned a product in the last 30 days. You want to import these audience, so that you can re target them with campaigns

1. Click CUSTOMER > Audiences. The Audiences page opens.
2. Click Import audience at the top- right of the page. The Workflows > Import audience CSV page opens in the Add data tab.
3. Click Choose files and select the Sample Audiences.csv file provided to you by your instructor. You can also drag and drop the file. The file is uploaded successfully and the sample data is displayed at the bottom of the page.
4. Click Next. The Configure tab opens.
5. In the Audience details section, replace the existing name in the Audience Name box with a relevant name such as Product Returns_Today’s_date.
6. Under Identity selection, perform the following steps to select the primary identity and namespace to use for profiles:

   - From the Primary identity field dropdown, select email.
   - Under Identity namespace value, click the pencil icon. The Select identity type dialog opens.
   - In the search box, type email, select Email from the results and click Select. The namespace value is updated and the Configure tab opens

7. Click Next. The Review tab opens with Audience details, Dataset details, S ample data, and Column data types details.

   You can modify the column data types, if required, by clicking Edit. For this activity, do not make any changes.

8. After reviewing all details, click Finish. The audience was saved successfully message appears at the bottom of the page.
9. On the Browse tab of the Audiences page, click the audience you imported now. The Detail page opens.
10. In the Ingestion details card, notice details such as records ingested, records failed, and profile segments. The processing may take a few minutes.
11. Click Apply access labels at the top- right of the page. The Apply access and data governance labels dialog opens. You can apply the relevant data governance labels here.
12. Select C2 and C3 labels and click Save. The policy labels are applied and listed in the Audience summary card.
13. Click Edit properties in the Audience summary card. The Edit properties dialog opens.
14. In the Tags field, type and select one or more tags. For example, type Imported_Audiences and selectCreate “Imported_Audiences” from the option displayed. The tag is created.
15. Click Save. Notice that the tag name is listed under Tags in the Audience summary card.
