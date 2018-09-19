const sortingListBanks = arr => {
  var obj = [];
  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    var tls = str.split(":")[0];
    obj[i] = tls;
  }
  var arreys = unique(obj);
  return arreys;
};

const unique = arr1 => {
  var obj1 = {};
  for (var i = 0; i < arr1.length; i++) {
    var str1 = arr1[i];
    obj1[str1] = true;
  }
  return Object.keys(obj1);
};

export default sortingListBanks;
