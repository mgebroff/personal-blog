---
title: Customer Journey Analytics CJA Connections
description: Connections enable you to create a link between Platform datasets and CJA
author: Michael Mgebroff
authorImage: https://images.unsplash.com/photo-1444076784383-69ff7bae1b0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
coverImage: https://images.unsplash.com/photo-1444076784383-69ff7bae1b0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
date: "2022-03-25"
---

Connections enable you to create a link between Experience Platform datasets and CJA. You can
integrate multiple datasets for analysis and reporting.

The creation of connections is step 3 in CJA Workflow (in the diagram below) and it is how you pull the
data out of AEP into CJA Workspace in order to perform cross-channel analysis of your data.

## How to Create CJA Connections

Connection creation required permissions:
To create a CJA Connection, you need the following permissions in Adobe Admin Console:

## Adobe Experience Platform:

- Data Modeling: View Schemas, Manage Schemas
- Data Management: View Datasets, Manage Datasets
- Data Ingestion: Manage Sources

## Customer Journey Analytics:

- Product Admin Access

## Steps for Creating CJA Connection:

The steps involved in creating a connection are:

1. Select the sandbox in Experience Platform that contains the dataset in which you want to create a connection
2. Create a connection in CJA
3. Add the dataset to the connection
4. Provide the Connection Naming and Streaming details
5. Stitch together selected datasets in a Connection
6. Save the Connection configuration

## CJA Connection Setting Details:

Connection Setting UI
![Adobe](/images/customer-journey-analytics-img8.PNG "CJA Connections")
| Setting | Description |
|--------------|-----------|
| Connection name | Enter a unique name for the connection.|
| Connection description | Describe the purpose of this connection. |
| Sandbox | Choose a sandbox in Experience Platform that contains the dataset/s to which you want to create a connection |
| Sandbox | Once you have selected the sandbox, the left rail shows all the datasets in that sandbox that you can pull from. |
| Enable rolling data window | This checkbox, if checked, lets you define CJA data retention as a rolling window in months (1 month, 3 months, 6 months, etc.), at the connection level |
| Enable rolling data window | Data retention is based on event dataset timestamps and applies to event datasets only. No rolling data window setting exists for profile or lookup datasets since there are no applicable timestamps. However, if your connection includes any profile or lookup datasets (besides one or more event datasets), that data will be retained for the same time period |
| Enable rolling data window | The main benefit is that you store or report only on data that is applicable and useful and delete older data that is no longer useful. It helps you stay under your contract limits and reduces the risk of overage cost. |
| Enable rolling data window | If you leave the default (unchecked), the retention period will be superseded by the Adobe Experience Platform data retention setting. If you have 25 months’ worth of data in Experience Platform, CJA will get 25 months of data through backfill. If you deleted 10 of those months in Platform, CJA would retain the remaining 15 months. |
| Add datasets | Add datasets if no datasets appear in your dataset listing.|
| Dataset name | Select one or more dataset(s) you want to pull into Customer Journey Analytics and click Add.|
| Add datasets | Note: If you have a lot of datasets to choose from, you can search for the right one(s) using the Search datasets search bar above the list of datasets..|
| Last updated | For event datasets only, this setting is automatically set to the default timestamp field from event-based schemas in Experience Platform. “N/A” means that this dataset contains no data.|
| Schema | This is the schema based on which the dataset was created in Adobe Experience Platform. |
| Dataset type | For each dataset that you added to this connection, Customer Journey Analytics automatically sets the dataset type based on the data coming in.|
| Dataset type | There are 3 different dataset types: Event data, Profile data, and Lookup data. |
| Person ID | Select a person ID from the dropdown list of available identities. These identities were defined in the dataset schema in the Experience Platform. See below for information on how to use Identity Map as a Person ID. |
| Person ID | Note: If there are no person IDs to choose from, that means one or more person IDs have not been defined in the schema. |
| Key | Note: For lookup datasets only (such as \_id). |
| Matching Key | For lookup datasets only (such as \_id). |
| Import new data | Set to On or Off. |
| Backfill data | You can request to backfill the data in a dataset based on event timestamps. |
| Backfill data | For example, you can request to backfill the last 7 days’ worth of data, configure the right Person ID and test your connection for correct configuration. If everything looks good, you can backfill all the remaining data with ease. |
| Backfill data | In addition, you can enable the import of new data by dataset. For example, you can enable the import of new data for lookup data only. |
| Backfill status | Indicates whether any backfill data is processing. |

## Linking datasets in CJA Connections

Datasets in a CJA Connection are linked using the Person ID. The Person ID can be mapped in an
identity field defined in a schema associated with a dataset or identity Map if there are person IDs to
choose from. The Identity Map is available for any dataset that uses a schema based on the
ExperienceEvent XDM class. Identity Map allows you to upload key -> value pairs. The keys are identity
namespaces, and the value is a structure that holds the identity value.

When you select identity map as person ID in a CJA Connection, then you need two additional
configuration, Use Primary ID Namespace and Namespace if you do not use the Primary ID
Namespace.

## Identity Map Edge Cases

| Option                                   | No IDs are present in Identity Map | No IDs are marked as primary                                                                           | Multiple IDs are marked as primary                                                                                                                                                                    | Single ID is marked as primary                                                                        | Invalid namespace with an ID marked as primary                                                                                                                                                                                                         |
| ---------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Use Primary ID Namespace checked         | The row is dropped by CJA          | The row is dropped by CJA, as no primary ID is specified                                               | All IDs marked as primary, under all namespaces, are extracted into a list. They are then alphabetically sorted with this new sorting, the first namespace with its first ID is used as the Person ID | The single ID marked as primary is used as the Person ID                                              | Even though the namespace may be invalid not present in AEP, CJA will use the primary ID under that namespace as the Person ID                                                                                                                         |
| Specific Identity Map namespace selected | The row is dropped by CJA          | All IDs under the selected namespace are extracted into a list and the first is used as the Person ID. | All IDs under the selected namespace are extracted into a list and the first is used as the Person ID.                                                                                                | All IDs under the selected namespace are extracted into a list and the first is used as the Person ID | All IDs under the selected namespace are extracted into a list and the first is used as the Person ID. (Only a valid namespace can be selected at Connection creation time, so it is not possible for an invalid namespace/ID to be used as Person ID) |

## Connection Manager

The Connection Manager is the latest update to the Connection experience which adds two important
capabilities within the Connection Details page. It allows you to:

- Check the status of your connection’s datasets and of the ingestion process. This status check lets you know when your data is available so that you can go into Analysis Workspace and start analysis.
- Identify any data discrepancies due to misconfiguration. Are you missing any rows? If yes, what rows are missing and why? Did you misconfigure connections and cause missing data in CJA?

Specifically, with your Connection Manager, you can:

- View all your connections at a glance, including the owner, the sandbox, and when they were created and modified.
- View all datasets in a connection.
- Check the status of a connection.
- Delete a connection.
- Rename a connection.
- Create a data view from a connection.

## Connection Details Page

![Adobe](/images/customer-journey-analytics-img9.PNG "Connection Details Page")
