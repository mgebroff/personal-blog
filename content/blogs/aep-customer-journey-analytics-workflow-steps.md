---
title: Customer Journey Analytics Workflow
description: Review Experience Platform schemas and datasets
author: Michael Mgebroff
authorImage: https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80
coverImage: https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80
date: "2022-04-25"
---

The intent of this step is to review the datasets with their corresponding schemas to be used in CJA.
This will enable you to understand the underlying data structure of the datasets prior to the creation
and configuration of CJA connections, data views and customer journey visualization.

Perform the following tasks:

1. Connect to the Experience Platform User Interface (UI)
2. Review the following datasets and their corresponding schemas to understand the data and the structure:

| Dataset                             | Schema                                     |
| ----------------------------------- | ------------------------------------------ |
| AEP Demo - Website Interactions     | Website Interactions Schema                |
| AEP Demo - Website Registration     | AEP Demo - Website Registration Schema     |
| AEP Demo - Call Center Interactions | AEP Demo - Call Center Interactions Schema |

## Task 1: Connect to the Experience Platform UI

1. Navigate to https://experience.adobe.com/. The Adobe Experience Cloud page opens.
2. Click Experience Platform. The Adobe Experience Platform page opens.
3. Verify the instance link on the upper right. For example, Global Platform US.
4. Navigate to Data Management > Datasets. The Datasets page opens.
5. Click the Browse tab, if not open already. The available datasets appear.
6. Type Website in the Search box to filter the list of the datasets. The list will include AEP Demo Website Registrations and AEP Demo Website Interaction, as shown:
   ![Adobe](/images/customer-journey-analytics-img3.PNG "Connect to the Experience Platform UI")
7. Select the AEP Demo Website Interactions dataset. The AEP Demo Website Interactions Schema panel appears on the right.
8. Click the link below Schema. The AEP Demo Website Interactions Schema pop up appears.
9. Click AEP Demo Website Interactions Schema below the Schema name section in the pop up. The Schemas > AEP Demo Website Interactions Schema page opens on a separate tab.
   ![Adobe](/images/customer-journey-analytics-img4.PNG "Connect to the Experience Platform UI")
10. In the Structure section, expand adlsplatform<region> object schema, where <region> refers the region for which the instance is provisioned. For example, adlsplatformus. The available subobjects appear..
11. Expand the identification sub-object. The identification object displays the strings that include crmid, ecid, and emailId, as shown:
    ![Adobe](/images/customer-journey-analytics-img5.PNG "Connect to the Experience Platform UI")
12. Click Schemas on the upper left to return to the Schemas page.
13. Navigate to Data Management > Datasets. The Datasets page opens.
14. Click the Browse tab, if not open already. The available datasets appear.
15. Type Website in the Search box to filter the list of the datasets. The list of datasets appear.
16. Select the AEP Demo Website Registrations Data dataset. The AEP Demo Website Registrations Schema panel appears on the right.
17. Click the link below Schema. The AEP Demo Website Registrations Schema pop up appears.
18. Click AEP Demo Websites Registrations Schema below the Schema name section in the pop up. The Schemas > AEP Demo Websites Registrations Schema page opens on a separate tab.
19. In the Structure section, expand adlsplatform region object schema, where region refers the region for which the instance is provisioned. For example, adlsplatformus. The available subobjects appear.
20. Expand the identification sub-object. The identification object displays the strings, as shown:
    ![Adobe](/images/customer-journey-analytics-img6.PNG "Connect to the Experience Platform UI")
21. Click Schemas on the upper left to return to the Schemas page.
22. Navigate to Data Management > Datasets. The Datasets page opens.
23. Click the Browse tab. The available datasets appear.
24. Type Call center in the Search box. The dataset based on the filter appears.
25. Select the AEP Demo Call Center Interaction dataset. The AEP Demo Luma Telco Call Center Interactions Schema panel appears on the right.
26. Click the link below Schema. The AEP Demo Luma Telco Call Center Interactions Schema pop up appears.
27. Click AEP Demo Call Center Interactions Schema below the Schema name section in the pop up. The Schemas > AEP Demo Luma Telco Call Center Interactions Schema page opens on a separate tab.
28. In the Structure section, expand adlsplatform<region> object schema, where <region> refers the region for which the instance is provisioned. For example, adlsplatformus. The available subobjects appear.
29. Expand the identification sub-object. The identification object displays the strings, as shown:
    ![Adobe](/images/customer-journey-analytics-img7.PNG "Connect to the Experience Platform UI")

- Notice that the common strings in three schemas are:
  - ecid
  - emailId
  - mobilenr (primary)
