/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MedCardProps } from "./MedCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type MedCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => MedCardProps;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function MedCardCollection(props: MedCardCollectionProps): React.ReactElement;
