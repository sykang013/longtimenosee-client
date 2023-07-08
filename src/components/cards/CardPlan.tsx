import React from 'react';
import styled from 'styled-components/native';
import { label, light, paragraph } from '@/assets/themes';
import { horizontalScale, verticalScale } from '@/utils/metric';
import { LabelAnswerState, LabelIconDetail, LabelPlanState } from '@/components/labels';

interface CardPlanProps {
  title: string;
  description: string;
  answerStatus: string;
  planStatus: string;
  iconCalendar: string;
  iconLocation: string;
  iconPlanMember: string;
}
const CardPlan = ({
  title,
  description,
  answerStatus,
  planStatus,
  iconCalendar,
  iconLocation,
  iconPlanMember,
}: CardPlanProps) => {
  return (
    <StContainer>
      <StMainContainer>
        <StTitle numberOfLines={1} ellipsizeMode="tail">
          {title}
        </StTitle>
        <StLabelContainer>
          <LabelAnswerState answerStatus={answerStatus} planStatus={planStatus} />
          <LabelPlanState planStatus={planStatus} />
        </StLabelContainer>
      </StMainContainer>
      <StMainContentContainer>
        <StMainContent numberOfLines={1} ellipsizeMode="tail">
          {description}
        </StMainContent>
      </StMainContentContainer>
      <StSubContentContainer>
        <LabelIconDetail name="calendar" text={iconCalendar} />
        <LabelIconDetail name="location" text={iconLocation} />
        <LabelIconDetail name="group" text={iconPlanMember} />
      </StSubContentContainer>
    </StContainer>
  );
};

const StContainer = styled.Pressable`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${horizontalScale(328)}px;
  height: ${verticalScale(108)}px;
  background-color: ${light.background};
  border-radius: 4px;
  padding: ${verticalScale(16)}px ${horizontalScale(16)}px;
  margin: ${verticalScale(6)}px 0;
`;

const StMainContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${horizontalScale(296)}px;
  height: ${verticalScale(24)}px;
`;

const StLabelContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
`;

const StTitle = styled.Text`
  width: ${horizontalScale(137)}px;
  ${label.Medium};
  color: ${light.contents.contentMain};
`;

const StMainContentContainer = styled.View`
  width: ${horizontalScale(296)}px;
  height: ${verticalScale(19)}px;
`;

const StMainContent = styled.Text`
  ${paragraph.XS};
  color: ${light.contents.contentMain};
`;

const StSubContentContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${horizontalScale(296)}px;
  height: ${verticalScale(16)}px;
`;

export default CardPlan;
