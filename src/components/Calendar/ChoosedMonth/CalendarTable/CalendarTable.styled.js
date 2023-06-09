import { calendarBackgroundColor, mainTextColor } from 'redux/Theme/Theme';
import styled from 'styled-components';
export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-bottom: none;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${calendarBackgroundColor};
`;

export const CurrentDay = styled('div')`
  padding: 4px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3e85f3;
  border-radius: 8px;
  color: var(--mainWhite);
  margin-bottom: 3px;
  @media screen and (min-width: 768px) {
    padding: 4px 8px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const DayWrapper = styled.div`
  height: 26px;
  width: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 10px;
  line-height: 1.4;
  

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 18px;
  }
`;
export const CellWrapper = styled.div`
  width: 47px;
  height: 94px;
  cursor: ${props => (props.isSelectedMonth ? 'pointer' : 'auto')};;
  padding: 2px;
  border-block-end: 1px solid rgba(220, 227, 229, 0.8);
  border-inline-end: 1px solid rgba(220, 227, 229, 0.8);
  &:nth-child(7n) {
    border-right: none;
  }
  color: ${props => (props.isSelectedMonth ? mainTextColor : 'transparent')};

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 144px;
    padding: 4px;
  }
  @media screen and (min-width: 1440px) {
    width: 155px;
    height: 125px;
    padding: 8px;
  }
`;

export const RowInCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TaskListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  list-style-position: inside;
  gap: 2px;
`;
export const CalendarTableMoreBtn = styled.button`
  border: none;
  border-radius: 8px;
  color: transparent;
  text-align: start;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  margin-top: 0;
  padding: 0;
  display: none;
  @media screen and (min-width: 768px) {
    display: inline-block;
    color: ${mainTextColor};
    background-color: ${calendarBackgroundColor};
  }
  @media screen and (min-width: 1440px) {
    color: ${mainTextColor};
    background-color: ${calendarBackgroundColor};
  }
`;
export const TaskItem = styled.button`
  border-radius: 8px;
  padding: 4px 4px 4px 8px;
  border: none;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: start;
  font-weight: 700;
  font-size: 10px;
  line-height: 1.4;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    padding: 4px 10px 4px 12px;
  }
  @media screen and (min-width: 1440px) {
    padding: 4px 15px 4px 12px;
  }
`;
export const ShowDayWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
