# @launchpad-ui/avatar

## 0.5.4

### Patch Changes

- Updated dependencies [[`5aad4986`](https://github.com/launchdarkly/launchpad-ui/commit/5aad4986acc0cf5f593247fbe041cf8938a684a3)]:
  - @launchpad-ui/icons@0.9.4

## 0.5.3

### Patch Changes

- [#947](https://github.com/launchdarkly/launchpad-ui/pull/947) [`29e2b26c`](https://github.com/launchdarkly/launchpad-ui/commit/29e2b26c7f2a5496adb11a72fd79fcadd33717ff) Thanks [@Niznikr](https://github.com/Niznikr)! - Annotate pure functions

- Updated dependencies [[`29e2b26c`](https://github.com/launchdarkly/launchpad-ui/commit/29e2b26c7f2a5496adb11a72fd79fcadd33717ff)]:
  - @launchpad-ui/icons@0.9.3

## 0.5.2

### Patch Changes

- Updated dependencies [[`c025b013`](https://github.com/launchdarkly/launchpad-ui/commit/c025b013c5c7ccdfb520103d82bd8395e7b1bbe6)]:
  - @launchpad-ui/icons@0.9.2

## 0.5.1

### Patch Changes

- Updated dependencies [[`420b7c9b`](https://github.com/launchdarkly/launchpad-ui/commit/420b7c9b51fc18910b163aed562983a2a7d2db51)]:
  - @launchpad-ui/icons@0.9.1

## 0.5.0

### Minor Changes

- [#917](https://github.com/launchdarkly/launchpad-ui/pull/917) [`f95ac68d`](https://github.com/launchdarkly/launchpad-ui/commit/f95ac68d2ddae67ae99520dca76721f6e07525cc) Thanks [@Niznikr](https://github.com/Niznikr)! - [Icons] Use sprites for icons instead of individual components

  **Before**

  ```js
  import { Add } from '@launchpad-ui/icons';

  const MyIcon = () => <Add size="medium" />;
  ```

  **After**

  ```js
  import { Icon } from '@launchpad-ui/icons';

  const MyIcon = () => <Icon name="add" size="medium" />;
  ```

  By default, the component expects `@launchpad-ui/icons/dist/sprite.svg` to be available from `APP_ROOT/static/sprite.svg` in your app. A custom path to the sprite can be set via the `IconContext` provider.

  For example, if importing a static asset returns a resolved URL you can do the following in your app to load the icons:

  ```js
  import { IconContext } from '@launchpad-ui/icons';
  import icons from '@launchpad-ui/icons/sprite.svg';
  import { createRoot } from 'react-dom/client';

  const domNode = document.getElementById('root');
  const root = createRoot(domNode);

  root.render(
    <IconContext.Provider value={{ path: icons }}>
      <App />
    </IconContext.Provider>
  );
  ```

### Patch Changes

- [#922](https://github.com/launchdarkly/launchpad-ui/pull/922) [`8f489f12`](https://github.com/launchdarkly/launchpad-ui/commit/8f489f1263f8641ed6b16f21765b41e23c0e7409) Thanks [@Niznikr](https://github.com/Niznikr)! - [Tokens] Add `0` and `base` suffix to default tokens:

  Primitives:

  - `lp-color-black-0`
  - `lp-color-white-0`

  Aliases:

  - `lp-color-bg-interactive-primary-base`
  - `lp-color-bg-interactive-secondary-base`
  - `lp-color-bg-interactive-tertiary-base`
  - `lp-color-bg-interactive-destructive-base`
  - `lp-color-bg-field-base`
  - `lp-color-border-field-base`
  - `lp-color-border-interactive-primary-base`
  - `lp-color-border-interactive-secondary-base`
  - `lp-color-fill-field-base`
  - `lp-color-text-feedback-base`
  - `lp-color-text-interactive-base`
  - `lp-color-text-ui-primary-base`
  - `lp-color-text-field-base`

- Updated dependencies [[`f95ac68d`](https://github.com/launchdarkly/launchpad-ui/commit/f95ac68d2ddae67ae99520dca76721f6e07525cc), [`8f489f12`](https://github.com/launchdarkly/launchpad-ui/commit/8f489f1263f8641ed6b16f21765b41e23c0e7409)]:
  - @launchpad-ui/icons@0.9.0
  - @launchpad-ui/tokens@0.6.0

## 0.4.48

### Patch Changes

- Updated dependencies [[`068bf1cc`](https://github.com/launchdarkly/launchpad-ui/commit/068bf1cc5418a264c5be167cd5030b4f56bef03f)]:
  - @launchpad-ui/tokens@0.5.8
  - @launchpad-ui/icons@0.8.8

## 0.4.47

### Patch Changes

- Updated dependencies [[`864b63c5`](https://github.com/launchdarkly/launchpad-ui/commit/864b63c5bdcdf0d52b322be6469b6edfedad4f31)]:
  - @launchpad-ui/tokens@0.5.7
  - @launchpad-ui/icons@0.8.7

## 0.4.46

### Patch Changes

- [#875](https://github.com/launchdarkly/launchpad-ui/pull/875) [`157f224b`](https://github.com/launchdarkly/launchpad-ui/commit/157f224bf267d3958800087700ddb859316922a6) Thanks [@kwatkins-ld](https://github.com/kwatkins-ld)! - Suppress errors in Avatar when fetching image

## 0.4.45

### Patch Changes

- [#851](https://github.com/launchdarkly/launchpad-ui/pull/851) [`be9448b1`](https://github.com/launchdarkly/launchpad-ui/commit/be9448b154e7ea5ff56a65448e83da2808bd1782) Thanks [@kwatkins-ld](https://github.com/kwatkins-ld)! - use ComponentProps type to simplify intrinsic element props

## 0.4.44

### Patch Changes

- Updated dependencies [[`2c8bf545`](https://github.com/launchdarkly/launchpad-ui/commit/2c8bf54535a7e7cdb7f1da23d00e7ede36bdffc8)]:
  - @launchpad-ui/icons@0.8.6

## 0.4.43

### Patch Changes

- Updated dependencies [[`ebf41fff`](https://github.com/launchdarkly/launchpad-ui/commit/ebf41fff2abc752874849572eaa6b62e7f876223)]:
  - @launchpad-ui/icons@0.8.5

## 0.4.42

### Patch Changes

- Updated dependencies [[`72d37d74`](https://github.com/launchdarkly/launchpad-ui/commit/72d37d74c553e2a3c5cfe0f8bc77ee3a47222d80), [`3269e0b5`](https://github.com/launchdarkly/launchpad-ui/commit/3269e0b5cc32b19241e7f0fa8de72d0127c76859)]:
  - @launchpad-ui/tokens@0.5.6
  - @launchpad-ui/icons@0.8.4

## 0.4.41

### Patch Changes

- Updated dependencies [[`7760fefe`](https://github.com/launchdarkly/launchpad-ui/commit/7760fefea91fddf17f15163ce05f555215dc4b90), [`6bd95d9f`](https://github.com/launchdarkly/launchpad-ui/commit/6bd95d9f8c3911c8d53d61f59b304881043c6fd9)]:
  - @launchpad-ui/tokens@0.5.5
  - @launchpad-ui/icons@0.8.3

## 0.4.40

### Patch Changes

- Updated dependencies [[`42c857c3`](https://github.com/launchdarkly/launchpad-ui/commit/42c857c3100b6fcab4bb7609482d34cce0ccfe79)]:
  - @launchpad-ui/icons@0.8.2

## 0.4.39

### Patch Changes

- Updated dependencies [[`c120d56c`](https://github.com/launchdarkly/launchpad-ui/commit/c120d56c7b4045cefa5520954dc7683159768625)]:
  - @launchpad-ui/tokens@0.5.4
  - @launchpad-ui/icons@0.8.1

## 0.4.38

### Patch Changes

- Updated dependencies [[`f07d8c7d`](https://github.com/launchdarkly/launchpad-ui/commit/f07d8c7df396ada9d30780d56e97470382a6b350), [`5d7c3eed`](https://github.com/launchdarkly/launchpad-ui/commit/5d7c3eed060658abcaa2dc13c6471e424405f54b)]:
  - @launchpad-ui/icons@0.8.0

## 0.4.37

### Patch Changes

- Updated dependencies [[`d5bd5d0d`](https://github.com/launchdarkly/launchpad-ui/commit/d5bd5d0de1cedc2d341beced3ac8239167a85108), [`304c87bc`](https://github.com/launchdarkly/launchpad-ui/commit/304c87bcd9050fd64c1ce997bb96c6b6e3aa9701)]:
  - @launchpad-ui/tokens@0.5.3
  - @launchpad-ui/icons@0.7.5

## 0.4.36

### Patch Changes

- Updated dependencies [[`152aef91`](https://github.com/launchdarkly/launchpad-ui/commit/152aef9126c5291586b09b703795030f52a01bb1)]:
  - @launchpad-ui/tokens@0.5.2
  - @launchpad-ui/icons@0.7.4

## 0.4.35

### Patch Changes

- Updated dependencies [[`909a0fde`](https://github.com/launchdarkly/launchpad-ui/commit/909a0fdebf57634d5c100626cb432c35eac1c661)]:
  - @launchpad-ui/tokens@0.5.1
  - @launchpad-ui/icons@0.7.3

## 0.4.34

### Patch Changes

- Updated dependencies [[`3cf45ed4`](https://github.com/launchdarkly/launchpad-ui/commit/3cf45ed4df4c4472cb8dcf48ef1cd5e7916a35ad)]:
  - @launchpad-ui/tokens@0.5.0
  - @launchpad-ui/icons@0.7.2

## 0.4.33

### Patch Changes

- [#610](https://github.com/launchdarkly/launchpad-ui/pull/610) [`c76ec2ad`](https://github.com/launchdarkly/launchpad-ui/commit/c76ec2adf7e135faa32d6ee39b66886cbb2a1f10) Thanks [@renovate](https://github.com/apps/renovate)! - Update nonmajor versions across framework

- Updated dependencies [[`c76ec2ad`](https://github.com/launchdarkly/launchpad-ui/commit/c76ec2adf7e135faa32d6ee39b66886cbb2a1f10)]:
  - @launchpad-ui/tokens@0.4.10
  - @launchpad-ui/icons@0.7.1

## 0.4.32

### Patch Changes

- Updated dependencies [[`2b29f91e`](https://github.com/launchdarkly/launchpad-ui/commit/2b29f91e21002d352f18c2dbfd0ed807f0598da0)]:
  - @launchpad-ui/icons@0.7.0

## 0.4.31

### Patch Changes

- Updated dependencies [[`d06d6a42`](https://github.com/launchdarkly/launchpad-ui/commit/d06d6a42824309be167d754c4642ab6b97375e1f)]:
  - @launchpad-ui/icons@0.6.21

## 0.4.30

### Patch Changes

- Updated dependencies [[`3790e0d2`](https://github.com/launchdarkly/launchpad-ui/commit/3790e0d294726e6722d45a7aa66e5ce51194c464)]:
  - @launchpad-ui/icons@0.6.20

## 0.4.29

### Patch Changes

- Updated dependencies [[`990af4a5`](https://github.com/launchdarkly/launchpad-ui/commit/990af4a5c7490a322604272cf9edc16ce9427cf1)]:
  - @launchpad-ui/icons@0.6.19

## 0.4.28

### Patch Changes

- Updated dependencies [[`808902f7`](https://github.com/launchdarkly/launchpad-ui/commit/808902f71c0b410adf86b0ee1683a2d36c4cdb22)]:
  - @launchpad-ui/tokens@0.4.9
  - @launchpad-ui/icons@0.6.18

## 0.4.27

### Patch Changes

- Updated dependencies [[`f873c6f3`](https://github.com/launchdarkly/launchpad-ui/commit/f873c6f3af18b55e72883464e9698ea172021c8e)]:
  - @launchpad-ui/icons@0.6.17

## 0.4.26

### Patch Changes

- Updated dependencies [[`cd1b58c5`](https://github.com/launchdarkly/launchpad-ui/commit/cd1b58c5c117d37b2939fe879606011c49b18ced)]:
  - @launchpad-ui/icons@0.6.16

## 0.4.25

### Patch Changes

- Updated dependencies [[`f2ae1a80`](https://github.com/launchdarkly/launchpad-ui/commit/f2ae1a80d678a1a61dee407b8574e4c52f55299f)]:
  - @launchpad-ui/tokens@0.4.8
  - @launchpad-ui/icons@0.6.15

## 0.4.24

### Patch Changes

- [#633](https://github.com/launchdarkly/launchpad-ui/pull/633) [`4d40aa2e`](https://github.com/launchdarkly/launchpad-ui/commit/4d40aa2ee768f182ed28d13d42c93c438d446e15) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update third party dependencies to pin versions to match consumer app

- Updated dependencies [[`4d40aa2e`](https://github.com/launchdarkly/launchpad-ui/commit/4d40aa2ee768f182ed28d13d42c93c438d446e15)]:
  - @launchpad-ui/icons@0.6.14

## 0.4.23

### Patch Changes

- [#629](https://github.com/launchdarkly/launchpad-ui/pull/629) [`183e328e`](https://github.com/launchdarkly/launchpad-ui/commit/183e328e9f315a26c0af4de9ebba51108868bdde) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update Vite build tool to 4.0

- Updated dependencies [[`183e328e`](https://github.com/launchdarkly/launchpad-ui/commit/183e328e9f315a26c0af4de9ebba51108868bdde), [`b744011d`](https://github.com/launchdarkly/launchpad-ui/commit/b744011dccd525faa534f8def5ee8af2e346268a), [`94fe4b9a`](https://github.com/launchdarkly/launchpad-ui/commit/94fe4b9ada726c190701555c0f5bdca3e8ec610d)]:
  - @launchpad-ui/icons@0.6.13
  - @launchpad-ui/tokens@0.4.7

## 0.4.22

### Patch Changes

- Updated dependencies [[`9064d45c`](https://github.com/launchdarkly/launchpad-ui/commit/9064d45cf157f7ded1a11a100940bd144f410fd6)]:
  - @launchpad-ui/tokens@0.4.6
  - @launchpad-ui/icons@0.6.12

## 0.4.21

### Patch Changes

- Updated dependencies [[`c48e0b4f`](https://github.com/launchdarkly/launchpad-ui/commit/c48e0b4fff3e0792b453f9173459fd197871f3d0)]:
  - @launchpad-ui/tokens@0.4.5
  - @launchpad-ui/icons@0.6.11

## 0.4.20

### Patch Changes

- Updated dependencies [[`57484ab9`](https://github.com/launchdarkly/launchpad-ui/commit/57484ab9998ef50a32ab51bb9c0286b7be84fdb2), [`4c2dc031`](https://github.com/launchdarkly/launchpad-ui/commit/4c2dc0315fe0742ad78b706552d7c7e8e87f8e0e)]:
  - @launchpad-ui/tokens@0.4.4
  - @launchpad-ui/icons@0.6.10

## 0.4.19

### Patch Changes

- Updated dependencies [[`9b37d196`](https://github.com/launchdarkly/launchpad-ui/commit/9b37d196a691fd6a4ca0f989c4121b8683d8f7cb)]:
  - @launchpad-ui/tokens@0.4.3
  - @launchpad-ui/icons@0.6.9

## 0.4.18

### Patch Changes

- Updated dependencies [[`c0840e07`](https://github.com/launchdarkly/launchpad-ui/commit/c0840e07ba5a4f3da47b792d27680bc2549169f5)]:
  - @launchpad-ui/tokens@0.4.2
  - @launchpad-ui/icons@0.6.8

## 0.4.17

### Patch Changes

- Updated dependencies [[`353eccef`](https://github.com/launchdarkly/launchpad-ui/commit/353eccefd155dd95c0221c7e8960ca14afb4baad)]:
  - @launchpad-ui/tokens@0.4.1
  - @launchpad-ui/icons@0.6.7

## 0.4.16

### Patch Changes

- [#597](https://github.com/launchdarkly/launchpad-ui/pull/597) [`71549774`](https://github.com/launchdarkly/launchpad-ui/commit/71549774aad5dcd0887379beba474e2371d320e6) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update theme tokens and usage in LaunchPad

  [Tokens]:

  - Add `lp-color-border-ui-secondary` token
  - Update `lp-color-shadow-ui-primary` token value to improve design

  [Table]: Improve theming support for table header and row borders

  [TabList]: Improve theming support for TabList items

  [Counter]: Switch to `lp-color-border-ui-secondary` border style

  [Modal]: Switch to `lp-color-border-ui-secondary` border style

  [Button]: Explicitly specify a color for `close` kind buttons

  [Avatar]: Improve theming support for avatar component

  [Chip]: Improve theming support for label chip

- Updated dependencies [[`71549774`](https://github.com/launchdarkly/launchpad-ui/commit/71549774aad5dcd0887379beba474e2371d320e6), [`9c9429e3`](https://github.com/launchdarkly/launchpad-ui/commit/9c9429e3707c9f229357875f9278755b3f3d7eda)]:
  - @launchpad-ui/tokens@0.4.0
  - @launchpad-ui/icons@0.6.6

## 0.4.15

### Patch Changes

- Updated dependencies [[`6dc1470`](https://github.com/launchdarkly/launchpad-ui/commit/6dc1470e52b9f2f1b4dae8800fa8fd6d2bc74a46)]:
  - @launchpad-ui/tokens@0.3.2
  - @launchpad-ui/icons@0.6.5

## 0.4.14

### Patch Changes

- Updated dependencies [[`da177e9`](https://github.com/launchdarkly/launchpad-ui/commit/da177e9c71e37f0ca4de21f5ab938f29f911ddf1)]:
  - @launchpad-ui/icons@0.6.4

## 0.4.13

### Patch Changes

- Updated dependencies [[`3a11bcf`](https://github.com/launchdarkly/launchpad-ui/commit/3a11bcf9085da9058c716841bf5d6b03ef5459a9), [`d1526c2`](https://github.com/launchdarkly/launchpad-ui/commit/d1526c21a4d637ce67d13c65dd8d34c4797d44ec)]:
  - @launchpad-ui/icons@0.6.3

## 0.4.12

### Patch Changes

- Updated dependencies [[`d80297f`](https://github.com/launchdarkly/launchpad-ui/commit/d80297fad893c9db566ed029e302702d5f245a98)]:
  - @launchpad-ui/tokens@0.3.1
  - @launchpad-ui/icons@0.6.2

## 0.4.11

### Patch Changes

- Updated dependencies [[`baeacd7`](https://github.com/launchdarkly/launchpad-ui/commit/baeacd7b80d60f36f4962f090d87a0009f28b44e)]:
  - @launchpad-ui/tokens@0.3.0
  - @launchpad-ui/icons@0.6.1

## 0.4.10

### Patch Changes

- Updated dependencies [[`0deac4f`](https://github.com/launchdarkly/launchpad-ui/commit/0deac4f7cb58781e56d864f50b659f5c885339dc)]:
  - @launchpad-ui/icons@0.6.0

## 0.4.9

### Patch Changes

- Updated dependencies [[`4090f93`](https://github.com/launchdarkly/launchpad-ui/commit/4090f93ba98ea6f75a7f9f7b902fafcfb9b005b3)]:
  - @launchpad-ui/tokens@0.2.0
  - @launchpad-ui/icons@0.5.9

## 0.4.8

### Patch Changes

- Updated dependencies [[`b7302a3`](https://github.com/launchdarkly/launchpad-ui/commit/b7302a3015591df0b24e19a4444029c21d0cf9de)]:
  - @launchpad-ui/icons@0.5.8

## 0.4.7

### Patch Changes

- Updated dependencies [[`6c602af`](https://github.com/launchdarkly/launchpad-ui/commit/6c602afba6b7073314b0e5592c98a616aff586c1)]:
  - @launchpad-ui/icons@0.5.7

## 0.4.6

### Patch Changes

- Updated dependencies [[`f67056a`](https://github.com/launchdarkly/launchpad-ui/commit/f67056ae6df4c2647833d7fe3f742af8e686824f)]:
  - @launchpad-ui/icons@0.5.6

## 0.4.5

### Patch Changes

- [#449](https://github.com/launchdarkly/launchpad-ui/pull/449) [`760d6ff`](https://github.com/launchdarkly/launchpad-ui/commit/760d6ff4b95f6f108105295611ae7a7f2af9bfaa) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Pin monorepo packages

- Updated dependencies [[`760d6ff`](https://github.com/launchdarkly/launchpad-ui/commit/760d6ff4b95f6f108105295611ae7a7f2af9bfaa), [`760d6ff`](https://github.com/launchdarkly/launchpad-ui/commit/760d6ff4b95f6f108105295611ae7a7f2af9bfaa)]:
  - @launchpad-ui/icons@0.5.5

## 0.4.4-alpha.2

### Patch Changes

- Updated dependencies [[`ba1abe9`](https://github.com/launchdarkly/launchpad-ui/commit/ba1abe951c8e88a543654dada0030fdfa66627d9)]:
  - @launchpad-ui/icons@0.5.4-alpha.2

## 0.4.4-alpha.1

### Patch Changes

- Updated dependencies [[`982ef8c`](https://github.com/launchdarkly/launchpad-ui/commit/982ef8c3812412f36ea98f67659b7477dc467d46)]:
  - @launchpad-ui/icons@0.5.4-alpha.1

## 0.4.4

### Patch Changes

- Updated dependencies [[`519cac2`](https://github.com/launchdarkly/launchpad-ui/commit/519cac2751d8e33be95850b4671e608c55dd9e4b), [`8548b71`](https://github.com/launchdarkly/launchpad-ui/commit/8548b71cbb0dd329e64ded5568f9ee6320fc2a13)]:
  - @launchpad-ui/icons@0.5.4

## 0.4.3

### Patch Changes

- Updated dependencies [[`69c763b`](https://github.com/launchdarkly/launchpad-ui/commit/69c763b62431a9a647313f725c2e15a0c597014d)]:
  - @launchpad-ui/icons@0.5.3

## 0.4.2

### Patch Changes

- Updated dependencies [[`9bf79e4`](https://github.com/launchdarkly/launchpad-ui/commit/9bf79e4d07192858e723900d8ab4c208872894a5)]:
  - @launchpad-ui/icons@0.5.2

## 0.4.1

### Patch Changes

- [#409](https://github.com/launchdarkly/launchpad-ui/pull/409) [`b641978`](https://github.com/launchdarkly/launchpad-ui/commit/b64197803c1ea2a38f8cc755daca4c55760718ab) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Added explicit `data-test-id` properties to components and reworked e2e test to use them instead of classname, in preparation for removal of stable class names

  [Alert] Add `data-test-id` with default value to components
  [Avatar] Add `data-test-id` with default value to components
  [Banner] Add `data-test-id` with default value to components
  [Button] Add `data-test-id` with default value to components
  [Chip] Add `data-test-id` with default value to components
  [Clipboard] Add `data-test-id` with default value to components
  [Counter] Add `data-test-id` with default value to components
  [Dropdown] Add `data-test-id` with default value to components
  [Filter] Add `data-test-id` with default value to components
  [Form] Add `data-test-id` with default value to components
  [Icons] Add `data-test-id` with default value to components
  [Markdown] Add `data-test-id` with default value to components
  [Menu] Add `data-test-id` with default value to components
  [Modal] Add `data-test-id` with default value to components
  [Navigation] Add `data-test-id` with default value to components
  [Notification] Add `data-test-id` with default value to components
  [Pagination] Add `data-test-id` with default value to components
  [Popover] Add `data-test-id` with default value to components
  [Progress] Add `data-test-id` with default value to components
  [Progress] Add `data-test-id` with default value to components
  [Slider] Add `data-test-id` with default value to components
  [Split] Add `data-test-id` with default value to components
  [Tab] Add `data-test-id` with default value to components
  [Table] Add `data-test-id` with default value to components
  [Toggle] Add `data-test-id` with default value to components
  [Tooltip] Add `data-test-id` with default value to components

- Updated dependencies [[`b641978`](https://github.com/launchdarkly/launchpad-ui/commit/b64197803c1ea2a38f8cc755daca4c55760718ab)]:
  - @launchpad-ui/icons@0.5.1

## 0.4.0

### Minor Changes

- [#386](https://github.com/launchdarkly/launchpad-ui/pull/386) [`86b0120`](https://github.com/launchdarkly/launchpad-ui/commit/86b0120c548063baba69205215f644b4a2d9a7fd) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace enums with string union types

### Patch Changes

- Updated dependencies [[`86b0120`](https://github.com/launchdarkly/launchpad-ui/commit/86b0120c548063baba69205215f644b4a2d9a7fd)]:
  - @launchpad-ui/icons@0.5.0

## 0.3.2

### Patch Changes

- [#398](https://github.com/launchdarkly/launchpad-ui/pull/398) [`53f7908`](https://github.com/launchdarkly/launchpad-ui/commit/53f79088e0c7f0b1fd3d07cb00c1ebf92b10e5af) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Avatar] Move to CSS Modules

## 0.3.2-alpha.0

### Patch Changes

- Updated dependencies [[`e860080`](https://github.com/launchdarkly/launchpad-ui/commit/e86008076dc61cfcfc4c22317021e793d4fd59a9)]:
  - @launchpad-ui/icons@0.4.1-alpha.0

## 0.3.1

### Patch Changes

- [#338](https://github.com/launchdarkly/launchpad-ui/pull/338) [`295692f`](https://github.com/launchdarkly/launchpad-ui/commit/295692fb70f6deb1a39fbc0a6bcb92f06bb1b24c) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Avatar] Improve prop object type for Avatar component to support passing generic HTML attributes

## 0.3.0

### Minor Changes

- [#324](https://github.com/launchdarkly/launchpad-ui/pull/324) [`0ce0a50`](https://github.com/launchdarkly/launchpad-ui/commit/0ce0a50b8401ec39ef290605a2789c987c6264ce) Thanks [@Niznikr](https://github.com/Niznikr)! - Use vite for builds:

  Each package's styles are now located in a single `style.css` within the root:

  Before:

  ```js
  import alertStyles from '@launchpad-ui/alert/styles/Alert.css';
  ```

  After:

  ```js
  import alertStyles from '@launchpad-ui/alert/style.css';
  ```

  The `core` package no longer bundles styles. If you need to import stylesheets for the components (in a Remix app for example) simply import them from the individual packages that come included when you install the `core` package.

### Patch Changes

- Updated dependencies [[`0ce0a50`](https://github.com/launchdarkly/launchpad-ui/commit/0ce0a50b8401ec39ef290605a2789c987c6264ce)]:
  - @launchpad-ui/icons@0.4.0

## 0.2.4

### Patch Changes

- [#308](https://github.com/launchdarkly/launchpad-ui/pull/308) [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace clsx with classix for joining classNames

- Updated dependencies [[`d5272f3`](https://github.com/launchdarkly/launchpad-ui/commit/d5272f36dd1fb23443a1e831748900c21444482d), [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43)]:
  - @launchpad-ui/icons@0.3.3

## 0.2.3

### Patch Changes

- Updated dependencies [[`c5d00b2`](https://github.com/launchdarkly/launchpad-ui/commit/c5d00b204a9682a5ba3f883de4c830b67caf0c8b)]:
  - @launchpad-ui/icons@0.3.2

## 0.2.2

### Patch Changes

- [#283](https://github.com/launchdarkly/launchpad-ui/pull/283) [`2f170db`](https://github.com/launchdarkly/launchpad-ui/commit/2f170dbc653be61dd77574e13e576a18f2c7f109) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Avatar] Change avatar from flex to inline-flex

## 0.2.1

### Patch Changes

- [#280](https://github.com/launchdarkly/launchpad-ui/pull/280) [`f471218`](https://github.com/launchdarkly/launchpad-ui/commit/f4712188797cd19273ec888d1a2ff88a4d29b716) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Avatar] Add Avatar props: initials, ariaLabel, testId. Make defaultIcon prop optional.

- Updated dependencies [[`7fb3d52`](https://github.com/launchdarkly/launchpad-ui/commit/7fb3d5256821e10a4ad4892e47fa88a2a8cee94c)]:
  - @launchpad-ui/icons@0.3.1

## 0.2.0

### Minor Changes

- [#273](https://github.com/launchdarkly/launchpad-ui/pull/273) [`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356) Thanks [@Niznikr](https://github.com/Niznikr)! - Set minimum React version to 18

### Patch Changes

- Updated dependencies [[`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356)]:
  - @launchpad-ui/icons@0.3.0

## 0.1.3

### Patch Changes

- Updated dependencies [[`a276064`](https://github.com/launchdarkly/launchpad-ui/commit/a27606486f3aa56cd8e7772bbdda0bc0f4aa1ec6)]:
  - @launchpad-ui/icons@0.2.4

## 0.1.2

### Patch Changes

- [#240](https://github.com/launchdarkly/launchpad-ui/pull/240) [`2147008`](https://github.com/launchdarkly/launchpad-ui/commit/21470088fad06b658d2dbe44b2b10055ae56989e) Thanks [@Niznikr](https://github.com/Niznikr)! - [Avatar]: Simplify mounted hook util

## 0.1.1

### Patch Changes

- Updated dependencies [[`f567202`](https://github.com/launchdarkly/launchpad-ui/commit/f567202860088b877a2a4edbbb1c90dc0906ab3b)]:
  - @launchpad-ui/icons@0.2.3

## 0.1.0

### Minor Changes

- [#186](https://github.com/launchdarkly/launchpad-ui/pull/186) [`dcbb98d`](https://github.com/launchdarkly/launchpad-ui/commit/dcbb98d771845740af3306c5c46774df0840deb4) Thanks [@Niznikr](https://github.com/Niznikr)! - Add avatar package:

  - [Icon] Add dimension enum and person icon
  - [Avatar] Add avatar code, stories, and tests

### Patch Changes

- Updated dependencies [[`dcbb98d`](https://github.com/launchdarkly/launchpad-ui/commit/dcbb98d771845740af3306c5c46774df0840deb4)]:
  - @launchpad-ui/icons@0.2.2
