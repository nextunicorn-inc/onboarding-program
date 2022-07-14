import { TARGET_COMPANY_AGE_TEXTS, AREA_TEXTS } from 'constants/supportPrograms';
import { useModal } from 'commonUi/Modal';

import {
  useSupportProgramFilters,
  TypeFilters,
  useClientFilter,
  FilterTable,
  FilterTableRow,
  FilterDetail,
} from './SupportProgramFilters';

import { identity } from './SupportPrograms.utils';

import type { Area, TargetCompanyAge, Host, Type } from './SupportProgramFilters';

function SupportPrograms() {
  const filterQuery = useSupportProgramFilters();

  const [activeTypes, toggleTypes, filteredActiveTypes] = useClientFilter<Type>({
    multiple: false,
  });

  const [activeAges, toggleAges, filteredActiveAges] = useClientFilter<TargetCompanyAge>({
    multiple: true,
  });

  const [activeAreas, toggleAreas, filteredActiveAreas] = useClientFilter<Area>({
    multiple: true,
  });

  const [activeHosts, toggleHosts, filteredActiveHosts] = useClientFilter<Host>({
    multiple: true,
  });
  const { hide } = useModal();

  return (
    <div>
      {filterQuery.isSuccess && (
        <>
          <TypeFilters
            allTypes={filterQuery.data.types}
            activeTypes={activeTypes}
            onClick={toggleTypes}
          />
          <FilterTable
            ages={
              <FilterTableRow
                title="창업 기간"
                toggle={toggleAges}
                keyExtractor={identity}
                data={filterQuery.data.targetCompanyAges}
                activeData={activeAges}
                renderItemText={(data) => TARGET_COMPANY_AGE_TEXTS[data]}
                Detail={
                  <FilterDetail
                    title="창업 기간"
                    toggle={toggleAges}
                    keyExtractor={identity}
                    data={filterQuery.data.targetCompanyAges}
                    activeData={activeAges}
                    renderItemText={(data) => TARGET_COMPANY_AGE_TEXTS[data]}
                    onClose={hide}
                  />
                }
              />
            }
            areas={
              <FilterTableRow
                title="지원 분야"
                toggle={toggleAreas}
                keyExtractor={identity}
                data={filterQuery.data.areas}
                activeData={activeAreas}
                renderItemText={(data) => AREA_TEXTS[data]}
                Detail={
                  <FilterDetail
                    title="지원 분야"
                    toggle={toggleAreas}
                    keyExtractor={identity}
                    data={filterQuery.data.areas}
                    activeData={activeAreas}
                    renderItemText={(data) => AREA_TEXTS[data]}
                    onClose={hide}
                  />
                }
              />
            }
            hosts={
              <FilterTableRow
                title="주관 기관"
                toggle={toggleHosts}
                keyExtractor={(data) => data.id}
                data={filterQuery.data.hosts}
                activeData={activeHosts}
                renderItemText={(data) => data.meta.name}
                Detail={
                  <FilterDetail
                    title="주관 기관"
                    toggle={toggleHosts}
                    keyExtractor={(data) => data.id}
                    data={filterQuery.data.hosts}
                    activeData={activeHosts}
                    renderItemText={(data) => data.meta.name}
                    onClose={hide}
                  />
                }
              />
            }
          />
        </>
      )}
    </div>
  );
}

export default SupportPrograms;
