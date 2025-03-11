import { SvgXml } from 'react-native-svg';

import starAlt from '../../../../assets/images/staralt.js';
import isOpen from '../../../../assets/images/isOpen.js';
import isClosed from '../../../../assets/images/isClosed';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import {
  Icon,
  RestaurantCard,
  Rating,
  RatingSection,
  OpenIndicator,
  RestaurantCardCover,
  Info,
} from './restaurant-info.styles';

type RestaurantInfoProps = {
  restaurant?: {
    name: string;
    icon: string;
    photos: string[];
    address: string;
    isOpenNow: boolean;
    rating: number;
    isClosedTemporarily: boolean;
  };
};

export const RestaurantInfoCard = ({ restaurant = {} }: RestaurantInfoProps) => {
  const {
    name = 'My Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = ['https://cdn.pixabay.com/photo/2021/02/08/12/40/lasagna-5994612_1280.jpg'],
    address = '123 Main St',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover
          key={name}
          source={{
            uri: photos[0],
          }}
        />
        <RestaurantCard.Content>
          <Info>
            <Text variant='title'>{name}</Text>
            <RatingSection>
              <Rating>
                {ratingArray.map((_, index) => (
                  <SvgXml key={index} xml={starAlt} width={20} height={20} />
                ))}
              </Rating>
              <OpenIndicator>
                {isClosedTemporarily && <Text variant='error'>Closed Temporarily</Text>}
                {isOpenNow && !isClosedTemporarily && (
                  <SvgXml xml={isOpen} width={20} height={20} />
                )}
                {!isOpenNow && !isClosedTemporarily && (
                  <SvgXml xml={isClosed} width={20} height={20} fill={'#dedede'} />
                )}
                <Spacer id='spacer' width='md' />
                <Icon id='locationImage' source={{ uri: icon }} />
              </OpenIndicator>
            </RatingSection>
            <Text variant='caption'>{address}</Text>
          </Info>
        </RestaurantCard.Content>
      </RestaurantCard>
    </>
  );
};
