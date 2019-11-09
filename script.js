var treenum = 0;
var lifetimetrees = 0;
var treeClickMult = 0;
var treeUpgrade = false;
var treeUpgradeOneAmount = 1;
var treePS = 0;
var autoPlanter;
var PlanterDrone;
var treeUpgradeTwoAmount = 0;
var autoTreeUPONEamount = 0;

function updateTreeDisplay() {
  document.getElementById('treeNumDisplay').innerHTML = "You have " + treenum + " trees currently planted. | You have planted " + lifetimetrees + " trees overall. You automatically make " + treePS + " trees per second."; 
}

setInterval(autoTreeClick ,1000)

function autoTreeClick(){
  treenum = treenum + treeUpgradeOneAmount + treeUpgradeTwoAmount;
  lifetimetrees = lifetimetrees + treeUpgradeOneAmount + treeUpgradeTwoAmount;
  updateTreeDisplay();
}

function treeClick(){ //will add one to treenum if tree.png is clicked
  treenum = treenum + treeUpgradeOneAmount + treeUpgradeTwoAmount;
  lifetimetrees = lifetimetrees + treeUpgradeOneAmount + treeUpgradeTwoAmount;
  updateTreeDisplay();
}

function treeUpgradeOne() { //adds one to tree UpgradeAmount in exchange for trees.
  if(treenum >= (treeUpgradeOneAmount * 10) + treeUpgradeOneAmount){
    treenum = treenum - ((treeUpgradeOneAmount * 10) + treeUpgradeOneAmount);
    treeUpgradeOneAmount++;
    updateTreeDisplay();
  }
}


function treeUpgradeTwo() { //adds ten to tree UpgradeAmount in exchange for trees.
  if(treeUpgradeTwoAmount = 0){
    if(treenum >= 100) {
      treenum = treenum - 100;
      treeUpgradeTwoAmount = treeUpgradeTwoAmount + 10;
      updateTreeDisplay();
    }
  }
  else if(treenum >= (treeUpgradeTwoAmount * 100) + treeUpgradeTwoAmount * 10 + treeUpgradeTwoAmount){
    treenum = treenum - ((treeUpgradeTwoAmount * 100) + treeUpgradeTwoAmount * 10 + treeUpgradeTwoAmount);
    treeUpgradeTwoAmount = treeUpgradeTwoAmount + 10;
    updateTreeDisplay();
  }
}

function upgradeAutoPlanter(){
  if(treenum >= (autoTreeUPONEamount * 50) + autoTreeUPONEamount){
    treenum = treenum - ((autoTreeUPONEamount * 50) + autoTreeUPONEamount);
    autoTreeUPONEamount++;
    updateTreeDisplay();
  }
}
