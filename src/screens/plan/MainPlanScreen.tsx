import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { light, paragraph } from '@/assets/themes';
import { horizontalScale, verticalScale } from '@/utils/metric';
import { CardPlan } from '@/components/cards';
import { ButtonRound } from '@/components/buttons';

interface PlanItem {
  id: string;
  title: string;
  description: string;
  answerStatus: string;
  planStatus: string;
  iconCalendar: string;
  iconLocation: string;
  iconPlanMember: string;
}

const MainPlanScreen = () => {
  const initialPlans = useMemo<PlanItem[]>(
    () => [
      {
        id: '1',
        title: '1',
        description: '설명글',
        answerStatus: '응답 완료',
        planStatus: '조정 중',
        iconCalendar: '일정 조정중',
        iconLocation: '장소 조정중',
        iconPlanMember: '책벌레 워너비즈 8인',
      },
      {
        id: '2',
        title: '2',
        description: '설명글',
        answerStatus: '응답 완료',
        planStatus: '확정',
        iconCalendar: '일정 조정중',
        iconLocation: '장소 조정중',
        iconPlanMember: '책벌레 워너비즈 8인',
      },
      {
        id: '3',
        title: '3',
        description: '설명글',
        answerStatus: '응답 완료',
        planStatus: '종료',
        iconCalendar: '일정 조정중',
        iconLocation: '장소 조정중',
        iconPlanMember: '책벌레 워너비즈 8인',
      },
    ],
    []
  );

  const [plans, setPlans] = useState<PlanItem[]>(initialPlans);
  const [filteredPlans, setFilteredPlans] = useState<PlanItem[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>('전체');
  const allStatus: string[] = ['전체', '조정 중', '확정', '종료'];

  const availableStatus = allStatus.filter((status) =>
    plans.some((item) => item.planStatus === status)
  );

  const renderItem = ({ item }: { item: PlanItem }) => (
    <CardPlan
      title={item.title}
      description={item.description}
      answerStatus={item.answerStatus}
      planStatus={item.planStatus}
      iconCalendar={item.iconCalendar}
      iconLocation={item.iconLocation}
      iconPlanMember={item.iconPlanMember}
    />
  );

  const filterHandler = (status: string) => {
    setSelectedStatus(status);
    if (status === '전체') {
      setFilteredPlans(plans);
    } else {
      const filtered = plans.filter((item) => item.planStatus === status);
      setFilteredPlans(filtered);
    }
  };

  useEffect(() => {
    setPlans(initialPlans);
  }, [initialPlans]);

  useEffect(() => {
    setFilteredPlans(plans);
  }, [plans]);

  return (
    <StContainer>
      {plans.length === 0 ? (
        <StEmptyText>생성된 약속이 없습니다.</StEmptyText>
      ) : (
        <>
          <StButtonContainer>
            <ButtonRound
              text="전체"
              onPress={() => filterHandler('전체')}
              isFocused={selectedStatus === '전체'}
            />
            {availableStatus.map((status) => (
              <ButtonRound
                key={status}
                text={status}
                onPress={() => filterHandler(status)}
                isFocused={selectedStatus === status}
              />
            ))}
          </StButtonContainer>
          <FlatList data={filteredPlans} renderItem={renderItem} keyExtractor={(item) => item.id} />
        </>
      )}
    </StContainer>
  );
};
const StContainer = styled.View`
  flex: 1;
  gap: 12px;
  align-self: center;
  justify-content: center;
  width: ${horizontalScale(328)}px;
  height: ${verticalScale(468)}px;
  margin-top: ${verticalScale(14)}px;
  background-color: ${light.backgroundSub};
`;

const StButtonContainer = styled.View`
  flex-direction: row;
  gap: 4px;
  width: ${horizontalScale(237)}px;
  height: ${verticalScale(28)}px;
`;

const StEmptyText = styled.Text`
  ${paragraph.Small}
  text-align: center;
  justify-content: center;
  color: ${light.contents.contentThird};
`;

export default MainPlanScreen;
