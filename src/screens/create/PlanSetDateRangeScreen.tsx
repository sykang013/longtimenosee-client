import React, { useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import { ButtonMain, ButtonSmall } from '@/components/buttons';
import { CommonLocalNavigationBarText } from '@/components/commons';
import { label, globalColor, light, paragraph } from '@/assets/themes';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { horizontalScale, verticalScale } from '@/utils/metric';

LocaleConfig.locales.kor = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
};

LocaleConfig.defaultLocale = 'kor';

const PlanSetDateRangeScreen = () => {
  const [isDaySelected, setIsDaySelected] = useState(false);
  const primaryColorToString = globalColor.primary;
  // const secondaryColorToString = globalColor.secondary;
  // const backgroundColorToString = light.background;
  const backgroundSubColorToString = light.backgroundSub;
  const contentMainColorToString = light.contents.contentMain;
  // const contentSubColorToString = light.contents.contentSub;
  const contentThirdColorToString = light.contents.contentThird;
  const blue100 = globalColor.blue[100];

  const buttonPressed = () => {
    setIsDaySelected(!isDaySelected);
    // console.log(isDaySelected);
  };

  const getCurrentDate = (currentDate = new Date()) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = currentDate.getDate();
    return `${year}-0${month + 1}-${date}`;
  };

  const getMaxDate = (currentDate = new Date()) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = currentDate.getDate();
    return `${year}-0${month + 1}-${date + 60}`;
  };

  const customTheme = {
    calendarBackground: backgroundSubColorToString, //달력배경색
    textSectionTitleColor: contentMainColorToString, //요일색(월화수목금토일)
    textSectionTitleDisabledColor: contentThirdColorToString, //불가능요일색
    selectedDayBackgroundColor: blue100, //선택된 날짜 배경색
    selectedDayTextColor: primaryColorToString, //선택된 날짜 텍스트색
    todayTextColor: contentMainColorToString, //오늘 날짜색
    dayTextColor: contentMainColorToString, //날짜색
    textDisabledColor: contentThirdColorToString, //불가능 날짜색
    arrowColor: contentMainColorToString, //화살표색
    disabledArrowColor: contentThirdColorToString, //불가능 화살표색
    monthTextColor: contentMainColorToString, //년월 색
    textDayFontFamily: 'Pretendard', //날짜 폰트 패밀리
    textMonthFontFamily: 'Pretendard', //월 폰트 패밀리
    textDayHeaderFontFamily: 'Pretendard', //요일 폰트패밀리
    textDayFontWeight: '400', //regular
    textMonthFontWeight: '600', //semibold
    textDayHeaderFontWeight: '400', //regular
    textDayFontSize: 14,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
  };

  return (
    <StContainer>
      <CommonLocalNavigationBarText>
        응답받을 날짜 범위를 설정해 주세요.
      </CommonLocalNavigationBarText>
      <StBodyContainer>
        <Calendar
          theme={customTheme}
          style={{ width: horizontalScale(336) }}
          minDate={getCurrentDate()}
          maxDate={getMaxDate()}
          onDayPress={(day) => {
            // console.log(day);
            Alert.alert(`${day.dateString} 가 선택되었습니다.`);
            buttonPressed();
          }}
          hideExtraDays={true} //해당 월이 아닌 날짜 숨기기
          monthFormat={'yyyy년 M월'}
          enableSwipeMonths={true} //스와이프로 월 넘기기 가능하게
          allowSelectionOutOfRange={false} //min-maxDate에 속하지 않은 날짜 선택 허용 여부
          markedDates={{
            '2023-08-20': {
              selected: true,
            },
            '2023-08-23': {
              selected: true,
            },
            '2023-08-24': {
              selected: true,
            },
            '2023-08-25': {
              selected: true,
            },
          }}
        />
        <StText>*최대 설정 가능한 범위는 오늘로부터 60일 입니다.</StText>
        <StFilter>
          <StFilterText>제외할 요일 필터</StFilterText>
        </StFilter>
        <StButtonContainer>
          <ButtonSmall buttonState="Line" width={`${horizontalScale(96)}px`}>
            평일 제외
          </ButtonSmall>
          <ButtonSmall buttonState="Line" width={`${horizontalScale(96)}px`}>
            주말 제외
          </ButtonSmall>
          <ButtonSmall buttonState="Line" width={`${horizontalScale(96)}px`}>
            상관 없음
          </ButtonSmall>
        </StButtonContainer>
      </StBodyContainer>
      <StBottomContainer>
        <ButtonMain buttonState="ActivePrimary" width={horizontalScale(328)}>
          다음
        </ButtonMain>
      </StBottomContainer>
    </StContainer>
  );
};

const StContainer = styled.View`
  flex: 1;
  align-items: center;
  width: ${horizontalScale(360)}px;
`;

const StBodyContainer = styled.View`
  padding-top: ${verticalScale(60)}px;
  padding-right: ${horizontalScale(12)}px;
  padding-bottom: ${verticalScale(20)}px;
  padding-left: ${horizontalScale(12)}px;
`;
const StText = styled.Text`
  ${paragraph.XS};
  margin-top: ${verticalScale(8)}px;
  padding-left: ${horizontalScale(4)}px;
  color: ${globalColor.primary};
`;

const StFilter = styled.View`
  margin-top: ${verticalScale(28)}px;
  height: ${verticalScale(40)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${light.border.borderSub};
  justify-content: center;
`;

const StFilterText = styled.Text`
  ${label.Small};
  padding-left: ${horizontalScale(16)}px;
`;

const StButtonContainer = styled.View`
  margin: ${verticalScale(12)}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: ${verticalScale(12)}px;
`;
const StBottomContainer = styled.View`
  flex: 1;
  position: absolute;
  bottom: 0;
  height: ${verticalScale(90)}px;
  align-items: center;
  padding-top: ${verticalScale(8)}px;
  background-color: ${light.background};
`;

export default PlanSetDateRangeScreen;
