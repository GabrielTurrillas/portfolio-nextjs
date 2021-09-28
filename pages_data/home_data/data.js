import {
  defaultHeroData,
  defaultWorksData,
  defaultInfoData,
  defaultTechnologiesData,
  infoTitleData,
  technologiesTitleData,
  worksTitleData,
  worksTextStartFalseData,
  infoTextStartFalseData
} from '../../screens'

export const defaultData = {
  hero: { ...defaultHeroData },
  works: { ...defaultWorksData },
  worksTextStartFalse: { ...worksTextStartFalseData },
  info: { ...defaultInfoData },
  infoTextStartFalse: { ...infoTextStartFalseData },
  technologies: { ...defaultTechnologiesData },
  infoTitle: { ...infoTitleData },
  technologiesTitle: { ...technologiesTitleData },
  worksTitle: { ...worksTitleData },
}