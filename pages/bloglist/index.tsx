/***** IMPORT ***********************************************************************************/
import { PageLayout } from "@components/layouts";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

/***** BLOG LIST PAGE ****************************************************************************/
const Contact: NextPage = () => {
  return (
    <PageLayout pageTitle="List View">
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={750}
      />

      <br />
      <b>AEP Schema & Dataset in Adobe Experience Platform</b>
      <br />
      <ul>
        <li>
          <Link
            href={`blogs/aep-create-individual-event-xdm-schema`}
            legacyBehavior
          >
            &nbsp; &nbsp; - Create Event XDM Schema
          </Link>
        </li>
        <li>
          <Link
            href={`blogs/aep-create-individual-profile-xdm-schema`}
            legacyBehavior
          >
            &nbsp; &nbsp; - Create Individual Profile XDM Schema
          </Link>
        </li>
        <li>
          <Link href={`blogs/aep-create-configure-datasets`} legacyBehavior>
            &nbsp; &nbsp; - Create and Configure Dataset
          </Link>
        </li>
        <li>
          <Link
            href={`blogs/aep-create-configure-event-datasets`}
            legacyBehavior
          >
            &nbsp; &nbsp; - Create and Configure Event Dataset
          </Link>
        </li>
      </ul>
      <br />
      <b>Configure Customer Journey Analytics in Adobe Experience Platform</b>
      <ul>
        <li>
          <Link href={`blogs/aep-customer-journey-analytics`} legacyBehavior>
            &nbsp; &nbsp; - Customer Journey Analytics CJA
          </Link>
        </li>
        <li>
          <Link
            href={`blogs/aep-customer-journey-analytics-workflow-steps`}
            legacyBehavior
          >
            &nbsp; &nbsp; - Customer Journey Analytics Workflow
          </Link>
        </li>
        <li>
          <Link href={`blogs/aep-cja-connections`} legacyBehavior>
            &nbsp; &nbsp; - Customer Journey Connections Overview
          </Link>
        </li>
        <li>
          <Link href={`blogs/aep-create-connection`} legacyBehavior>
            &nbsp; &nbsp; - Create Customer Journey Connections
          </Link>
        </li>
        <li>
          <Link href={`blogs/aep-cja-create-dataview`} legacyBehavior>
            &nbsp; &nbsp; - Create Customer Journey Data View
          </Link>
        </li>
        <li>
          <Link href={`blogs/aep-cja-prepare-data-for-analysis`} legacyBehavior>
            &nbsp; &nbsp; - Prepare Data for Analysis in CJA
          </Link>
        </li>
      </ul>
      <br />
      <b>Create and Analyze Using Adobe Customer Journey Analytics</b>
      <ul>
        <li>
          <Link href={`blogs/aep-cja-intro`} legacyBehavior>
            &nbsp; &nbsp; - Customer Journey Analytics (CJA)
          </Link>
        </li>
        <li>
          <Link href={`blogs/aep-cja-calculated-metrics`} legacyBehavior>
            &nbsp; &nbsp; - Create Calculated Metrics and Dimensions (CJA)
          </Link>
        </li>
      </ul>
      <ul>
        <br />
        <b>Create Audiences in Adobe Real-Time Customer Data Platform</b>
        <li>
          <Link
            href={`blogs/aep-create-audience-bases-attributes`}
            legacyBehavior
          >
            &nbsp; &nbsp; - Create Audience Bases Attributes
          </Link>
        </li>
        <li>
          <Link href={`blogs/aep-create-audience-bases-events`} legacyBehavior>
            &nbsp; &nbsp; - Create Audience Bases Events
          </Link>
        </li>
        <li>
          <Link
            href={`blogs/aep-componse-audience-building-custom-rule`}
            legacyBehavior
          >
            &nbsp; &nbsp; - Componse Audience By Building Custom Rule
          </Link>
        </li>
        <li>
          <Link href={`blogs/aep-create-sequential-audience`} legacyBehavior>
            &nbsp; &nbsp; - Create Sequential Audience
          </Link>
        </li>
        <li>
          <Link href={`blogs/aep-create-multi-entity-audience`} legacyBehavior>
            &nbsp; &nbsp; - Create Multi Entity Audience
          </Link>
        </li>
        <li>
          <Link href={`blogs/aep-create-aggregation-audience`} legacyBehavior>
            &nbsp; &nbsp; - Create Aggregation Audience
          </Link>
        </li>
        <li>
          <Link href={`blogs/aep-create-dynamic-audience`} legacyBehavior>
            &nbsp; &nbsp; - Create Dynamic Audience
          </Link>
        </li>
        <li>
          <Link href={`blogs/aep-import-audience`} legacyBehavior>
            &nbsp; &nbsp; - Import Audience
          </Link>
        </li>
        <li>
          <Link
            href={`blogs/aep-compose-audience-by-adding-existing-audience`}
            legacyBehavior
          >
            &nbsp; &nbsp; - Compose Audience By Adding Existing Audience
          </Link>
        </li>
        <li>
          <Link
            href={`blogs/aep-componse-audience-building-custom-rule`}
            legacyBehavior
          >
            &nbsp; &nbsp; - Componse Audience Building Custom Rule
          </Link>
        </li>
        <li>
          <Link
            href={`blogs/aep-create-audience-from-existing-audience`}
            legacyBehavior
          >
            &nbsp; &nbsp; - Create Audience From Existing Audience
          </Link>
        </li>
      </ul>

      <br />
      <b>Adobe Experience Cloud with Web SDK</b>
      <ul>
        <li>
          <Link
            href={`blogs/aep-websdk-create-configure-datastream`}
            legacyBehavior
          >
            &nbsp; &nbsp; - Web SDK - Configure Data Stream
          </Link>
        </li>
        <li>
          <Link href={`blogs/aep-websdk-create-tag-property`} legacyBehavior>
            &nbsp; &nbsp; - Web SDK - Create a Tag Property
          </Link>
        </li>
        <li>
          <Link
            href={`blogs/aep-websdk-install-configure-extensions`}
            legacyBehavior
          >
            &nbsp; &nbsp; - Web SDK - Configure Extensions
          </Link>
        </li>
        <li>
          <Link href={`blogs/aep-websdk-create-data-elements`} legacyBehavior>
            &nbsp; &nbsp; - Web SDK - Create and Configure Data Elements
          </Link>
        </li>
        <li>
          <Link href={`blogs/aep-websdk-create-rules`} legacyBehavior>
            &nbsp; &nbsp; - Web SDK - Create Rules in Data Collection
          </Link>
        </li>
        <li>
          <Link href={`aep-websdk-event-forwarding`} legacyBehavior>
            &nbsp; &nbsp; - Web SDK - Event Forwarding in Data Collection
          </Link>
        </li>
        <li>
          <Link href={`aep-websdk-build-validate-deploy`} legacyBehavior>
            &nbsp; &nbsp; - Web SDK - Build, Validate, and Deploy in Data
            Collection
          </Link>
        </li>
      </ul>
    </PageLayout>
  );
};

/***** IMPORT ***********************************************************************************/
export default Contact;
