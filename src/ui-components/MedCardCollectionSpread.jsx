/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Medication } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import MedCard from "./MedCard";
import { Collection } from "@aws-amplify/ui-react";
export default function MedCardCollectionSpread(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Medication,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={3}
      templateColumns="1fr 1fr 1fr"
      autoFlow="row"
      alignItems="center"
      justifyContent="center"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "MedCardCollectionSpread")}
    >
      {(item, index) => (
        <MedCard
          medication={item}
          height="387px"
          width="260px"
          margin="15px 10px 15px 10px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></MedCard>
      )}
    </Collection>
  );
}
