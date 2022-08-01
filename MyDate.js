// khai báo lớp
class MyDate {
  day;
  month;
  year;

  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  // phương thức get: để lấy dữ liệu ra = get + tên thuộc tính. VD getScore() {}
  // set: để cập nhật lại dữ liệu = set + tên thuộc tính. VD: setScore() {}

  getDay() {
    return this.day;
  }

  getMonth() {
    return this.month;
  }

  getYear() {
    return this.year;
  }

  setDay(day) {
    this.day = day;
  }

  setMonth(month) {
    this.month = month;
  }

  setYear(year) {
    this.year = year;
  }

  setDate(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  toString() {
    return (this.day + "/" + this.month + "/" + this.year);
  }
}

// khởi tạo đối tượng bằng từ khóa new (gọi hàm khởi tạo)
var date1 = new MyDate(29,7,2022);
var date2 = new MyDate(30,7,2022);

let day = date1.getDay();
let month = date1.getMonth();
let year = date1.getYear();

// truy cap phuong thuc cua doi tuong: <tendoituong>.<tenphuongthuc>
// truy cap thuoc tinh cua doi tuong: <tendoituong>.<tenthuoctinh>
alert(day + "/" + month + "/" + year); // các biến này sẽ lấy giá trị ở trên
date1.setDate(28,07,2022);
alert(day + "/" + month + "/" + year);

