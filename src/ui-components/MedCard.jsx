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
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Button, Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function MedCard(props) {
  const { medication, overrides, ...rest } = props;
  const deleteOnClick = useDataStoreDeleteAction({
    id: medication?.id,
    model: Medication,
    schema: schema,
  });
  const vectorThreeSixFourNineTwoSevenOneFourOnClick = useDataStoreDeleteAction(
    { id: medication?.id, model: Medication, schema: schema }
  );
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MedCard")}
    >
      <Flex
        gap="1px"
        direction="row"
        width="275px"
        height="unset"
        justifyContent="space-between"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="20px 20px 0px 30px"
        {...getOverrideProps(overrides, "options")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="12px"
          height="14px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          onClick={() => {
            deleteOnClick();
          }}
          {...getOverrideProps(overrides, "delete")}
        >
          <Icon
            width="12px"
            height="14px"
            viewBox={{ minX: 0, minY: 0, width: 12, height: 14 }}
            paths={[
              {
                d: "M9.42857 4.66667L9.42857 12.4444L2.57143 12.4444L2.57143 4.66667L9.42857 4.66667ZM8.14286 0L3.85714 0L3 0.777778L0 0.777778L0 2.33333L12 2.33333L12 0.777778L9 0.777778L8.14286 0ZM11.1429 3.11111L0.857143 3.11111L0.857143 12.4444C0.857143 13.3 1.62857 14 2.57143 14L9.42857 14C10.3714 14 11.1429 13.3 11.1429 12.4444L11.1429 3.11111Z",
                fill: "rgba(13,26,38,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            onClick={() => {
              vectorThreeSixFourNineTwoSevenOneFourOnClick();
            }}
            {...getOverrideProps(overrides, "Vector36492714")}
          ></Icon>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="14px"
          height="14px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "edit")}
        >
          <Icon
            width="14px"
            height="14px"
            viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
            paths={[
              {
                d: "M0 11.0837L0 14L2.91627 14L11.5173 5.39895L8.60106 2.48268L0 11.0837ZM13.7726 2.04718L11.9528 0.227426C11.8809 0.155333 11.7954 0.0981367 11.7013 0.059112C11.6073 0.0200872 11.5064 3.45356e-16 11.4046 0C11.3027 0 11.2019 0.0200872 11.1078 0.059112C11.0137 0.0981367 10.9282 0.155333 10.8563 0.227426L9.43316 1.65057L12.3494 4.56684L13.7726 3.1437C13.8447 3.07175 13.9019 2.98629 13.9409 2.89222C13.9799 2.79814 14 2.69729 14 2.59544C14 2.49359 13.9799 2.39274 13.9409 2.29866C13.9019 2.20458 13.8447 2.11912 13.7726 2.04718L13.7726 2.04718Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Vector36492716")}
          ></Icon>
        </Flex>
      </Flex>
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="50px 70px 50px 70px"
        {...getOverrideProps(overrides, "medCard")}
      >
        <Text
          fontFamily="Inter"
          fontSize="48px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="120"
          {...getOverrideProps(overrides, "medQuantity")}
        ></Text>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "medInfo36472709")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="25px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={medication?.medName}
            {...getOverrideProps(overrides, "medName")}
          ></Text>
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "medStrengthInfo")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={medication?.medStrength}
              {...getOverrideProps(overrides, "medStrength")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="300"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="mg"
              {...getOverrideProps(overrides, "mg")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "medInfo36472701")}
        >
          <Flex
            gap="2px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "dailyDoseInfo")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={medication?.dailyDose}
              {...getOverrideProps(overrides, "dailyDose")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="300"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="daily"
              {...getOverrideProps(overrides, "daily")}
            ></Text>
          </Flex>
          <Flex
            gap="4px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "daysLeftInfo")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={medication?.daysLeft}
              {...getOverrideProps(overrides, "daysLeft")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="days"
              {...getOverrideProps(overrides, "days")}
            ></Text>
          </Flex>
        </Flex>
        <Button
          shrink="0"
          alignSelf="stretch"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Take"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
