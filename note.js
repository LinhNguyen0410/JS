// ktra chẵn lẽ
    var btnCheck = document.getElementById('submitBtn')
    var numbers = document.getElementById('number')
    var notifi = document.getElementById('demo')

    function checkNumber(){

     if(numbers.value % 2 == 0){
         notifi.innerHTML =  numbers.value +  ' là số chẵn'
     }
     else{
         notifi.innerHTML =   numbers.value + ' là số lẽ'
     }

    }

    // các hàm xử lý chuỗi trong JS
    var firstName = 'Linh'
    var lastName = 'Nguyen'
    console.log(`Toi tên laa : ${firstName} ${lastName}`);
    // cú pháp nối chuỗi trong ES6



    const myName = 'Linh dep trai'
    console.log(myName.charAt(1));
    // Lấy kí tự chữ theo index, 1 là i



    var title = 'Javascript cơ bản'
    console.log(title.includes('Javascript'))
    // kiểm tra xem chữ Javascript có trong chuỗi hay không

    var title = 'Javascript cơ bản'
    console.log(title.indexOf('bản'))
    // kiểm tra xem chữ bản nằm ở vị trí index số mấy
    // ......................https://toidicode.com/cac-ham-xu-ly-chuoi-trong-javascript-155.html

    // cắt chuỗi

    string.slice(begin,end);
    string.substring(begin,end);

    /* -Phương thức này cũng có tác dụng là cắt chuỗi nhưng tham số thứ 2 của phương thức
    này có phần khác với 2 phương thức còn lại.*/
    string.substr(begin,length);


    // thay thế chuỗi
    string.replace(chuoicantim,chuoithaythe);

    /*dưới đây là biểu thức chính quy,nó sẽ select tất cả các từ cần tìm để đổi thành chuỗi thay thế thay vì cách 1
    nó chỉ select từ đầu tiên */
    string.replace(/chuoicantim/g,chuoithaythe);











    // làm việc với số :
    number.toString() //: convert sang string
    number.toFixed(tham so)  //làm tròn đến  tham số truyền vào
    isNaN() //: kiểm tra số ngdung nhập vào có hợp lệ hay ko



    // cách viết số khác trong JS

    var million = 1e6; // tương tự: 1000000

    // hoặc

    var billion = 2e9; // tương tự: 2000000000 (hai tỏi à nhầm hai tỉ)
    // https://fullstack.edu.vn/learning/javascript-co-ban/so-va-lam-viec-voi-so













// MẢNG
// C1:
var laguages =  
['JS','Java','Python','PHP','Ruby','C','Koltin',6,null,function(){}]
console.log(laguages)
// mảng có thể chứa tất cả các kiểu dữ lịu
// C2:
var languages = new Array(
    'JS','Java','Python','PHP','Ruby','C','Koltin',6,null,function(){}
    )
console.log(languages)
// tạo bằng từ khóa new ko đươc khuyến cáo sdung

//cách kiểm tra để phân biệt object và array :
console.log(Array.isArray(tên biến cần kiểm tra)); 
// trả về true tức nó là Array

//ktra độ dài array 
console.log(array.length)

// lấy phần tử theo index
console.log(languages[stt phần tử])
//lấy phần tử cuối trong mảng 
console.log(languages[languages.length -1])


// JS array method
//1. convert to string
console.log( array.toString())

// 2 Join thêm ngăn cách giữa các kĩ tự trong mảng khi convert sang string
console.log( laguages.join( ' khoảng trắng,gạch ngang,gạch xéo ' ))
// dùng hàm này thì cũng đã chuyển mảg thành chuổi luôn r

// 3.Pop : Xóa phần tử cuối mảng và trả về chính nó
var laguages =  ['JS','Java','Python','PHP','Ruby','C','Koltin',6,null]
console.log( laguages.pop()) //Xóa phần tử cuối mảng và trả về chính nó - ở dòng này thì nó chỉ trả về ptu cuối là null
//pop() bao nhiu dofg thì nó xóa lần lượt bấy nhiêu ptu cuối mảng
console.log( laguages)//console 1 cái nữa thì nó sẽ trả về 8 ptu trước và null đã bị xóa


// 4. Push
console.log( laguages.push('Html'))//push nó thêm vào 1 ptu,nhưng nó lại trả về ĐỘ DÀI
//MẢNG sau khi đã push,vdu trc đó có 9 phần tử thì push xong n trả ra csole số 10,console 1 lần nữa
//nó mới trả về mảng mới có phần tử Html


//5. Shift : GIỐNG POG NHƯNG Xóa phần tử ĐẦU mảng và trả về chính nó
console.log( laguages.shift())

// KHI DÙNG POP HOẶC SHIFT ĐỂ XÓA MẢNG,ĐẾN KHI NÀO XÓA HẾT MẢNG THÌ NÓ SẼ TRẢ VỀ UNDEFINED : 
//ĐIỀU NÀY GIÚP SAU NÀY KIỂM TRA KHI NÀO XUẤT HIỆN UNDEFINED THÌ DỪNG VIỆC XÓA MẢNG(DS SẢN PHẨM)

//6.Unshift : GIỐNG PUSH thôi ,nhưng nó thêm vào ĐẦU MẢNG chứ k phải cuối mảng như PUSH và cũng trả
// về độ dài mới của mảng


// 6. Splicing

var laguages =  
['JS','Java','Python','PHP','Ruby','C','Koltin',6,null]
laguages.splice(1,1)
console.log( laguages)
// tự test : hiểu đơn giản là cắt chuỗi từ vị trí nào đến vị trí nào : ví dụ splice 1,1, thì số 1 đầu tiên 
// là index = 1 (ptu mà nó bắt đầu cắt như trong mảng là ptu Java),số 1 thứ 2 là số luowjg cần xóa(xóa 1 thì nó
// chỉ xóa Java,vdu xóa 2 thì n xóa luôn python)
// 12.08

laguages.splice(/*vi tri index bat dau xoa,so luong can xoa,ptu can chèn nếu có*/)

// áp dụng splice đề chèn thêm ptu giống push hoặc unshift nhưng mình sẽ làm chủ dc vị trí nó đứng
var laguages = 
['JS','Java','Python','PHP','Ruby','C','Koltin',6,null]
languages.splice(3,0,'HTML')
// số 3 là vị trí index mà phần tử sẽ đứng khi dc thêm vào,số 0  để n hiểu rằng cta ko xóa
// 1 ptu nào khi dùng splice,tham số thứ 3 thêm vào là ptu chèn thêm

// cách chèn này cũng có thể áp dụng khi ta thực hiện xóa 1 phần tử ở vị trí đó(như vdu là vtri thu 3)
// và thêm ngay 1 ptu khác đắp vào đúng vtri thứ 3 đó





// CONCAT : NỐI MẢNG
var languages1 = ['JS','Java','Python']
var languages2 = ['CSS','PHP','Ruby']
console.log(languages1.concat(languages2))
// lấy mảng gốc là mảng gọi đến hàm concat nên ptu xuất hiện đầu tiên là JS



// Slicing : cắt chuổi theo index
var languages1 = ['JS','Java','Python']
console.log(languages1.slice(1,2))
console.log(languages1.slice( bắt đầu cắt tại index,kết thúc cắt tại index ))
// kết quả của hàm trên là 'Java;


















/////////////////////////////// FUNCTION ////////////////////////////////////////
// Hàm ko được thực thi khi được định nghĩa
// mà nó chỉ đc thực thi khi đc gọi
//có thể nhận tham số
//có thể trả về 1 value
// tên hàm : a => z , A => Z , 0 => 9(k dc đặt đầu tiên), sử dụng dc gạch dưới_
function showDialog() {
    //code
}
    showDialog()    //gọi hàm bằng toán tử call ()










// DATE 
var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1; 
// muốn lấy tháng thì phải cộng thêm 1
var day = date.getDay() + 30;
// muốn lấy ngày thì phải cộng thêm 30
var hours = date.getHours();
var minuties = date.getMinutes();
var second = date.getSeconds();

// console.log("Hôm nay là ngày " + day + " tháng " + month + " năm " + year + "." 
//     + "Bây giờ là " + hours+ " giờ " + minuties +" phút " + second + " giây."  )
console.log(`Bây giờ là ${hours} giờ ${minuties} phút ${second} giây ,ngày ${day} tháng ${month} năm ${year}.`)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date






//Switch

var date = 12;

switch(date){
    case 2: 
    console.log(`Hôm nay là thứ 2`)
    break;
    case 3: 
    console.log(`Hôm nay là thứ 3`)
    break;
    case 4: 
    console.log(`Hôm nay là thứ 4`)
    break;
    case 5: 
    console.log(`Hôm nay là thứ 5`)
    break;
    case 6: 
    console.log(`Hôm nay là thứ 6`)
    break;
    case 7: 
    console.log(`Hôm nay là thứ 7`)
    break;
    case 8: 
    console.log(`Hôm nay là chủ nhật`)
    break;
    default:
    console.log(`đéo biết`)
}




// su dug vong for lay index trong mang

var myLanguages = [
'Javascript',
'Java',
'PHP',
'CSS',
'HTML'
]
var arrayLength = myLanguages.length
for (var i = 0 ; i < arrayLength ; i++){

    console.log(i)
}

// console.log(myLanguages[indexx]) =>lấy ra giá trị mảng




// các loại function
Function Declaration:

function handleClick() {
    console.log("clicked")
}
    // viết tt tên hàm

    Function Expression:
    //cần đăt biến
    const handleClick = function() {
        console.log("clicked")
    }

    Arrow Function











// NÂNG CAO VỚI MẢNG
Array Methods
forEach()
every()
//  thằng every rất hữu ích để giúp ktra tất cả các phần tử của 1 mảng phải phụ thuộc 1 dk gì đó
// vd cần kiểm tra tất cả các phần tử của coures có phải miễn phí hay k
// return về type boolean
some()
find()
filter()
map()
reduce()




// làm việc với mảng
var courses = [
{
    id : 1,
    name : 'Javascript',
    coin : 300
},
{
    id : 2,
    name : 'Java',
    coin : 200
},

{
    id : 3,
    name : 'PHP',
    coin : 100
},

{
    id : 4,
    name : 'CSS',
    coin : 0
},

{
    id : 5,
    name : 'HTML',
    coin : 0
},


]
// duyệt qua các phần tử của mảng

courses.forEach(function(course (biến ngẫu nhiên) ,index (index nếu muốn lấy) {
    csl(index , course)
})

//tham số thứ nhất truyền vào 1 biến gì đó cho dễ hiểu (bắt buộc)
// tham số thứ 2 thì lấy ra index nếu muốn(k có thì đặt 1 ts thứ nhất cdc)




var isFree = courses.every(function(course ,index) {
    return course.coin === 0  // điều kiện
})
csl(isFree)
// duyệt xem trong mảng courses tất cả các khóa học có phải đều 0 coin hay k //TẤT CẢ
// tất nhiên là đ phải và kết quả sẽ trả về false



var isFree = courses.some(function(course ,index) {
    csl(index)
    return course.coin === 0  // điều kiện
})
csl(isFree)
// duyệt xem trong mảng courses chỉ cần thấy 1 khóa 0 coin thì n sẽ trả về true // 1 vài
// tất nhiên là chạy đến ông index = 3 là n sẽ thấy 0 coin thỏa ddkien và trả kq ngay lập tức



var courses = courses.find(function(course ,index) {
    return course.name == "HTML"  // điều kiện
})
csl(courses)
// duyệt xem trong mảng courses có cái nào xuất hiện với name là HTML ko
//thích hợp xây dựng chức năng tìm kiếm
// nhưng chỉ trả về 1 phần tử đầu tiên mà n tìm thấy
//còn mấy muốn lấy tất cả từ a-z thì dùng filter
var listCourses = courses.filter(function(course ,index) {
    return course.name == "HTML"  // điều kiện
})
csl(listCourses)
// duyệt tất cả cái nào xuất hiện với name là HTML




// map
// method map dung de thay doi gia tri trong object
var courses = [
{
    id: 1,
    name : 'Javascript',
    coin:12    
},
{
    id: 2,
    name : 'PHP',
    coin:122    
},
{
    id: 3,
    name : 'Python',
    coin:123  
},
{
    id: 4,
    name : 'JavascriJAVApt',
    coin:132    
},
{
    id: 5,
    name : 'Ruby',
    coin:111    
},
];

function changeValueObject(course,index){
    //ham nay tra ve 1 object co cac gia tri can thay doi
    return [
        {
            id:course.id,
            name: `Khoa hoc ${course.name}`,
            coin: course.coin,
            textCoin: `Gia :${course.coin}`,
            i : index,
        }
        ];
  }

// map
var newCourses = courses.map(changeValueObject);
csl(newCourses)

Phương thức map dùng để render ra cái view

//reduce
function coinHandler(bien luu tru , gia tri hien tai , index hien tai , array goi toi method reduce) {}