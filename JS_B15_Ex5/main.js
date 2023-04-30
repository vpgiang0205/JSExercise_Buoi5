/**
* Mô hình 3 khối - Quản lý sinh viên
*.* Đầu vào
- diemChuan = ?
- khuVucA = 2
- khuVucB = 1
- khuVucC = 0.5
- doiTuong1 = 2.5
- doiTuong2 = 1.5
- doiTuong3 = 1
- diemMon_1 = ?
- diemMon_2 = ?
- diemMon_3 = ?
*.* Xử lý
- totalDiem = diemMon_1 + diemMon_2 + diemMon_3;
- chọn A thì công thêm 2; C thêm 0.5; B thêm 1;
- chọn 1 thì cộng thêm 2.5; 2 thêm 1.5; 1 thêm 1;

- resultDiem = totalDiem > diemChuan
*.* Đầu ra
- Show resultDiem
*/
function totalDiem(diemMon_1, diemMon_2, diemMon_3, khuVuc, doiTuong) {
    var tong = diemMon_1 + diemMon_2 + diemMon_3;
    if (khuVuc === "2") {
        tong += 2;
    } else if (khuVuc === "1") {
        tong += 1;
    } else if (khuVuc === "0.5") {
        tong += 0.5;
    }
    if (doiTuong === "2.5") {
        tong += 2.5;
    } else if (doiTuong === "1.5") {
        tong += 1.5;
    } else if (doiTuong === "1") {
        tong += 1;
    }
    return tong;
}

function clickBtnTinhDiem() {
    var diemChuan = document.getElementById("diemChuan").value * 1;
    var diemMon_1 = document.getElementById("diemMon_1").value * 1;
    var diemMon_2 = document.getElementById("diemMon_2").value * 1;
    var diemMon_3 = document.getElementById("diemMon_3").value * 1;
    var khuVucSelect = document.getElementById("khuVuc");
    var khuVuc = khuVucSelect.options[khuVucSelect.selectedIndex].value;
    var doiTuongSelect = document.getElementById("doiTuong");
    var doiTuong = doiTuongSelect.options[doiTuongSelect.selectedIndex].value;

    var total = totalDiem(diemMon_1, diemMon_2, diemMon_3, khuVuc, doiTuong);

    var resultDiem = "";
    if (!diemChuan) {
        alert("Vui lòng nhập điểm chuẩn");
        return;
    } else if (total >= diemChuan) {
        resultDiem =
            "<p class='alert alert-success'>Bạn đã đậu tổng điểm là: " +
            total +
            "</p>";
    } else {
        resultDiem =
            "<p class='alert alert-danger'>Bạn đã rớt tổng điểm là: " +
            total +
            "</p>";
    }

    document.getElementById("footerTuyenSinh").innerHTML = resultDiem;
}

/**
 * Tính tiền điện
 *.* Đầu vào
 - nameElec = ?
 - soKwDien = ?
 - tienDien = ?
 - soKw50 = 500 d/ Kw
 - soKw100 = 650 d/ Kw
 - soKw200 = 850 d/ Kw
 - soKw350 = 1100 d/ Kw
 - soKwConLai = 1300d/ Kw
 *.* Đầu ra
 - Tiền điện từ 0 -> 50
    tienDien = soKwDien * soKw50
 - Tiền điện từ 50 -> 100
    tienDien = 50 * soKw50 + (soKwDien - 50) * soKw100;
 - Tiền điện từ 100 -> 200
    tienDien = 50 * soKw50 + 50 * soKw100 + (soKwDien - 100) * sokw200;
 - Tiền điện từ 200 -> 350
    tienDien = 50 * soKw50 + 50 * soKw100 + 100 * soKw200 + (soKwDien - 200) * soKw350;
 - Tiền điên từ 350 trở lên
    tienDien = 50 * soKw50 + 50 * soKw100 + 100 * soKw200 + 150 * soKw350 + (soKwDien - 350) * soKwConLai;
 *.* Đầu ra
 - Show kết quả
 */

const SOKW_50 = 500;
const SOKW_100 = 650;
const SOKW_200 = 850;
const SOKW_350 = 1100;
const SOKW_CONLAI = 1300;

var tienDien = 0;

function getDien(id) {
    return document.getElementById(id);
}

function btnTinhTienDien() {
    var nameElec = getDien("nameElec").value;
    var soKwDien = getDien("soKwDien").value * 1;

    //Tính tiền điện
    if (!soKwDien) {
        alert("Vui lòng nhập số điên");
    } else if (soKwDien <= 50) {
        tienDien = soKwDien * SOKW_50;
    } else if (soKwDien <= 100) {
        tienDien = 50 * SOKW_50 + (soKwDien - 50) * SOKW_100;
    } else if (soKwDien <= 200) {
        tienDien = 50 * SOKW_50 + 50 * SOKW_100 + (soKwDien - 100) * SOKW_200;
    } else if (soKwDien <= 350) {
        tienDien =
            50 * SOKW_50 +
            50 * SOKW_100 +
            100 * SOKW_200 +
            (soKwDien - 200) * SOKW_350;
    } else {
        tienDien =
            50 * SOKW_50 +
            50 * SOKW_100 +
            100 * SOKW_200 +
            150 * SOKW_350 +
            (soKwDien - 350) * SOKW_CONLAI;
    }
    // Format
    var foramtNumberDien = new Intl.NumberFormat("vn-Vn");

    //Show kết quả
    var showTienDien = "";
    showTienDien +=
        "<p class='alert alert-success'> Khách Hàng: " + nameElec + "</p>";
    showTienDien +=
        "<p class='alert alert-success'> Tiền điện tháng này là: " +
        foramtNumberDien.format(tienDien) +
        " VND" +
        "</p>";

    getDien("ShowKetQuaDien").innerHTML = showTienDien;
}

/**
    Tính tiền thuế
 *.* Đầu vào
 nameTax = ?
 totalTax = ?
 tax = ?
 incomeTax = ?
 personTax = ?
 tax60 = 0.05
 tax120 = 0.1
 tax210 = 0.2
 tax384 = 0.25
 tax624 = 0.3
 tax960 = 0.35
 *.* Xử lý
 Thuế dưới 60 triệu
 tax = totalTax * tax60
 Thuế dưới 120 triệu
 tax = 60000000 * tax60 + (totalTax - 60000000) * tax120
 Thuế dưới 210 triệu
 tax = 60000000 * tax60 + 60000000 * tax120 + (totalTax - 120000000) * tax210
 Thuế dưới 384 triệu
 tax = 60000000 * tax60 + 60000000 * tax120 + 90000000 * tax210 + (totalTax - 210000000) * tax384
 Thuế dưới 624 triệu
 tax = 60000000 * tax60 + 60000000 * tax120 + 90000000 * tax210 + 174000000 * tax384 + (totalTax - 384000000) * tax624
 Thuế trên 960 triệu
 tax = 60000000 * tax60 + 60000000 * tax120 + 90000000 * tax210 + 174000000 * tax384 + 240000000 * tax624 + (totalTax - 624000000) * tax960
 
 incomeTax = totalTax - 4000000 - personTax * 1600000
 *.* Đầu ra
*/

const tax60 = 0.05;
const tax120 = 0.1;
const tax210 = 0.2;
const tax384 = 0.25;
const tax624 = 0.3;
const tax960 = 0.35;

function getTax(id) {
    return document.getElementById(id);
}

function tinhTax(totalTax) {
    var result = 0; // Khai báo biến result kiểu số và gán giá trị số 0 cho nó

    if (!totalTax) {
        alert("Vui lòng nhập số thu nhập cá nhân");
    } else if (totalTax <= 60000000) {
        result = totalTax * tax60;
    } else if (totalTax <= 120000000) {
        result = 60000000 * tax60 + (totalTax - 60000000) * tax120;
    } else if (totalTax <= 210000000) {
        result =
            60000000 * tax60 +
            60000000 * tax120 +
            (totalTax - 120000000) * tax210;
    } else if (totalTax <= 384000000) {
        result =
            60000000 * tax60 +
            60000000 * tax120 +
            90000000 * tax210 +
            (totalTax - 210000000) * tax384;
    } else if (totalTax <= 624000000) {
        result =
            60000000 * tax60 +
            60000000 * tax120 +
            90000000 * tax210 +
            174000000 * tax384 +
            (totalTax - 384000000) * tax624;
    } else {
        result =
            60000000 * tax60 +
            60000000 * tax120 +
            90000000 * tax210 +
            174000000 * tax384 +
            240000000 * tax624 +
            (totalTax - 624000000) * tax960;
    }

    if (result < 0) { // Kiểm tra nếu kết quả thuế tính toán được nhỏ hơn 0
        result = 0; // Gán giá trị 0 cho biến result
    }

    return result;
}

function btnTax() {
    var nameTax = getTax("nameTax").value;
    var incomeTax = "";
    var totalTax = getTax("totalTax").value * 1;
    var personTax = getTax("personTax").value * 1;

    if (personTax >= 1) {
        incomeTax = tinhTax(totalTax) - personTax * 1600000;
    } else {
        incomeTax = tinhTax(totalTax);
    }

    if (incomeTax < 0) {
        incomeTax = 0
    }

    var formatNumTax = new Intl.NumberFormat("vn-Vn");

    var showTax = "";
    showTax +=
        "<p class='alert alert-success'> Họ tên người nộp thuế: " +
        nameTax +
        "</p>";
    showTax +=
        "<p class='alert alert-success'> Số thuế phải nộp là: " +
        formatNumTax.format(incomeTax) +
        " VND" +
        "</p>";

    getTax("showIncomeTax").innerHTML = showTax;
}

function tinhHoaDonCap() {
    var maKhachHang = document.getElementById("maKhachHang").value;
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var connection = parseInt(document.getElementById("connection").value);
    var channel = parseInt(document.getElementById("channel").value);
    var totalBill = document.getElementById("totalBill");

    if (loaiKhachHang === "nhaDan") {
        var bill = 4.5 + 20.5 + 7.5 * channel;
        totalBill.innerHTML = "";
        totalBill.innerHTML +=
            "<p class='alert alert-success'>Mã khách hàng: " +
            maKhachHang +
            "</p>";
        totalBill.innerHTML +=
            "<p class='alert alert-success'>Tổng hóa đơn: " +
            "$ " +
            bill +
            "</p>";
    } else if (loaiKhachHang === "doanhNghiep") {
        if (isNaN(connection)) {
            totalBill.innerHTML = "Vui lòng nhập số kết nối";
        } else {
            var bill = 15 + 75 + (connection - 10) * 5 + 50 * channel;
            totalBill.innerHTML = "";
            totalBill.innerHTML +=
                "<p class='alert alert-success'>Mã khách hàng: " +
                maKhachHang +
                "</p>";
            totalBill.innerHTML +=
                "<p class='alert alert-success'>Tổng hóa đơn: " +
                "$ " +
                bill +
                "</p>";
        }
    }
}

function toggleConnectionInput() {
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var connectionInput = document.getElementById("connection");

    if (loaiKhachHang === "doanhNghiep") {
        connectionInput.style.display = "block";
    } else {
        connectionInput.style.display = "none";
        connectionInput.value = "";
    }
}

function calculateBill() {
    var channel = parseInt(document.getElementById("channel").value);

    if (isNaN(channel)) {
        document.getElementById("totalBill").innerHTML =
            "Vui lòng nhập số kênh cao cấp";
        return;
    }

    tinhHoaDonCap();
}

function calcTax() {
    var userName = document.getElementById("inputUserName").value,
        // Thu nhập chịu thuế = Tổng thu nhập năm - 4tr- Số người phụ thuộc * 1.6tr
        userSalary = document.getElementById("inputSalary").value - 4e6 - 16e5 * document.getElementById("inputDependent").value,

        // Thu nhập đến 60 triệu: thì thuế 5 % là = thu nhập * 0.05
        // Dùng biểu thức: condition ? expression1 : expression2 để kiểm tra điều kiện "condition". Nếu điều kiện đúng (true), biểu thức sẽ trả về giá trị của "expression1". Nếu điều kiện sai (false), biểu thức sẽ trả về giá trị của "expression2". nếu "userSalary" nằm trong khoảng từ 0 đến 6e7 (69 triệu), biển "userTax" sẽ được gán giá trị bằng 5% thuế của biển "userSalary". Nếu "userSalary" lớn hơn 6e7, biển "userTax" sẽ không được gán giá trị và giá trị của nó sẽ được giữ nguyên.tương tự các giá trị khác trong bảng đem ra.

        userTax = 0;
    // Thu nhập đến 60 triệu, thuế 5%:
    userSalary > 0 && userSalary <= 6e7 ? userTax = .05 * userSalary : userSalary > 6e7 &&

        // Thu nhập đến 128 triệu, thuế 10%:
        userSalary <= 12e7 ? t = .1 * userSalary : userSalary > 12e7 &&

            // Thu nhập đến 210 triệu, thuế 15%:
            userSalary <= 21e7 ? userTax = .15 * userSalary : userSalary > 21e7 &&

                // Thu nhập đến 384 triệu, thuế 20%:
                userSalary <= 384e6 ? userTax = .2 * userSalary : userSalary > 384e6 &&

                    // Thu nhập đến 624 triệu, thuế 25%:
                    userSalary <= 624e6 ? userTax = .25 * userSalary : userSalary > 624e6 &&

                        // Thu nhập đến 960 triệu, thuế 30% và trên 968, thuế 35%:
                        userSalary <= 96e7 ? userTax = .3 * userSalary : userSalary > 96e7 ? userTax = .35 * userSalary : alert("Số tiền thu nhập không hợp lệ"),
        userTax = new Intl.NumberFormat("vn-VN").format(userTax), document.getElementById("txtTax").innerHTML =
        "<p class='alert alert-success'>"
        + "Họ tên: " + userName + "; Tiền thuế thu nhập cá nhân: " + userTax + " VND" + "</p>"

}
document.getElementById("btnTax").onclick = calcTax