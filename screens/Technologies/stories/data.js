import {
  frontendListCardData,
  backendListCardData,
  deployListCardData,
} from '../../../components';

export const defaultData = {
  title: 'Tecnologies',
  technologies: [
    { ...frontendListCardData },
    { ...backendListCardData },
    { ...deployListCardData }
  ]
}