---
title: "Web SDK - Create and Configure Data Elements"
description: Create and Configure Data Elements for Luma Website.
author: Michael Mgebroff
authorImage: https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?auto=format&fit=crop&q=80&w=3696&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
coverImage: https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?auto=format&fit=crop&q=80&w=3696&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
date: "10-26-2023"
---

1. Create Data Elements using Experience Cloud ID and Data Layer extension.
2. Create and configure Data Elements with Web SDK Extension.

## Create Data Elements using Experience Cloud ID and Data Layer Extensions

We will create Data Elements within your tag property that map to data collection variables from your website. You will map the D ata Elements to an XDM object that you created in the previous activity.

To create Data Elements within your tag property:

1. Ensure the Adobe Experience Platform Data Collection page is open.
2. On the left pane, click Data Elements, as shown:
   ![Adobe](/images/websdk/websdk21.png "Create and Configure Data Elements")
   As you have not created any data element yet, a help video opens.
3. Click Create New Data Element. The Create Data Element dialog opens.
4. To create an Execution Context ID (ECID) data element, perform the following actions:

   - In the Name box, type ECID.
   - From the Extension dropdown, select Experience Cloud ID Service.
   - From the Data Element Type dropdown, select ECID.
   - From the Storage Duration dropdown, select Visitor.
     The ECID data element configuration should look similar to the below screenshot, as shown:
     ![Adobe](/images/websdk/websdk22.png "Create and Configure Data Elements")

5. Click Save. The ECID data element is created and listed on the Data Elements tab, as shown:
   ![Adobe](/images/websdk/websdk23.png "Create and Configure Data Elements")

To create an Email data element, perform the following:

6. Click Add Data Element. The Create Data Element dialog opens.
7. Perform the following actions:

   - In the Name box, type Email.
   - From the Extension dropdown, select Adobe Client Data Layer.
   - From the Data Element Type dropdown, select Data Layer Computed State.
   - From the Storage Duration dropdown, select Visitor.
   - On the right, in the [Optional] Path box, type data.email.

     The Email data element configuration should look similar to the below screenshot, as shown:
     ![Adobe](/images/websdk/websdk24.png "Create and Configure Data Elements")

8. Click Save. The Email data element is created and listed on the Data Elements tab.
9. Similarly, perform steps 6 through 9 and create the following additional data elements using the information provided in the tables below:

   - pageName
   - pageType
   - pageSection
   - interactionType
   - productName
   - productCategory
   - productInteraction
   - productPrice
   - totalCart
   - productSku
   - quantity

## pageName

| Element           | Values                    |
| ----------------- | ------------------------- |
| Name              | pageName                  |
| Extension         | Adobe Client Data Layer   |
| Data Element Type | Data Layer Computed State |
| Storage Duration  | PageView                  |
| Path              | data.pageName             |

The pageName Data Element configuration should look similar to the below screenshot:
![Adobe](/images/websdk/websdk25.png "Create and Configure Data Elements")

## pageType

| Element           | Values                    |
| ----------------- | ------------------------- |
| Name              | pageType                  |
| Extension         | Adobe Client Data Layer   |
| Data Element Type | Data Layer Computed State |
| Storage Duration  | PageView                  |
| Path              | data.pageType             |

The pageType Data Element configuration should look similar to the below screenshot:
![Adobe](/images/websdk/websdk26.png "Create and Configure Data Elements")

## pageSection

| Element           | Values                    |
| ----------------- | ------------------------- |
| Name              | pageSection               |
| Extension         | Adobe Client Data Layer   |
| Data Element Type | Data Layer Computed State |
| Storage Duration  | PageView                  |
| Path              | data.pageSection          |

The pageSection Data Element configuration should look similar to the below screenshot:
![Adobe](/images/websdk/websdk27.png "Create and Configure Data Elements")

## interactionType

| Element           | Values                    |
| ----------------- | ------------------------- |
| Name              | interactionType           |
| Extension         | Adobe Client Data Layer   |
| Data Element Type | Data Layer Computed State |
| Storage Duration  | PageView                  |
| Path              | data.interactionType      |

The interactionType Data Element configuration should look similar to the below screenshot:
![Adobe](/images/websdk/websdk28.png "Create and Configure Data Elements")

## productName

| Element           | Values                    |
| ----------------- | ------------------------- |
| Name              | productName               |
| Extension         | Adobe Client Data Layer   |
| Data Element Type | Data Layer Computed State |
| Storage Duration  | PageView                  |
| Path              | data.productName          |

The productName Data Element configuration should look similar to the below screenshot:
![Adobe](/images/websdk/websdk29.png "Create and Configure Data Elements")

## productCategory

| Element           | Values                    |
| ----------------- | ------------------------- |
| Name              | productCategory           |
| Extension         | Adobe Client Data Layer   |
| Data Element Type | Data Layer Computed State |
| Storage Duration  | PageView                  |
| Path              | data.productCategory      |

The productCategory Data Element configuration should look similar to the below screenshot:
![Adobe](/images/websdk/websdk30.png "Create and Configure Data Elements")

## productInteraction

| Element           | Values                    |
| ----------------- | ------------------------- |
| Name              | productInteraction        |
| Extension         | Adobe Client Data Layer   |
| Data Element Type | Data Layer Computed State |
| Storage Duration  | PageView                  |
| Path              | data.productInteraction   |

The productInteraction Data Element configuration should look similar to the below screenshot:
![Adobe](/images/websdk/websdk31.png "Create and Configure Data Elements")

## productPrice

| Element           | Values                    |
| ----------------- | ------------------------- |
| Name              | productPrice              |
| Extension         | Adobe Client Data Layer   |
| Data Element Type | Data Layer Computed State |
| Storage Duration  | PageView                  |
| Path              | data.productPrice         |

The productPrice Data Element configuration should look similar to the below screenshot:
![Adobe](/images/websdk/websdk32.png "Create and Configure Data Elements")

## totalCart

| Element           | Values                    |
| ----------------- | ------------------------- |
| Name              | totalCart                 |
| Extension         | Adobe Client Data Layer   |
| Data Element Type | Data Layer Computed State |
| Storage Duration  | PageView                  |
| Path              | data.totalCart            |

The totalCart Data Element configuration should look similar to the below screenshot:
![Adobe](/images/websdk/websdk33.png "Create and Configure Data Elements")

## productSKU

| Element           | Values                    |
| ----------------- | ------------------------- |
| Name              | productSKU                |
| Extension         | Adobe Client Data Layer   |
| Data Element Type | Data Layer Computed State |
| Storage Duration  | PageView                  |
| Path              | data.productSKU           |

The productSKU Data Element configuration should look similar to the below screenshot:
![Adobe](/images/websdk/websdk34.png "Create and Configure Data Elements")

## quantity

| Element           | Values                    |
| ----------------- | ------------------------- |
| Name              | quantity                  |
| Extension         | Adobe Client Data Layer   |
| Data Element Type | Data Layer Computed State |
| Storage Duration  | PageView                  |
| Path              | data.productSKU           |

The quantity Data Element configuration should look similar to the below screenshot:
![Adobe](/images/websdk/websdk35.png "Create and Configure Data Elements")

## Create Data Elements with Web SDK extension

- addToCat
- checkOut
- pageView
- productView

To create the addToCart Data Element:

1. Ensure the Data Elements page is open.
2. Click Add Data Element. The Create Data Element dialog opens.
3. Perform the following actions:
   - In the Name box, type addToCart.
   - From the Extension dropdown, select Adobe Experience Platform Web SDK.
   - From the Data Element Type dropdown, select XDM object.
   - On the right, from the Sandbox dropdown, select your assigned sandbox. The PRODUCTION Prod (vA7) sandbox is used for demonstration purpose.
   - From the Schema dropdown, select AEP Demo - Website Interactions Schema.
   - Click identityMap from the XDM Object, as shown:
     ![Adobe](/images/websdk/websdk36.png "Create and Configure Data Elements")
   - Click the database icon, as shown:
     ![Adobe](/images/websdk/websdk37.png "Create and Configure Data Elements")
     The Select Data Element dialog opens.
   - Select ECID Data Element that you created in the previous activity and click Select, as shown:
     ![Adobe](/images/websdk/websdk38.png "Create and Configure Data Elements")
     The Value box appears on the right.
   - Click productListItems array in the XDM Object. The Product list items with Population strategy options appear on the right, as shown:
     ![Adobe](/images/websdk/websdk39.png "Create and Configure Data Elements")
   - Click Provide entire array. The Data element box appears.
   - Type %cart.fix% in the Data element box.
   - Expand web > webInteraction and click name. The Value box appears on the right.
   - Click the database icon. The Select Data Element dialog opens.
   - Select the pageName Data Element that you created in the previous activity and click Select.The Value box is now updated.
   - Expand web > webPageDetails and click name. The Value box appears on the right.
   - Click the database icon. The Select Data Element dialog opens.
   - Select the pageName Data Element that you created in the previous activity and click Select.The Value box is now updated.
   - Under webPageDetails, click siteSection. The Value box appears on the right.
   - Click the database icon. The Select Data Element dialog opens.
   - Select the pageSection Data Element that you created in the previous activity and click Select. The Value box is now updated.
4. Click Save. The Data Element is created and listed on the Data Elements tab.

To create the checkOut Data Element:

5. Ensure the Data Elements tab is open and click Add Data Element. The Create Data Element dialog opens.
6. Perform the following actions:
   - In the Name box, type checkOut.
   - From the Extension dropdown, select Adobe Experience Platform Web SDK.
   - From the Data Element Type dropdown, select XDM object.
   - On the right, from the Sandbox dropdown, select your assigned sandbox.
   - From the Schema dropdown, select AEP Demo - Website Interactions Schema.
   - Click identityMap from the XDM Object.
   - Click the database icon. The Select Data Element dialog opens.
   - Select ECID Data Element that you created in the previous activity and click Select. The Value box appears on the right.
   - Expand commerce > checkouts and click value. The Value box appears on the right.
   - Type 1 in the Value box.
   - Click order > currencyCode. The Value box appears on the right.
   - In the Value box, type USD.
   - Under order, click priceTotal. The Value box appears on the right
   - Click the database icon. The Select Data Element dialog opens.
   - Click the totalCart Data Element that you created in the previous activity and click Select. TheValue box is now updated.
   - Click eventType. The Value box appears on the right.
   - Click the database icon. The Select Data Element dialog opens.
   - Click the interactionType D ata Element that you created in the previous activity and clickSelect. The Value box is now updated.
   - Click productListItems. The Population strategy options appear on the right.
   - Click Provide entire array. The Data Element box appears.
   - In the Data Element box, type %cart.fix%.
   - Expand web > webInteraction and click name. The Value box appears on the right.
   - Click the database icon. The Select Data Element dialog opens.
   - Click the pageName Data Element that you created in the previous activity and click Select. TheValue box is now updated.
   - Expand web > webPageDetails and click name. The Value box appears on the right.
   - Click the database icon. The Select Data Element dialog opens.
   - Click the pageName Data Element that you created in the previous activity and click Select. TheValue box is now updated.
   - Expand web > webPageDetails and click name. The Value box appears on the right.
   - Click the database icon. The Select Data Element dialog opens.
   - Click the pageName Data Element that you created in the previous activity and click Select. TheValue box is now updated.
   - Under webPageDetails, click siteSection. The Value box appears on the right.
   - Click the database icon. The Select Data Element dialog opens.
   - Click the pageSection Data Element that you created in the previous activity and click Select.
     The Value box is now updated.
7. Click Save. The Data Element is created and listed on the Data Elements tab.

To create the pageView Data Element: 8. Ensure the Data Elements tab is open and click Add Data Element. The Create Data Element dialog opens. 9. Perform the following actions:

- In the Name box, type pageView.
- From the Extension dropdown, select Adobe Experience Platform Web SDK.
- From the Data Element Type dropdown, select XDM object.
- On the right, from the Sandbox dropdown, select your assigned sandbox.
- From the Schema dropdown, select AEP Demo - Website Interactions Schema.
- Click identityMap from the XDM Object.
- Click the database icon. The Select Data Element dialog opens.
- Select ECID Data Element that you created in the previous activity and click Select. The Value box appears on the right.
- Click productListItems. The Population strategy options appear on the right.
- Click Provide entire array. The Data Element box appears.
- I n the Data Element box, t ype %cart.fix%.
- Expand web > webInteraction and click name. The Value box appears on the right.
- Click the database icon. The Select Data Element dialog opens.
- Click the pageName Data Element that you created in the previous activity and click Select. TheValue box is now updated.
- Expand web > webPageDetails and click name. The Value box appears on the right.
- Click the database icon. The Select Data Element dialog opens.
- Click the pageName D ata Element that you created in the previous activity and click Select. The Value box is now updated
- Under webPageDetails, click siteSection. The Value box appears on the right.
- Click the database icon. The Select Data Element dialog opens.
- Click the pageSection Data Element that you created in the previous activity and click Select.The Value box is now updated.

10. Click Save. The Data Element is created and listed on the Data Elements tab.

To create the productView Data Element:

11. Ensure the Data Elements tab is open and click Add Data Element. The Create Data Element dialog opens.
12. Perform the following actions:

- In the Name box, type productView.
- Select Adobe Experience Platform Web SDK from the Extension dropdown.
- Select XDM object from the Data Element Type dropdown.
- On the right, from the Sandbox dropdown, select your assigned sandbox. In this step,PRODUCTION Prod (vA7) is used for demonstration purpose.
- From the Schema dropdown, select AEP Demo - Website Interactions Schema.
- Click identityMap from the XDM Object.
- Click the database icon. The Select Data Element dialog opens.
- Select ECID Data Element that you created in the previous activity and click Select. The Value box appears on the right.
- Click productListItems. The Population strategy options appear on the right.
- Click Provide entire array. The Data Element box appears.
- In the Data Element box, t ype %cart.fix%.
- Expand commerce > productViews and click id. The Value box appears on the right.
- Click the database icon. The Select Data Element dialog opens.
- Select the productSku D ata Element that you created in the previous activity and click Select. he Value box is now updated.
- Under commerce > productViews, click value. The Value box appears on the right.
- In the Value box, t ype 1.
- Click eventType. The Value box appears on the right.
- In the Value box, type commerce.productViews.
- Expand web > webInteraction and click name. The Value box appears on the right.
- Click the database icon. The Select Data Element dialog opens.
- Click the pageName Data Element that you created in the previous activity and click Select. TheValue box is now updated.
- Expand web > webPageDetails and click name. The Value box appears on the right.
- Click the database icon. The Select Data Element dialog opens.
- Click the pageName Data Element that you created in the previous activity and click Select. TheValue box is now updated.
- Under webPageDetails, click siteSection. The Value box appears on the right.
- Click the database icon. The Select Data Element dialog opens.
- Click the pageSection Data Element that you created in the previous activity and click Select.The Value box is now updated.

13. Click Save. The Data Element is created and listed on the Data Elements tab.
