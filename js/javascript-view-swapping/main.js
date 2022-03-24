
const tabContainer = document.querySelector('.tab-container');
const tabList = document.querySelectorAll('.tab');
const viewList = document.querySelectorAll('.view');

tabContainer.addEventListener('click', function (event) {
  const et = event.target;
  if (et.matches('.tab')) {
    for (let i = 0; i < tabList.length; i++) {
      if (tabList[i] === et) {
        tabList[i].className = 'tab active';
      } else {
        tabList[i].className = 'tab';
      }
    }

    const etDataView = et.getAttribute('data-view');
    for (let i = 0; i < viewList.length; i++) {
      if (viewList[i].getAttribute('data-view') === etDataView) {
        viewList[i].className = 'view';
      } else {
        viewList[i].className = 'view hidden';
      }
    }
  }
});
