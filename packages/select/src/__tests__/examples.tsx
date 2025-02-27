import type { DummyItem } from './constants';
import type { MultiSelectTriggerProps } from '../MultiSelect';
import type { SingleSelectTriggerProps } from '../SingleSelect';

import { IconButton } from '@launchpad-ui/button';
import { Icon } from '@launchpad-ui/icons';
import { TagGroup, TagItem } from '@launchpad-ui/tag';

const CustomMultiSelectTrigger = (props: MultiSelectTriggerProps<DummyItem>) => {
  const { state, triggerProps, triggerRef } = props;

  return (
    <TagGroup
      items={(state.selectedItems as Iterable<object>) || []}
      onRemove={(keys) => state.selectionManager.setSelectedKeys(keys)}
      action={() => (
        <IconButton
          {...triggerProps}
          size="small"
          aria-label="Edit"
          ref={triggerRef}
          icon={<Icon name="edit" />}
          data-test-id="custom-trigger"
        />
      )}
    >
      {(item) => <TagItem key={item.key}>{item.textValue}</TagItem>}
    </TagGroup>
  );
};

const CustomSingleSelectTrigger = (props: SingleSelectTriggerProps<DummyItem>) => {
  const { state, triggerProps, triggerRef } = props;

  const getRenderedSelected = () => {
    const item = state.selectedItem;

    if (!item) return 'Select option';

    return <span>{item.textValue}</span>;
  };
  return (
    <button {...triggerProps} data-test-id="custom-trigger" ref={triggerRef}>
      {getRenderedSelected()}
    </button>
  );
};

export { CustomMultiSelectTrigger, CustomSingleSelectTrigger };
