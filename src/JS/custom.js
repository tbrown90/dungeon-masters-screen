export function openTab(tabId) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    var tab = document.getElementById(tabId);
    if (tab != null) {
      tab.style.display = "block";
    }
  }
