/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Medication } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type MedCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    medication?: Medication;
    takeClick?: (event: SyntheticEvent) => void;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function MedCard(props: MedCardProps): React.ReactElement;
