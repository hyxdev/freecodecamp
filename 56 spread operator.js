const arr1 = ['JAN', 'FEB', 'MAR', 'ARP', 'MAY'];
let arr2;
(function(){
    arr2 =[...arr1] ;
    arr1[0] = 'potato'
})();
console.log(arr2);
