---
title: "Configure Data Usage Policies"
description: Configure Data Usage Policies in Experience Platform.
author: Michael Mgebroff
authorImage: https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
coverImage: https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
date: "10-25-2023"
---

1. Create a third - party export restriction data usage police.
2. Apply data governance labels.

## Create a Third- party Export Restriction Data Usage Police

1. On the left navigation menu, go to PRIVACY > Policies. The Policies page opens.
2. Click Browse tab, if not already open. Existing policies are listed, as shown.
   ![Adobe](/images/policies/configure-policies.png "Configure Policies")
3. Observe that there is an out- of - the- box policy 3rd party export restriction associated with theC2 label and the marketing action Export to Third Party. For this activity, you will create a copy of this policy.

   Note: In real scenario, you will be selecting this default policy and enable the toggle key on the right pane to apply the policy

4. Click Create policy. The create policy wizard opens for you to combine multiple labels and marketing action restrictions and create a data usage policy.
5. The Choose type of policy dialog opens.
6. Select Data governance policy, as shown:
   ![Adobe](/images/policies/configure-policies2.png "Configure Policies")

   Note: You can create data governance policies with the Experience Platform licenses. Consent policies are only available for organizations that have purchased Adobe Healthcare Shield orAdobe Privacy & Security Shield.

7. Click Continue. The Configure page for Create policy opens.
8. Under Policy details section, in the Name box, type Third party export restriction. In this example, the name is John-Third party export restriction.
9. Optionally, provide a relevant description.
10. From the Name column, select C2, the label for No third- party export, as shown:
    ![Adobe](/images/policies/configure-policies3.png "Configure Policies")
11. Click Next. The Select marketing actions page opens.
12. From the MARKETING ACTIONS column, select Export to Third Party, as shown
    ![Adobe](/images/policies/configure-policies4.png "Configure Policies")
13. Click Next. The policy Review page opens, as shown:
    ![Adobe](/images/policies/configure-policies5.png "Configure Policies")
14. Verify the details and click Finish.
    The new policy is created and added to the Policies list, as shown:
    ![Adobe](/images/policies/configure-policies6.png "Configure Policies")
15. Observe that in the CREATED BY column, your name is displayed. Rest of the default policies show Adobe.
    Note: All data usage policies (including core policies provided by Adobe) are disabled by default. For an individual policy to be considered for enforcement, you must manually enable that policy.
16. From the NAME column, click the row of the policy created by you. Properties of the policy are displayed on the right pane.
17. Click the Disabled key to enable the selected policy, as shown
    ![Adobe](/images/policies/configure-policies7.png "Configure Policies")
    Note: Enforcement of governance policies is a key component to the framework.Enforcement happens downstream when data is activated and sent out of ExperiencePlatform, specifically with the Real-Time Customer Data Platform.

## Apply Data Governance L abel

1. On the left navigation menu, go to DATA MANAGEMENT > Schemas. The Schemas page opens.
2. Find and click the attributes- based schema you created in Module 2 Activity 2.1. The schema page opens. In this example, the John- Individual Profiles Schema is opened, as shown:
   ![Adobe](/images/policies/configure-policies8.png "Configure Policies")
3. Click Labels. The schema fields that can be associated with labels are listed. You can apply labels to individual fields in a schema.
4. From the FIELD NAME column, select the fields that you need to apply with the data usage policy. In this example, the field Mobilenr is selected, as shown:
   ![Adobe](/images/policies/configure-policies9.png "Configure Policies")

   Note: You can use the Search option to look for a specific field from the lengthy list of fields.

5. On the right pane, click Apply access and data governance labels. The Apply access and data governance labels page opens.
6. In the NAME column of the listed labels section, scroll down to C2 label and select it, as shown:
   ![Adobe](/images/policies/configure-policies10.png "Configure Policies")
   The data governance label is applied on the selected field of the schema. Observe that this is the label that restricts the data usage for third- party exports

   Note: There are many out- of -the-box labels. You can create your own by using the Create label button. The three main types of labels are: Contract labels, Identity labels, and Sensitive labels that correspond to common reasons data might be restricted. Each label has aFRIENDLY NAME and a NAME, which is an abbreviation of the type and the number. For example, the C2 label is for No third- party export.

7. Click Save to return to the schema’s Labels page. The applied data governance label is displayed in the schema’s Labels page, as shown:
   ![Adobe](/images/policies/configure-policies11.png "Configure Policies")

   When you create audiences downstream to connect with third-party applications, you will seethe impact of the data usage policy you have applied on the XDM schema fields.
