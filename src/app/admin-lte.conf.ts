export const adminLteConf = {
  skin: 'red',
  isSidebarLeftCollapsed: true,
  // isSidebarLeftExpandOnOver: false,
  // isSidebarLeftMouseOver: false,
  isSidebarLeftMini: true,
  // sidebarRightSkin: 'dark',
  // isSidebarRightCollapsed: true,
  // isSidebarRightOverContent: true,
  // layout: 'normal',
  sidebarLeftMenu: [
    {label: 'Website', separator: true},
    {label: 'Bot - @FNBRStats', separator: true},
    {label: 'Status', route: 'status', iconClasses: 'fa fa-terminal'},
    {label: 'Twitter', route: 'twitter', iconClasses: 'fa fa-twitter'},
    {label: 'Statistics', route: 'statistics', iconClasses: 'fa fa-globe'}
  ]
};
