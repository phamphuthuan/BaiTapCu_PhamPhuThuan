// Khởi tạo mảng
var array = [];

// Xử lý sự kiện nhấn nút thêm
function addNumber() {
  // Lấy giá trị số nguyên người dùng nhập vào
  var number = document.getElementById("number").value;

  // Kiểm tra giá trị nhập vào có phải là số nguyên không
  if (isNaN(number)) {
    alert("Vui lòng nhập số nguyên!");
    return;
  }

  // Thêm số nguyên vào mảng
  array.push(number);

  // Xuất mảng ra màn hình
  document.getElementById("output-list").innerHTML = array.join(", ");

  // Xóa giá trị trong input
  document.getElementById("number").value = "";
}

// Bài 1
// Tính tổng các số nguyên dương trong mảng
function tongCacSoNguyenDuong(array) {
  let tong = 0;
  var count = 0;

  for (let i = 0; i < array.length; i++) {
    var x = array[i];
    if (x > 0) {
      tong += Number(x) ;
      count++;
    }
  }

  if (count === 0) {
    document.getElementById("tong").textContent = "Không có số nguyên dương nào trong mảng";
  } else {
    document.getElementById("tong").textContent = tong;
  }

}

// Bài 2
function tongSoNguyenDuong(array) {
  var count = 0;

  for (let number of array) {
    if (number >= 0) {
      count++;
    }
  }

  if (count === 0) {
    document.getElementById("demSoDuong").textContent = "Không có số nguyên dương nào trong mảng";
  } else {
    document.getElementById("demSoDuong").textContent = count;
  }

}


// Bài 3
function timSoNhoNhat(array) {
    let soNguyenNhoNhat = Math.min(...array);
    document.getElementById("soNhoNhat").textContent = soNguyenNhoNhat;
  }
    
// Bài 4
function timSoDuongNhoNhat(array) {
  var soDuong = array.filter(number => number > 0);
  if (soDuong.length > 0) {
    var soDuongNhoNhat = Math.min(...soDuong);
    document.getElementById("soDuongNhoNhat").textContent = soDuongNhoNhat;
  } else {
        document.getElementById("soDuongNhoNhat").textContent = "Không có số nguyên dương nào trong mảng.";
  }
}

// Bài 5
function timSoChanCuoiCung(array) {
  var soDuong = array.filter(number => number > 0);
  var soChan = soDuong.filter(number => number % 2 === 0);
  var soChanCuoiCung;
  if (soChan.length > 0) {
    soChanCuoiCung = soChan[soChan.length - 1];
    document.getElementById("soChanCuoiCung").textContent = soChanCuoiCung;
  } else {
    document.getElementById("soChanCuoiCung").textContent = "-1";
  }
}

// Bài 6
function doiViTri(array) {
  var viTri1 = document.getElementById('index1').value;
  var viTri2 = document.getElementById('index2').value;

  // Hoán đổi giá trị
  var tam = array[viTri1];
  array[viTri1] = array[viTri2];
  array[viTri2] = tam;

  // Hiển thị kết quả
  document.getElementById("mangSauKhiDoi").innerHTML = array.join(", ");
  }
// Bài 7
function sapXepTangDan(array) {
  array.sort(function(a, b) {
    return a - b;
    });
  document.getElementById("mangSauKhiSapXep").innerHTML = array.join(", ");
}

// Bài 8
// Hàm kiểm tra số nguyên tố
function isPrime(number) {

  if (number < 2 || !Number.isInteger(number)) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function firstPrime(array) {
  for (let element of array) {
    if (isPrime(element)) {
      return element;
    }
  }
  return -1;
}

function timSoNguyenToDauTien(array) {
  let prime = firstPrime(array);
  document.getElementById("soNguyenToDauTien").textContent = prime;
}

// Bài 9
function laySoNguyen(array) {
  let soDuong = 0;
  let soAm = 0;

  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
      continue;
    }
    if (array[i] > 0) {
      soDuong++;
    } else if (array[i] < 0) {
      soAm++;
    }
  }
  document.getElementById("soNguyen").textContent = soDuong + soAm;
}

// Bài 10
function soSanhSoLuongAmDuong(array) {
  let soDuong = 0;
  let soAm = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      soDuong++;
    } else if (array[i] < 0) {
      soAm++;
    }
  }

  if (soAm > soDuong) {
      document.getElementById("soSanh").textContent = "Số âm > số dương";
  } else if (soAm < soDuong) {
      document.getElementById("soSanh").textContent = "Số âm < số dương";
  } else {
      document.getElementById("soSanh").textContent = "Số âm = số dương";
  }
}
