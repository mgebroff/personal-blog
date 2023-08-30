---
title: "Customer Journey Analytics Powered by Experience Platform"
description: Services Powered by Experience Platform an Overview
author: Michael Mgebroff
authorImage: https://images.unsplash.com/photo-1496354382709-25495428b2c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
coverImage: https://images.unsplash.com/photo-1496354382709-25495428b2c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
date: "2022-05-20"
---

## Introduction

Experience Businesses focus on building a clear understanding of their customers’ needs and interests.
Data-driven customer insights play a critical role in creating meaningful experiences. Customer Journey
Analytics (CJA) powered by Adobe Experience Platform is an application service that enables you to
deliver context and clarity to the complex multi-channel customer journey. You can generate actionable
insights on the customer data and remove pain points from the customer conversion process to deliver
exceptional experiences. You can also learn about issues and take corrective actions to predict and
influence their future engagements.

## Objectives

After completing this module, you will be able to:

- Explain the features and benefits of CJA
- Describe the architecture of CJA powered by Experience Platform
- Explain the CJA terminologies
- Review Experience Platform schemas & datasets
- Explain connections in CJA
- Create and configure a connection
- Create a data view
- Prepare data for analysis reports in CJA
- Create basic and advanced reports

## Customer Journey Analytics: Overview

CJA is an application service built on top of Experience Platform that:

- Brings analysis workspace capabilities in Experience Platform
- Contextualizes and visualizes data
- Stitches online and offline (cross-channel) data together to create analysis reports
- Delivers context and clarity to the complex multi-channel customer journey

## Key CJA Use Cases

- View and analyze data sequentially, spanning multiple channels
- Democratize data access that will enable you to make business decisions with data-derived insights
- Use data science to unlock deep insights and analysis
- Visualize and interact with your datasets by using ad-hoc reporting
- View non-web data
- Apply greater control over your data customization

## CJA vs Adobe Analytics

CJA expands the scope of Analytics by offering easy-to-use cross-channel capabilities and removing the
limitations in the previous versions of Adobe Analytics. Some notable improvements are unlimited
variables and events, unlimited unique values: Experience Platform is not constrained to any unique
limitations, such as the 500k unique values in traditional report suites, ability to alter historical data and
obtain cross-report-suite data.

## Customer Journey Analytics Architecture

---

## ![Adobe](http://localhost:3000/images/customer-journey-analytics-img1.PNG "Customer Journey Analytics Architecture")

## CJA Integration with Experience Platform

---

## ![Adobe](http://localhost:3000/images/customer-journey-analytics-img2.PNG "CJA Integration with Experience Platfor")

The data flow process from Experience Platform to CJA occurs in the following steps:

- Data Collection: Data can come through Adobe’s SDK, Adobe Solutions, third party tools andother technologies
- Data Ingestion: Data is received through streaming and batch files
- Data Persistence: Received data are organized into common set of schemas and cataloged in the Experience Data Model (XDM). XDM performs data governance and enables the Experience Platform’s Data Lake to act like a broker of raw data when it is requested.
- Data Analysis and Visualization

  - CJA integrates with Experience Platform through data connections
  - When CJA accesses the Data Lake, it pulls a copy of the dataset and the optimizes the data to a customization pattern
  - CJA uses a columnar format, stores data by columns rather than by rows, which enables fast access, filtration, and queries for analytical query processing
  - Data onboarded into Experience Platform is batched and uploaded every 15 minutes

- When a new data connection is setup with CJA, the processing under normal load takes less than 1hr. But for unusually high volume of data flow, it could take up to 24 hrs.

## CJA vs Adobe Analytics Terminologies

| CJA         |                              Description                               |                 Adobe Analytics Comparison |
| ----------- | :--------------------------------------------------------------------: | -----------------------------------------: |
| Data Schema |              Integrity constraints imposed on a database               |                                        N/A |
| Dataset     |         A schema and batches of data: Event Profile & Look up          | N/A, Click data, Attribute, Classification |
| Connection  |            Link between Experience Platform dataset and CJA            |                                        N/A |
| Data View   |                        User defined set of data                        |                Virtual Report Suites (VRS) |
| Components  | Building blocks of reports: Dimensions, Metrics, Filters, Date Ranges  |                       Components, Curation |
| Filter      | Subset of individuals based on characteristics: Person, Session, Event |               Segment Visitor, Visits, Hit |

## Data Schema

- A set of formulas called integrity constraints that are imposed by a database.
- A blueprint on how a database is to be constructed.

## Datasets

- An email, CRM, POS data, comes straight out Adobe Analytics on your website.
- A dataset consists of a schema and the batches of the data.
  The different types of dataset that are compatible with CJA are:
- Event: Represents the data that comes into the website by using any kind of interaction. Can be a sequence event such as clickstream data that has a timestamp, customer ID
- Profile: Is applied to your visitors or users or customers in the event data. Basically uploading CRM data about your customer and the data become customer attributes in Adobe Analytics
- Lookup: Is used to lookup values or keys found in either your event or profile data

## Connection

- Establishes a link between Experience Platform datasets and CJA.
- Enables you to integrate multiple datasets for your analysis and reporting

## Data View

- The user-defined set of data based on the dataset configuration with Experience Platform.
- A data view consists of multiple types of datasets for a holistic view of our customers.
- You can create different data views from the same connections with different settings.

## Components

- Components are the building block of reports
- The different types of components are:
  - Dimensions
  - Metrics
  - Filters
  - Data Ranges

## Filters:

- A subset of individuals based on the characteristics of individuals or dimensions we use to define the subset of users.
- Filters are called Segments in Adobe Analytics.
- Filters have different containers such as person, session, and event.
