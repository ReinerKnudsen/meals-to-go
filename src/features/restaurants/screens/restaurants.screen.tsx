import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info.card';
import styled from 'styled-components';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space.sm};
`;

// the props is a prop of the styled components
const SearchBar = styled(Searchbar)`
  padding: ${(props) => props.theme.space.none};
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
