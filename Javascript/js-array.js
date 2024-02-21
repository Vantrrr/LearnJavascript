/*
    Array trong Js
        - Cách tạo array
        - Sử dụng cách nào tại sao ?
        - Kiểm tra data type ? (Array.isArray(tên mảng))
        - Truy xuất array ( độ dài, lấy phần tử theo index)   
*/

var user = [
    'Van',
    'Van 1',
    'Van 2',
];

console.log(Array.isArray(user)); // Kiểm tra data type

console.log(user.length); // Truy xuất array độ dài

console.log(user[1]); 

var myInfo = [
    {
        'id': 1,
        'name': 'Tran Dinh Van',
        'class': 'DC20'
    },
    {
        'id': 2,
        'name': 'Tran Dinh An',
        'class': 'DC23'
    },
    {
        'id': 1,
        'name': 'Tran Dinh',
        'class': 'DC29'
    }
];

myInfo.forEach(function(myInfo) {
    console.log(myInfo);
})

var isDC20 = myInfo.every(function(myInfo) {
    return myInfo.class === 'DC20';
})

console.log(isDC20);
