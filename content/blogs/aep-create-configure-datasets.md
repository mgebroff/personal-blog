---
title: "Create and Configure Dataset"
description: Create and Configure Datasets for Individual Profile in Experience Platform.
author: Michael Mgebroff
authorImage: https://images.unsplash.com/photo-1580584126903-c17d41830450?auto=format&fit=crop&q=80&w=3439&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
coverImage: https://images.unsplash.com/photo-1580584126903-c17d41830450?auto=format&fit=crop&q=80&w=3439&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
date: "10-25-2023"
---

1. Create and configure a dataset from the attributes XDM schema in experience platform.
2. Create a dataset from the events XDM schema in experience platform.

## Create and Configure a Dataset from the Attributes XDM Schema in Experience Platform

1. On the left menu, under DATA MANAGEMENT node, click Datasets. The Datasets page opens.
2. Click Browse, if not opened already to view the list of existing datasets.

Note: Depending upon your past activities the list varies. You may not see the exact list as given in the screenshots.

3. On the top - right, click Create dataset, as shown, to create a new dataset.
   ![Adobe](/images/datasets/create-individual-dataset.png "Create Datasets")
   The Create dataset page opens.
4. To create a dataset from the new XDM schema that you have created, click Create dataset from schema, as shown:
   ![Adobe](/images/datasets/create-individual-dataset2.png "Create Datasets")
   The Create dataset from schema page opens.
5. Under the Select schema section’s NAME column, click <your first name> - Individual ProfilesSchema. In this example, it is John - Individual Profiles Schema, as shown:
   ![Adobe](/images/datasets/create-individual-dataset3.png "Create Datasets")
6. After selecting the schema, click Next to continue. The Configure dataset section opens.
7. Configure the dataset. In the Name section, type <your first name> - Individual Profiles. In this example, it is John – Individual Profiles.
   Optionally, you can add a description to the dataset.
8. Click Finish to complete the dataset configuration.
   ![Adobe](/images/datasets/create-individual-dataset4.png "Create Datasets")
   The new dataset page opens under the Datasets section.
9. On the right pane, click the Profile key, to enable the new dataset to be part of ExperiencePlatform's Real- time Customer Profile. A confirmation dialog appears

   Note: If the schema on which the dataset is created is not enabled for Profile,then you will not be able to enable the Profile for the dataset as well.

10. Click Enable. The dataset is enabled for Real- time Customer Profile in Experience Platform, as shown:
    ![Adobe](/images/datasets/create-individual-dataset5.png "Create Datasets")
11. Scroll down to ADD DATA section and click Choose files, as shown:
    ![Adobe](/images/datasets/create-individual-dataset6.png "Create Datasets")
    The files explorer window opens.
12. Select the relevant regional CRMData_usa.json file provided to you by your Instructor. In this example, CRMData_usa.json is selected, as shown:
    ![Adobe](/images/datasets/create-individual-dataset7.png "Create Datasets")
13. Click Open to complete the data file selection and return to the Datasets page. The selected file is being uploaded to the dataset name Individual Profiles. The Datasets page is updated with the data processing activity. After the data loading is complete, the dataset is updated with the newly added data from the selected CRMData file, as shown:
    ![Adobe](/images/datasets/create-individual-dataset8.png "Create Datasets")
    Note: Data loading may take a minute or two. Refresh the page to view the Success status on the Dataset activity page
