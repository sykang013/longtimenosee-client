import React from 'react';
import styled from 'styled-components/native';
import { horizontalScale, verticalScale } from '@/utils/metric';
import { globalColor, label, light } from '@/assets/themes';

interface LabelAnswerStateProps {
  answerStatus: string;
  planStatus: string;
}

interface StProps {
  color: string;
  planStatus: string;
}

const LabelAnswerState = ({ answerStatus, planStatus }: LabelAnswerStateProps) => {
  return (
    <StContainer color={answerStatus} planStatus={planStatus}>
      <StText color={answerStatus} planStatus={planStatus}>
        {answerStatus}
      </StText>
    </StContainer>
  );
};

const getBackgroundColor = (answerStatus: string, planStatus: string) => {
  switch (answerStatus) {
    case '응답 필요':
      return light.background;
    case '응답 완료':
      if (planStatus === '종료') {
        return light.contents.contentThird;
      }
      return globalColor.primary;
    default:
      return light.background;
  }
};

const getTextColor = (answerStatus: string, planStatus: string) => {
  switch (answerStatus) {
    case '응답 필요':
      if (planStatus === '종료') {
        return light.contents.contentThird;
      }
      return globalColor.primary;
    case '응답 완료':
      return light.background;
    default:
      return globalColor.primary;
  }
};

const getBorderColor = (answerStatus: string, planStatus: string) => {
  switch (answerStatus) {
    case '응답 필요':
      if (planStatus === '종료') {
        return light.border.borderSub;
      }
      return globalColor.secondary;
    case '응답 완료':
      if (planStatus === '종료') {
        return light.border.borderSub;
      }
      return globalColor.primary;
    default:
      return globalColor.primary;
  }
};

const StContainer = styled.View<StProps>`
  align-items: center;
  justify-content: center;
  width: ${horizontalScale(53)}px;
  height: ${verticalScale(24)}px;
  border: 1px solid ${(props) => getBorderColor(props.color, props.planStatus)};
  border-radius: 50px;
  background-color: ${(props) => getBackgroundColor(props.color, props.planStatus)};
`;

const StText = styled.Text<StProps>`
  ${label.XXS};
  color: ${(props) => getTextColor(props.color, props.planStatus)};
`;

export default LabelAnswerState;
