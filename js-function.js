/*
    Functions (hàm) trong Js

    1. Functions ?
        - Một khối mã 
        - Làm 1 việc cụ thể
    2. Loại hàm 
        - Built-in
        - Tự định nghĩa
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