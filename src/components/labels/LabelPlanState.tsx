import React from 'react';
import styled from 'styled-components/native';
import { globalColor, label, light } from '@/assets/themes';
import { horizontalScale, moderateScale, verticalScale } from '@/utils/metric';

interface LabelPlanStateProps {
  planStatus: string;
}

interface StOuterCircleProps {
  width: string;
  planStatus: string;
}

const LabelPlanState = ({ planStatus }: LabelPlanStateProps) => {
  const outerCircleWidth =
    planStatus.length > 2 ? `${moderateScale(55)}px` : `${moderateScale(44)}px`;
  return (
    <StContainer>
      <StOuterCircle planStatus={planStatus} width={outerCircleWidth}>
        <StInnerCircle planStatus={planStatus} />
        <StText planStatus={planStatus}>{planStatus}</StText>
      </StOuterCircle>
    </StContainer>
  );
};

const StContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const StOuterCircle = styled.View<StOuterCircleProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: ${(props): string => props.width};
  height: ${verticalScale(24)}px;
  background-color: ${(props) => getOuterCircleBackgroundColor(props.planStatus)};
  border-radius: 50px;
`;

const StInnerCircle = styled.View<LabelPlanStateProps>`
  width: ${horizontalScale(6)}px;
  height: ${verticalScale(6)}px;
  background-color: ${(props) => getInnerCircleBackgroundColor(props.planStatus)};
  border-radius: 50px;
`;

const StText = styled.Text<LabelPlanStateProps>`
  ${label.XXS}
  color: ${(props) => getTextColor(props.planStatus)};
`;

const getOuterCircleBackgroundColor = (status: string): string => {
  switch (status) {
    case '확정':
      return globalColor.blue[100];
    case '종료':
      return globalColor.gray[100];
    case '조정 중':
      return globalColor.processSub;
    default:
      return globalColor.blue[100];
  }
};

const getInnerCircleBackgroundColor = (status: string): string => {
  switch (status) {
    case '확정':
      return globalColor.primary;
    case '종료':
      return globalColor.gray[300];
    case '조정 중':
      return globalColor.process;
    default:
      return globalColor.primary;
  }
};

const getTextColor = (status: string): string => {
  switch (status) {
    case '확정':
      return light.contents.contentMain;
    case '종료':
      return light.contents.contentSub;
    case '조정 중':
      return light.contents.contentMain;
    default:
      return light.contents.contentMain;
  }
};

export default LabelPlanState;
