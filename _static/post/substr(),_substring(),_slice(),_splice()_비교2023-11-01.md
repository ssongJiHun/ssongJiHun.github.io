---
template : "post"
title : "substr(), substring(), slice(), splice() 비교"
category : ""
tags : ""
created: "2023-11-01"
---

실무 또는 코딩 테스트 연습을 하면서 문자열 또는 배열을 변경하고 추출 해야 하는 경우가 빈번했습니다. 기존까지는 구글링을 통해서 해결하곤 했는데, 사용할 때마다 차이점들이 궁금했습니다. 


이번에 확실하게 정리를 통해 이해하고 사용해봐야겠다는 생각이 들었습니다.


[공식 페이지](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/)에 친절하게 설명되어있어서 참고하여 포스트 하였습니다.


**substr(), substring(), slice(), splice() 4가지의 메서드들을 비교해보자**


## substr(`start[, length]`) : **String.prototype** 


공식 문서의 경고문에는 사용을 권장하지 않는다. 


`start` : 추출하고자 하는 문자들의 시작위치. ( 음수 가능 ) 


`length` :  추출할 문자들의 총 숫자.


```javascript
const str = 'Mozilla'; // length : 7

// indexStart 부터 length 만큼,
// 문자열의 부분 문자열을 반환됩니다.
console.log(str.substr(1, 3)); // Expected output: "ozi" 

// 만약 indexEnd 가 생략된 경우,
// 문자열의 끝까지 모든 문자를 추출합니다.
console.log(str.substr(2)); // Expected output: "zilla"

// length < 0 경우,
// start > length 경우,
// **빈 문자열**을 반환합니다.
console.log(str.substr(1, -1)); // Expected output: "" 
console.log(str.substr(20, 2)); // Expected output: ""

// start 음수인 경우,
// 문자열 끝에서 start 숫자만큼 뺀 곳에서 시작하게 됩니다.
console.log(str.substr(-3, 3)); // Expected output: "lla"
```


## substring(`indexStart[, indexEnd]`) : **String.prototype**


string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다.


`indexStart` : 반환문자열의 시작 인덱스


`indexEnd` : 반환문자열의 마지막 인덱스 (포함하지 않음.)


```javascript
const str = 'Mozilla'; // length : 7

// indexStart 부터 indexEnd 전 까지,
// 문자열의 부분 문자열을 반환됩니다.
console.log(str.substring(1, 3)); // Expected output: "oz" 

// 만약 indexEnd 가 생략된 경우,
// 문자열의 끝까지 모든 문자를 추출합니다.
console.log(str.substring(2)); // Expected output: "zilla"

**// 0 > index 경우,
// 0으로 처리됩니다. NaN 값은 0으로 처리됩니다.**
**console.log(str.substring(-3, 3)); // Expected output: "Moz" (=) substring(0, 3)**

// indexEnd > length 경우, 
// length 로 처리됩니다. (음수 불가능을 뜻합니다.)
console.log(str.substring(0, 10)); // Expected output:  "zilla"

**// 만약 indexStart > indexEnd 경우**, 
**// indexStart 값과 indexEnd 값을 바꾼 듯 작동하게 됩니다.
console.log(str.substring(7, 4));   // Expected output: "lla"**

// 만약 indexStart == indexEnd 경우, 
// **빈 문자열**을 반환합니다.
console.log(str.substring(1, 1));   // Expected output: ""
```


## **slice**(`beginIndex[,` `endIndex]`): **String.prototype**


문자열의 일부를 추출하면서 새로운 문자열을 반환합니다.


`beginIndex` :  추출 시작점에 대한 인덱스 ( 음수 가능 ) 


`endIndex` : `endIndex` 인덱스를 제외하고 추출합니다.  ( 음수 가능 ) 


```javascript
const str = 'Mozilla'; // length : 7

// beginIndex부터 endIndex전 까지,
// 문자열의 부분 문자열을 반환됩니다. 인덱스 위치의 문자는 추출에 포함되지 않습니다.
console.log(str.slice(1, 3)); // Expected output: "oz" 

// 만약 beginIndex >= Length  경우(두개의 매개변수 부호가 동일할 경우), 
// 빈 문자열을 반환합니다.
console.log(str.slice(7, 3)); // Expected output: "" 

// 만약 endIndex >= Length  경우, 
// 문자열 끝까지 반환합니다.
console.log(str.slice(3, 7)); // Expected output: "illa" 

// 만약 endIndex가 생략된다면, 
// 문자열 마지막까지 추출합니다.
console.log(str.slice(1)); // Expected output: "ozilla" 

/**	beginIndex 와 endIndex 부호가 다를 경우 **/

// 만약 beginIndex가 음수라면,
// strLength(문자열 길이) + beginIndex로 취급됩니다. 
// beginIndex는 역방향 인덱스로, endIndex는 정방향 인덱스로 계산합니다.
console.log(str.slice(-5, 5)); // Expected output: "zil"

// 만약 endIndex 음수라면, 
// strLength(문자열 길이) + endIndex 취급됩니다.
// beginIndex는 정방향인덱스로, endIndex는 역방향 인덱스로 계산합니다.
console.log(str.slice(2, -1)); // Expected output: "zill" 

// 만약 beginIndex, endIndex가 음수라면,
// 역방향 인덱스로 취급하고, beginIndex부터 endIndex까지 반환됩니다.
console.log(str.slice(-3, -1)); // Expected output: "ll"
```


## **slice**(`begin[,` `end]`) : **Array.prototype**


어떤 배열의 `begin` 부터 `end` 까지 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다. 


`begin` :  추출 시작점에 대한 인덱스 ( 음수 가능 ) 


`end` :  `end` 인덱스를 제외하고 추출합니다. ( 음수 가능 ) 

- 

```javascript
const arr = ['M', 'o', 'z', 'i', 'l', 'l', 'a']; // length : 7

// begin부터 end 전 까지, 엘리먼트를 추출합니다. 
// 인덱스 위치의 엘리먼트는 추출에 포함되지 않습니다.
console.log(arr.slice(1, 3)); // Expected output: [ 'o', 'z' ]

// 만약 begin >= 배열크기  경우(두개의 매개변수 부호가 동일할 경우), 
// **빈 배열**을 반환합니다.
console.log(arr.slice(7, 3)); // Expected output: []

// 만약 end >= Length  경우, 
// 배열 끝까지 추출됩니다.
console.log(arr.slice(3, 7)); // Expected output: [ 'i', 'l', 'l', 'a' ]

// 만약 end가 생략된다면, 
// 배열 마지막까지 추출합니다.
console.log(arr.slice(1)); // Expected output: [ 'o', 'z', 'i', 'l', 'l', 'a' ]

/**	begin와 end부호가 다를 경우 **/

// 만약 begin가 음수라면,
// Length(배열 크기) + begin로 취급됩니다. 
// begin는 역방향 인덱스로, end는 정방향 인덱스로 계산합니다.
console.log(arr.slice(-5, 5)); // Expected output: [ 'z', 'i', 'l' ]

// 만약 end 음수라면, 
// Length(배열 크기) + end 취급됩니다.
// begin는 정방향인덱스로, end는 역방향 인덱스로 계산합니다.
console.log(arr.slice(2, -1)); // Expected output: [ 'z', 'i', 'l', 'l' ] 

// 만약 begin, end가 음수라면,
// 역방향 인덱스로 취급하고, begin부터 end까지 반환됩니다.
console.log(arr.slice(-3, -1)); // Expected output: [ 'l', 'l' ]
```


## splice(`start[, deleteCount[, item1[, item2[, ...]]]]`) : **Array.prototype**


배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다. (**원본 배열이 변경**됩니다.)


`반환값` : **제거한 요소를 담아서 반환**합니다. 아무 값도 제거하지 않았으면 빈 배열을 반환합니다.


`start`  : 배열의 변경을 시작할 인덱스입니다. 배열의 크기보다 크다면 0으로 설정됩니다. ( 음수 가능 )


`deleteCount` : 제거할 요소의 수입니다. 0 이하라면 어떤 요소도 제거하지 않습니다. 이 때는 최소한 하나의 새로운 요소를 지정해야 합니다.


`item1, item2` : 배열에 추가할 요소 입니다.


```javascript
// 제거하지 않고 요소 추가
const arr1 = ['M', 'o', 'z', 'i', 'l', 'l', 'a']; // length : 7
const remove1 = arr1.splice(2, 0, "a");
console.log(remove) // Expected output: [] > 제거하지 않았으므로 빈배열 반환.
console.log(arr1) // Expected output: ['M', 'o', 'a',  'z', 'i', 'l',  'l', 'a'] > 원본 배열 변경

// 2번 인덱스에서 한 개 요소 제거
const arr2 = ['M', 'o', 'z', 'i', 'l', 'l', 'a']; // length : 7
const remove2 = arr2.splice(2, 1); 
console.log(remove2) // Expected output: ['z'] 
console.log(arr2) // Expected output: ['M', 'o', 'i', 'l',  'l', 'a'] > 원본 배열 변경

// 2번 인덱스에서 두 개 요소 제거하고 두 개 요소 추가
const arr3 = ['M', 'o', 'z', 'i', 'l', 'l', 'a']; // length : 7
const remove3 = arr3.splice(2, 2, "a", "b");
console.log(remove3) // Expected output: ['z', 'i'] > 제거하지 않았으므로 빈배열 반환.
console.log(arr3) // Expected output: ['M', 'o', 'a', 'b', 'l', 'l', 'a'] > 원본 배열 변경
```


## 정방향 인덱스와 역방향 인덱스 시각화 해보기


substr(), slice(), splice() 세가지의 메서드의 매개변수 값이 음수라면 다음과 같이 인덱스에 접근합니다.


![%EA%B7%B8%EB%A6%BC1.png](data:image/png;base64,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)

