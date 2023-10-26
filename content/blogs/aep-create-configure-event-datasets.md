---
title: "Create and Configure Event Dataset"
description: Create a Dataset  from  the Events XDM Schema in Experience Platform.
author: Michael Mgebroff
authorImage: https://images.unsplash.com/photo-1646583288948-24548aedffd8?auto=format&fit=crop&q=80&w=3500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
coverImage: https://images.unsplash.com/photo-1646583288948-24548aedffd8?auto=format&fit=crop&q=80&w=3500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
date: "10-25-2023"
---

## Create a Dataset from the Events XDM Schema in Experience Platform

1. On the left menu, under DATA MANAGEMENT node, click Datasets. The Datasets page opens.
2. Click Browse, if not opened already.
3. On the top - right, click Create dataset to create a new dataset. The Create dataset page opens.
4. To create a dataset from the new XDM schema that you have created, click Create dataset from schema.
   The Create dataset from schema page opens.
5. Under the Select schema section’s NAME column, click Website InteractionsSchema. In this example, it is John - Website Interactions Schema
6. After selecting the schema, click Next to continue. The Configure dataset section opens.
7. Configure the dataset. In the Name section, type <your first name> - Website InteractionsDataset. In this example, it is John - Website Interactions Dataset. Optionally, you can add a description to the dataset.
8. Click Finish to complete the dataset configuration. The new dataset page opens under theDatasets section, as shown:
   ![Adobe](/images/datasets/create-individual-dataset9.png "Create Datasets")
9. Click the newly created dataset. The dataset page opens on the Dataset activity tab, as shown:
   ![Adobe](/images/datasets/create-individual-dataset10.png "Create Datasets")
10. On the right pane, click the Profile key to enable the new dataset to be part of ExperiencePlatform's Real- time Customer Profile. You will not be able to enable the Profile as the schemafrom which the dataset is created, was not enabled for Profile.

Note: If the schema on which the dataset is created is not enabled for Profile, then you will not be able to enable the Profile for the dataset as well.
