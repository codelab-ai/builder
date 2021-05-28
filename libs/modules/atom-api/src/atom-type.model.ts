import { z } from 'zod'

export enum AtomTypeEnum {
  ReactAffix = 'React_Affix',
  ReactAlert = 'React_Alert',
  ReactAnchor = 'React_Anchor',
  ReactAnchorLink = 'React_Anchor_Link',
  ReactAutoComplete = 'React_AutoComplete',
  ReactAvatar = 'React_Avatar',
  ReactBackTop = 'React_BackTop',
  ReactBadge = 'React_Badge',
  ReactBreadcrumb = 'React_Breadcrumb',
  ReactBreadcrumbItem = 'React_Breadcrumb_Item',
  ReactButton = 'React_Button',
  ReactCalendar = 'React_Calendar',
  ReactCard = 'React_Card',
  ReactCardGrid = 'React_Card_Grid',
  ReactCardMeta = 'React_Card_Meta',
  ReactCarousel = 'React_Carousel',
  ReactCascader = 'React_Cascader',
  ReactCheckbox = 'React_Checkbox',
  ReactCollapse = 'React_Collapse',
  ReactCollapsePanel = 'React_Collapse_Panel',
  ReactComment = 'React_Comment',
  ReactConfigProvider = 'React_ConfigProvider',
  ReactDatePicker = 'React_DatePicker',
  ReactDescriptions = 'React_Descriptions',
  ReactDescriptionsItem = 'React_Descriptions_Item',
  ReactDivider = 'React_Divider',
  ReactDrawer = 'React_Drawer',
  ReactDropdown = 'React_Dropdown',
  ReactEmpty = 'React_Empty',
  ReactForm = 'React_Form',
  ReactFormItem = 'React_Form_Item',
  ReactFormItemHook = 'React_Form_ItemHook',
  ReactFormList = 'React_Form_List',
  ReactFragment = 'React_Fragment',
  ReactGridCol = 'React_Grid_Col',
  ReactGridRow = 'React_Grid_Row',
  ReactHtmlA = 'React_Html_A',
  ReactHtmlDiv = 'React_Html_Div',
  ReactHtmlP = 'React_Html_P',
  ReactHtmlSpan = 'React_Html_Span',
  ReactIcon = 'React_Icon',
  ReactInput = 'React_Input',
  ReactInputNumber = 'React_InputNumber',
  ReactLayout = 'React_Layout',
  ReactLayoutContent = 'React_Layout_Content',
  ReactLayoutFooter = 'React_Layout_Footer',
  ReactLayoutHeader = 'React_Layout_Header',
  ReactLayoutSider = 'React_Layout_Sider',
  ReactList = 'React_List',
  ReactListItem = 'React_List_Item',
  ReactListItemMeta = 'React_List_Item_Meta',
  ReactMapper = 'React_Mapper',
  ReactMentions = 'React_Mentions',
  ReactMentionsOption = 'React_Mentions_Option',
  ReactMenu = 'React_Menu',
  ReactMenuItem = 'React_Menu_Item',
  ReactMenuItemGroup = 'React_Menu_ItemGroup',
  ReactMenuSubMenu = 'React_Menu_SubMenu',
  ReactModal = 'React_Modal',
  ReactPageHeader = 'React_PageHeader',
  ReactPageContainer = 'React_Page_Container',
  ReactPagination = 'React_Pagination',
  ReactPopconfirm = 'React_Popconfirm',
  ReactPopover = 'React_Popover',
  ReactProgress = 'React_Progress',
  ReactProvider = 'React_Provider',
  ReactRglContainer = 'React_RGL_Container',
  ReactRglItem = 'React_RGL_Item',
  ReactRglResponsiveContainer = 'React_RGL_ResponsiveContainer',
  ReactRadio = 'React_Radio',
  ReactRadioGroup = 'React_Radio_Group',
  ReactRate = 'React_Rate',
  ReactRenderComponent = 'React_RenderComponent',
  ReactRenderContainer = 'React_RenderContainer',
  ReactResult = 'React_Result',
  ReactSelect = 'React_Select',
  ReactSelectOption = 'React_Select_Option',
  ReactSkeleton = 'React_Skeleton',
  ReactSlider = 'React_Slider',
  ReactSpace = 'React_Space',
  ReactSpin = 'React_Spin',
  ReactStatistic = 'React_Statistic',
  ReactSteps = 'React_Steps',
  ReactStepsStep = 'React_Steps_Step',
  ReactSwitch = 'React_Switch',
  ReactTable = 'React_Table',
  ReactTabs = 'React_Tabs',
  ReactTabsTabPane = 'React_Tabs_TabPane',
  ReactTag = 'React_Tag',
  ReactText = 'React_Text',
  ReactTimePicker = 'React_TimePicker',
  ReactTimeline = 'React_Timeline',
  ReactTimelineItem = 'React_Timeline_Item',
  ReactTooltip = 'React_Tooltip',
  ReactTransfer = 'React_Transfer',
  ReactTree = 'React_Tree',
  ReactTreeNode = 'React_TreeNode',
  ReactTreeSelect = 'React_TreeSelect',
  ReactTypography = 'React_Typography',
  ReactTypographyParagraph = 'React_Typography_Paragraph',
  ReactTypographyText = 'React_Typography_Text',
  ReactTypographyTitle = 'React_Typography_Title',
  ReactUpload = 'React_Upload',
}

export const AtomType = z.nativeEnum(AtomTypeEnum)

export type AtomType = z.infer<typeof AtomType>