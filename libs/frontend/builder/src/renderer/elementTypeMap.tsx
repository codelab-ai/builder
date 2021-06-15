import { Icon } from '@ant-design/compatible'
import { AtomType } from '@codelab/graphql'
import {
  Affix,
  Alert,
  Anchor,
  AutoComplete,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  Carousel,
  Checkbox,
  Col,
  Collapse,
  Comment,
  ConfigProvider,
  DatePicker,
  Descriptions,
  Divider,
  Drawer,
  Dropdown,
  Empty,
  Form,
  Input,
  InputNumber,
  Layout,
  List,
  Mentions,
  Menu,
  Modal,
  PageHeader,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Rate,
  Result,
  Row,
  Select,
  Skeleton,
  Slider,
  Space,
  Spin,
  Statistic,
  Steps,
  Switch,
  Tabs,
  Tag,
  Timeline,
  TimePicker,
  Tooltip,
  Tree,
  TreeSelect,
  Typography,
  Upload,
} from 'antd'
import React from 'react'
import GridLayout, {
  Responsive as ResponsiveGrid,
  WidthProvider,
} from 'react-grid-layout'

const ResponsiveGridLayout = WidthProvider(ResponsiveGrid)

// import {
//   CodelabForm,
//   CodelabHtml,
//   CodelabMapper,
//   CodelabTable,
//   Grid,
//   Provider,
//   RGL, // imported above --^
//   RenderComponent,
// } from '@codelab/alpha/ui/antd'

const PageContainer = ({ children, ...props }: any) => {
  return children ? <>{children}</> : <></>
}

// This is for testing, need to move it somewhere else
const ReactText = ({ text }: { text: string }) => <p>{text}</p>

/**
 * A map of VertexTypes to their corresponding React components.
 * When adding a new vertex type, add the corresponding mapping here
 */
export const elementTypeMap: Record<
  AtomType,
  React.ComponentType<any> | string
> = {
  [AtomType.ReactFragment]: React.Fragment,
  [AtomType.HtmlDiv]: 'div',
  [AtomType.HtmlP]: 'p',
  [AtomType.HtmlA]: 'a',
  [AtomType.HtmlSpan]: 'span',
  [AtomType.HtmlText]: ReactText,
  // [AtomType.ReactText]: CodelabHtml.Text,
  [AtomType.AntDesignIcon]: Icon,
  [AtomType.AntDesignMenu]: Menu,
  [AtomType.AntDesignMenuItem]: Menu.Item,
  [AtomType.AntDesignMenuItemGroup]: Menu.ItemGroup,
  [AtomType.AntDesignMenuSubMenu]: Menu.SubMenu,
  [AtomType.AntDesignGridCol]: Col,
  [AtomType.AntDesignGridRow]: Row,
  [AtomType.AntDesignCard]: Card,
  [AtomType.AntDesignCardGrid]: Card.Grid,
  [AtomType.AntDesignCardMeta]: Card.Meta,
  [AtomType.AntDesignTypography]: Typography,
  [AtomType.AntDesignTypographyTitle]: Typography.Title,
  [AtomType.AntDesignTypographyText]: Typography.Text,
  [AtomType.AntDesignTypographyParagraph]: Typography.Paragraph,
  [AtomType.AntDesignAlert]: Alert,
  [AtomType.AntDesignAffix]: Affix,
  [AtomType.AntDesignAutoComplete]: AutoComplete,
  [AtomType.AntDesignButton]: Button,
  [AtomType.AntDesignBreadcrumb]: Breadcrumb,
  [AtomType.AntDesignBreadcrumbItem]: Breadcrumb.Item,
  [AtomType.AntDesignDropdown]: Dropdown,
  [AtomType.AntDesignPageContainer]: PageContainer,
  [AtomType.AntDesignForm]: Form,
  [AtomType.AntDesignFormItem]: Form.Item,
  [AtomType.AntDesignFormList]: '',
  [AtomType.AntDesignFormItemHook]: '',
  [AtomType.AntDesignCheckbox]: Checkbox,
  [AtomType.AntDesignInput]: Input,
  [AtomType.AntDesignInputNumber]: InputNumber,
  [AtomType.AntDesignSelect]: Select,
  [AtomType.AntDesignSelectOption]: Select.Option,
  [AtomType.AntDesignRglContainer]: GridLayout,
  [AtomType.AntDesignRglItem]: 'div',
  [AtomType.AntDesignRglResponsiveContainer]: ResponsiveGridLayout,
  [AtomType.AntDesignProvider]: '',
  [AtomType.AntDesignModal]: Modal,
  [AtomType.AntDesignRadioGroup]: Radio.Group,
  [AtomType.AntDesignRadio]: Radio,
  [AtomType.AntDesignRate]: Rate,
  [AtomType.AntDesignSlider]: Slider,
  [AtomType.AntDesignSwitch]: Switch,
  [AtomType.AntDesignSpace]: Space,
  [AtomType.AntDesignDatePicker]: DatePicker,
  [AtomType.AntDesignDivider]: Divider,
  [AtomType.AntDesignPagination]: Pagination,
  [AtomType.AntDesignPageHeader]: PageHeader,
  [AtomType.AntDesignBadge]: Badge,
  [AtomType.AntDesignAvatar]: Avatar,
  [AtomType.AntDesignComment]: Comment,
  [AtomType.AntDesignCalendar]: Calendar,
  [AtomType.AntDesignDescriptions]: Descriptions,
  [AtomType.AntDesignDescriptionsItem]: Descriptions.Item,
  [AtomType.AntDesignEmpty]: Empty,
  [AtomType.AntDesignTimeline]: Timeline,
  [AtomType.AntDesignTimelineItem]: Timeline.Item,
  [AtomType.AntDesignTabs]: Tabs,
  [AtomType.AntDesignTabsTabPane]: Tabs.TabPane,
  [AtomType.AntDesignStatistic]: Statistic,
  [AtomType.AntDesignTooltip]: Tooltip,
  [AtomType.AntDesignTag]: Tag,
  [AtomType.AntDesignTree]: Tree,
  [AtomType.AntDesignDrawer]: Drawer,
  [AtomType.AntDesignProgress]: Progress,
  [AtomType.AntDesignResult]: Result,
  [AtomType.AntDesignSpin]: Spin,
  [AtomType.AntDesignSkeleton]: Skeleton,
  [AtomType.AntDesignAnchor]: Anchor,
  [AtomType.AntDesignAnchorLink]: Anchor.Link,
  [AtomType.AntDesignBackTop]: BackTop,
  [AtomType.AntDesignConfigProvider]: ConfigProvider,
  [AtomType.AntDesignPopconfirm]: Popconfirm,
  [AtomType.AntDesignTransfer]: () => null,
  // [AtomType.AntDesignTransfer]: Transfer as any,
  [AtomType.AntDesignTreeSelect]: TreeSelect,
  [AtomType.AntDesignTreeNode]: TreeSelect.TreeNode,
  [AtomType.AntDesignTimePicker]: TimePicker,
  [AtomType.AntDesignUpload]: Upload,
  [AtomType.AntDesignSteps]: Steps,
  [AtomType.AntDesignStepsStep]: Steps.Step,
  [AtomType.AntDesignCollapse]: Collapse,
  [AtomType.AntDesignCollapsePanel]: Collapse.Panel,
  [AtomType.AntDesignCarousel]: Carousel,
  [AtomType.AntDesignList]: List,
  [AtomType.AntDesignListItem]: List.Item,
  [AtomType.AntDesignListItemMeta]: List.Item.Meta,
  [AtomType.AntDesignMentions]: Mentions,
  [AtomType.AntDesignMentionsOption]: Mentions.Option,
  [AtomType.AntDesignLayout]: Layout,
  [AtomType.AntDesignLayoutHeader]: Layout.Header,
  [AtomType.AntDesignLayoutSider]: Layout.Sider,
  [AtomType.AntDesignLayoutContent]: Layout.Content,
  [AtomType.AntDesignLayoutFooter]: Layout.Footer,
  [AtomType.AntDesignCascader]: () => null,
  // [AtomType.AntDesignCascader]: Cascader as any,
  [AtomType.AntDesignPopover]: Popover,
  [AtomType.AntDesignTable]: '',
  [AtomType.AntDesignRenderComponent]: '',
  [AtomType.AntDesignRenderContainer]: '',
  [AtomType.AntDesignMapper]: '',
  [AtomType.AntDesignProvider]: '',
}
