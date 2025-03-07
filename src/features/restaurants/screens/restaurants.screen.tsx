import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info.card';
import styled from 'styled-components';

const SearchContainer = styled.View`
  padding: 10px;
`;

const SearchBar = styled(Searchbar)`
  padding: 0px;
`;

const RestaurantsList = styled.View`
  flex: 1;
`;

export const RestaurantsScreen = () => {
  return (
    <>
      <SearchContainer>
        <SearchBar placeholder='Search' value={''} mode='view' onChangeText={() => {}} />
      </SearchContainer>
      <RestaurantsList>
        <RestaurantInfoCard />
      </RestaurantsList>
    </>
  );
};
