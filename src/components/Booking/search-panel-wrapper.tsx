import { SearchPanel } from './search-panel';

export function SearchPanelWrapper(props: any) {
  const locations: any[] = [{ slug: 'Kampala', id: 1 }];

  if (!locations) return null;

  return <SearchPanel locations={locations} {...props} />;
}
