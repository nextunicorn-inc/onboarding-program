import { AreaEnum, SupportProgramTypeEnum, TargetCompanyAgeEnum } from '../../../graphql';

export type SupportProgramsQuery = {
  supportPrograms: {
    data: Array<{
      startAt: string;
      endAta: string;
      areas: Array<AreaEnum>;
      name: string;
      TargetCompanyAges: Array<TargetCompanyAgeEnum>;
      type: SupportProgramTypeEnum;
      outerApplyLink: string | null;
    }>;
  };
};