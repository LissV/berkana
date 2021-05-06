function changeClientTab(evt, sectionName) {
  let i, tablinks;
  let currentActiveTabcontent = document.getElementsByClassName("clientTab_content-active");
  currentActiveTabcontent[0].className = currentActiveTabcontent[0].className.replace(" clientTab_content-active", "") + " clientTab_content";
  tablinks = document.getElementsByClassName("clientTab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" selectedTab", "");
  }
  let element = document.getElementById(sectionName);
  let a = element.className.replace(" clientTab_content", "") + " clientTab_content-active";
  element.className = a;
  evt.currentTarget.className += " selectedTab";
}
