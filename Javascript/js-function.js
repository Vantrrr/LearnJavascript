/*
    Functions (hàm) trong Js

    1. Functions ?
        - Một khối mã 
        - Làm 1 việc cụ thể
    2. Loại hàm 
        - Built-in
        - Declaration 
        - Expression 
        - Arrow
    3. Tính chất 
        - Không thực thi khi định nghĩa 
        - Thực thi khi được gọi
        - Có thể nhận tham số
        - Có thể trả về 1 giá trị
    
 */
// Hàm này sẽ không thực thi vì chưa được gọi 
function helloWorld() {
    alert('Hello Dev');
} 

helloWorld(); // Cách gọi hàm , và sau khi hàm được gọi thì sẽ thực thi 

// Hàm có chứa tham số và trả về giá trị 
function mySum(a, b) {
    return a * b;
} 

mySum(2,6); 


// Declaration funtion
function autoLogin() {
    console.log("Declaration function");
}
autoLogin();

// Expression function
var showMessage = function() {
    console.log("Expression function");
}
showMessage();

// Arrow function 
autoLogin = () => {
    console.log("Arrow function");
}

autoLogin();