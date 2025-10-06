// Product details - Main export file

import { clothingDetails } from './clothing';
import { footwearDetails } from './footwear';
import { glassesDetails } from './glasses';
import { glovesDetails } from './gloves';
import { hearingDetails } from './hearing';
import { helmetsDetails } from './helmets';
import { respiratorsDetails } from './respirators';
import { ProductDetail } from './types';

export const productDetails: ProductDetail[] = [
  ...helmetsDetails,
  ...glassesDetails,
  ...glovesDetails,
  ...hearingDetails,
  ...respiratorsDetails,
  ...footwearDetails,
  ...clothingDetails
];

export {
  clothingDetails, footwearDetails, glassesDetails,
  glovesDetails,
  hearingDetails, helmetsDetails, respiratorsDetails
};

  export type { ProductDetail } from './types';

export const getProductDetail = (articleNo: string): ProductDetail | undefined => {
  return productDetails.find(detail => detail.articleNo === articleNo);
};

export const getProductsByCategory = (category: string): ProductDetail[] => {
  switch (category.toLowerCase()) {
    case 'helmets':
      return helmetsDetails;
    case 'glasses':
      return glassesDetails;
    case 'gloves':
      return glovesDetails;
    case 'hearing':
      return hearingDetails;
    case 'respirators':
      return respiratorsDetails;
    case 'footwear':
      return footwearDetails;
    case 'clothing':
      return clothingDetails;
    default:
      return [];
  }
};
