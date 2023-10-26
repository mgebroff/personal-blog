---
title: "Create Individual Profile XDM Schema"
description: Create a new XDM schema to capture the customer identity details and attributes.
author: Michael Mgebroff
authorImage: https://images.unsplash.com/photo-1594643781026-abcb610d394f?auto=format&fit=crop&q=80&w=3500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
coverImage: https://images.unsplash.com/photo-1594643781026-abcb610d394f?auto=format&fit=crop&q=80&w=3500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
date: "10-23-2023"
---

1. Create attributes based XDM schema.
2. Add field groups to the XDM schema.
3. Add a custom field group to the XDM schema.
4. Define identity mapping.

## Create Attributes- Based XDM Schema

1. On the browser, navigate to Experience Platform Home page.
2. On the left menu, under DATA MANAGEMENT, click Schemas. The Schemas page opens.
3. On the top- right, click Create schema to create a new schema. A drop- down list of schema types is displayed, as shown.

![Adobe](/images/schema/profile-xdm-schema.png "Create Attributes- Based XDM Schema")

4. Click XDM Individual Profile to create attributes based XDM schema. The Untitled schema page opens.
5. On the right pane Schema properties section, in the Display name box, type name of the Schema.
6. Click Save to save the schema. The Schema saved successfully message appears. The newly created schema displays a default class containing some fields and field structures. Observe that under the Class section, XDM Individual Profile is listed, as shown:

![Adobe](/images/schema/profile-xdm-schema2.png "Create Attributes- Based XDM Schema")

\*\* When ingesting the data against this schema, some fields are required. For example, \_id is a required field with a unique id representing a specific data ingestion.

## UI updates:

![Adobe](/images/schema/profile-xdm-schema3.png "Create Attributes- Based XDM Schema")

![Adobe](/images/schema/profile-xdm-schema4.png "Create Attributes- Based XDM Schema")

## Add Field Groups to the XDM Schema

1. On the left pane, under the Composition > Field groups section, click Add, as shown, to add the demographic details field group.
   ![Adobe](/images/schema/profile-xdm-schema5.png "Create Attributes- Based XDM Schema")
   The Add field groups page opens.
2. Retain the selection of Use existing field groups.
3. From the NAME column, select the following field groups, as shown:

   - Demographic Details
   - Personal Contact Details
   - Preference Details
     ![Adobe](/images/schema/profile-xdm-schema6.png "Create Attributes- Based XDM Schema")

4. On the top - right, click Add field groups to add the selected field groups to the schema. The added field groups appear on the schema Composition pane, as shown
   ![Adobe](/images/schema/profile-xdm-schema7.png "Create Attributes- Based XDM Schema")
5. Click Save to save the edits.

## Add a Custom Field Group to the XDM Schema

1. On the left pane, under the Composition > Field groups section, click Add to add a new field group. The Add field groups page opens.
2. Click the option Create a new field group. The Create a new field group section opens.
3. In the Display name section, type Profile Identification name.
4. In the Description section, type Profile Identification name.
   In this example, the display name and description are defined as John Profile Identification, as shown:
   ![Adobe](/images/schema/profile-xdm-schema8.png "Create Attributes- Based XDM Schema")
5. Click Add field groups to add the newly created field group to the schema. The schema structure is updated with the newly added field group. However, the new field group is still empty. You will add fields to the new field group.
6. On the left pane, under the Field groups section, click the newly added field group your Profile Identification.
7. Next to your schema name, click the add field icon, as shown:
   ![Adobe](/images/schema/profile-xdm-schema9.png "Create Attributes- Based XDM Schema")

A new field named Untitled Field | Type is added to the schema and the Field properties pane opens on the right. The new field represents a custom object under your Experience PlatformTenant ID.

Note: You can check the Tenant ID for your Experience Platform instance in yourEnvironment Variables. In these activities, the name of the Tenant ID is based on theExperience Platform regional instance you are using, such as EMEA, US, JAPAN, and APAC.

8. On the Field properties pane, provide the following definitions:

   - In the Field name box, type identification.
   - In the Display name box, type identification.
   - From the Type drop- down menu, select Object.
   - Click the Field Group drop- down arrow to select the previously created Profile Identification field group, as shown
     ![Adobe](/images/schema/profile-xdm-schema10.png "Create Attributes- Based XDM Schema")
   - Click Apply to save your changes. The Apply button is enabled after you select the respective field group. The new identification object is added to the schema under the tenantID node.

   You will now add ecid, emailId, emailIdSha256, and mobilenr fields to this identification object.

9. Click the add field icon next to identification | Object, as shown:
   ![Adobe](/images/schema/profile-xdm-schema11.png "Create Attributes- Based XDM Schema")
   A new field named Untitled Field | Type is added under identification. The Field properties pane boxes appear on the right.
10. To configure the values for the ecid field, perform the following steps:

    - In the Field name box, type ecid.
    - In the Display name box, type ecid.
    - From the Type drop - down menu, select String, as shown:
      ![Adobe](/images/schema/profile-xdm-schema13.png "Create Attributes- Based XDM Schema")
    - Scroll down and click Apply, as shown, to save the field.
      ![Adobe](/images/schema/profile-xdm-schema14.png "Create Attributes- Based XDM Schema")

After the initial field configuration is complete, the ecid field appears under the identification | Object node.

11. Click the add field icon next to identification | Object to add another new field for emailId. A new field named Untitled Field | Type is added under identification | Object. The Field properties pane appears on the right.
12. To configure the values for the emailId field, perform the following steps:

    - In the Field name box, type emailId.
    - In the Display name box, type emailId.
    - From the Type drop- down menu, select String.
    - Scroll down and click Apply to save the field. After the initial field configuration is complete,the emailId field appears under identification | Object node, as shown:
      ![Adobe](/images/schema/profile-xdm-schema15.png "Create Attributes- Based XDM Schema")

13. Click the add field icon next to identification| Object to add another new field for emailIdSha256.A new field named Untitled Field | Type is added under the identification| Object. The Field properties pane appears on the right.
14. To configure the values for the emailIdSha256 field, perform the following steps:

    - In the Field name box, type emailIdSha256.
    - In the Display name box, type emailIdSha256.
    - From the Type drop- down menu, select String.
    - Scroll down and click Apply to save the field. After the initial field configuration is complete,the emailIdSha256 field appears under identification| Object, as shown:
      ![Adobe](/images/schema/profile-xdm-schema16.png "Create Attributes- Based XDM Schema")

15. Click the add field icon next to the identification | Object to add another new field for mobilenr. A new field named Untitled Field | Type is added under identification | Object. The Field properties pane appears on the right
16. To configure the values for the mobilenr field, perform the following steps:

    - In the Field name box, type mobilenr.
    - In the Display name box, type mobilenr.
    - From the Type drop- down menu, select String.
    - Scroll down and click Apply to save. The mobilenr field appears under the identification |Object, as shown:
      ![Adobe](/images/schema/profile-xdm-schema17.png "Create Attributes- Based XDM Schema")
    - Observe that in the field group structure, each field is defined as String type.

## Define Identity Mapping

The newly created fields under the identification | Object are not defined as identity fields, yet.You will define the following fields in the schema Individual Profiles Schema as identifiers:

    - ecid (secondary)
    - emailId (primary)
    - emailIdSha256 (primary)
    - mobilenr (secondary)

1. On the Structure pane, under identification | Object, click ecid. The corresponding field properties are displayed on the right pane.
2. In the Field properties section, scroll down and click the Identity check box, as shown:
   ![Adobe](/images/schema/profile-xdm-schema18.png "Create Attributes- Based XDM Schema")
3. From the Identity namespace drop- down menu, select ECID, as shown:
   ![Adobe](/images/schema/profile-xdm-schema19.png "Create Attributes- Based XDM Schema")
4. Click Apply, as shown, to save the changes. The ecid field under the identification object is updated as a secondary identifier.
   ![Adobe](/images/schema/profile-xdm-schema20.png "Create Attributes- Based XDM Schema")
5. On the Structure pane, under identification | Object, click emailId. The corresponding field properties are displayed on the right pane.
6. In the Field properties section, scroll down and click the Identity checkbox.
7. Click the Primary Identity checkbox.
8. From the Identity namespace drop- down menu, select Email, as shown:
   ![Adobe](/images/schema/profile-xdm-schema21.png "Create Attributes- Based XDM Schema")
9. Click Apply to save the changes. The emailId field is updated as a primary identifier.
10. On the Structure pane, under identification | Object, click emailIdSha256. The corresponding field properties are displayed on the right pane.
11. In the Field properties section, scroll down and click the Identity checkbox.
12. From the Identity namespace drop- down menu, select EmailIdSha256(lowercase).
13. Click Apply to save the changes. The emailIdSha256 field is updated as a secondary identifier.
14. On the Structure pane, under identification | Object, click mobilenr. The corresponding field properties are displayed on the right pane.
15. In the Field properties section, scroll down and click the Identity checkbox.
16. From the Identity namespace drop- down menu, select Phone.
17. Click Apply to save the changes. The mobilenr field is updated as a secondary identifier. Observe that all the above identities are now listed under identities section, as shown:
    ![Adobe](/images/schema/profile-xdm-schema22.png "Create Attributes- Based XDM Schema")
18. On the top- right, click Save to save the changes to the schema.
19. To enable the newly created XDM schema with Real- time Customer Profile, perform the following steps:

    - Under the Composition pane, click the schema name,<your name>- Individual Profiles Schema. The Schema properties section opens on the right pane.
    - Click the Profile key, as shown:
      ![Adobe](/images/schema/profile-xdm-schema23.png "Create Attributes- Based XDM Schema")
      The Enable for profile confirmation box appears.
    - Click Enable, as shown:
      ![Adobe](/images/schema/profile-xdm-schema24.png "Create Attributes- Based XDM Schema")
      Configure and Manage Adobe Experience PlatformModule 2: Model the Incoming Data in ExperiencePlatform25c. Click Enable, as shown:On the Field properties pane, the Profile button changes to enabled now. The new XDMschema is now configured to be part of the Real- time Customer Profile.

20. Click Save to save changes to the schema.
