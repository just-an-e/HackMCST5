var treenum = 0;
var lifetimetrees = 0;
var treeClickMult = 0;
var treeUpgrade = false;
var treeUpgradeOneAmount = 0;

function treeClick(){ //will add one to treenum if tree.png is clicked
  treenum = treenum + 1 + treeUpgradeOneAmount;
  lifetimetrees = lifetimetrees + 1 + treeUpgradeOneAmount;
  document.getElementById('treeNumDisplay').innerHTML = "You have planted " + treenum + " trees.";
}

function treeUpgradeOne() { //adds one to tree UpgradeAmount in exchange for trees.
  if(treenum >= treeUpgradeOneAmount){
    treenum = treenum - (treeUpgradeOneAmount * 1);
    treeUpgradeOneAmount++;
  }
}
