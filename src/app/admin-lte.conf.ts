export const adminLteConf = {
  skin: 'red',
  // isSidebarLeftCollapsed: false,
  // isSidebarLeftExpandOnOver: false,
  // isSidebarLeftMouseOver: false,
  // isSidebarLeftMini: true,
  // sidebarRightSkin: 'dark',
  // isSidebarRightCollapsed: true,
  // isSidebarRightOverContent: true,
  // layout: 'normal',
  sidebarLeftMenu: [
    {label: 'MONITORING', separator: true},
    {label: 'Dashboard', route: 'twitter', iconClasses: 'fa fa-twitter', pullRights: [{text: 'New', classes: 'label pull-right bg-red'}]},
    {label: 'Statistics', separator: true}
  ]
};
