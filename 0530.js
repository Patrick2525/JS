//1장
const book = {
    topic : 'JavaScript',
    edition: 7
};

//객체 접근
console.log(book.topic);
console.log(book['topic']);
//할당을 통해 프로퍼티 생성
book.author = 'Flanagan';



//?를 통한 조건부 접근(ES2020)
console.log(book.contents?.ch01?.sect1);


// 어서션(assertion)
// =>코드의 결과값 

// 객체와 함꼐 사용하는 함수 = 메서드
// 객체 프로퍼티로 할당된 함수 = 메서드
// 자바스크립트의 객체는 모두 메서드를 갖는다


//2장

//리터럴 - 프로그램 안에 직접 쓴 데이터 값
12
1.2
'hello world'
'hi'
true
false
null

//식별자 - 이름
my_variable_name
v13
i

// 줄바꿈
p22.이어서