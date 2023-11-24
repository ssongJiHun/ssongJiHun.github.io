---
template : "post"
title : "Array.sort 동작방식"
category : ""
tags : ""
created: "2023-11-02"
---

자바스크립트의 `Array 객체`의 `sort` 메서드 기본적으로 오름차순으로 정렬한다.


`Array.prototype.sort()` 는 원본 배열을 변경한다.  또한 정렬 후 배열을 반환한다.


만약 정수로 이뤄진 배열을 정렬하기 위해서는 아래와 같은 코드로 동작한다.


```javascript
// 첫번째 예시
const arr1 = [5, 1, 3, 2, 4];
console.log(arr1.sort()); // expected : [1, 2, 3, 4, 5]

// 두번째 예시
const arr2 = [1, 2, 3, 1000, 4];
console.log(arr2.sort()); // expected : [1, 1000, 2, 3, 4]

// 세번째 예시
const arr3 = [-3, 3, -2, 2, -1, 1];
console.log(arr3.sort()); // expected : [-3, -2, -1, 1, 2, 3]

// 원본 배열 변경
console.log(arr1); // expected : [1, 2, 3, 4, 5]
console.log(arr2); // expected : [1, 1000, 2, 3, 4]
console.log(arr3); // expected : [-3, -2, -1, 1, 2, 3]
```


조금 이상하게 정렬하는 이유는 자바스크립트는 내부적으로 **문자열로 변환**하여 정렬하기에 두 번째와 세 번째처럼 결과 값을 반환한다.


`arr2` `arr3` 배열들을 정수로 비교하여 정렬하고 내림차순으로 정렬을 원한다면 다음과 같이 코드를 작성한다.


```javascript
const arr2 = [1, 2, 3, 1000, 4];
console.log(arr2.sort((a, b) => a - b)); // expected : [1, 2, 3, 4, 1000]

// 세번째 예시 - 정수 비교 정렬(내림차순)
const arr3 = [-3, 3, -2, 2, -1, 1];
console.log(arr3.sort((a, b) => b - a)); // expected : [3, 2, 1, -1, -2, -3]
```


위의 코드 처럼 작성하면 원하는 결과를 얻을 수 있다. 


`sort()` 메서드는 매개변수로 콜백함수(`compareFunction`)가 존재합니다. 생략하면 각 요소의 문자열 변환에 따라 정렬한다. 


`compareFunction(a, b)` 이 매개변수로 제공되면, `compareFunction` 반환 값에 따라 정렬됩니다.

- **반환 값이 0 보다 작은 경우에는 a가 먼저 위치 된다.**
- **반환 값이 0 보다 큰 경우에는 b가 먼저 위치 된다.**
- **반환 값이 동일한 경우에는 유지한다.**

정렬은 여러가지 알고리즘이 존재하기 때문에 상황에 맞춰 선택하여 최적화를 하곤 한다.


자바스크립트가 동작하는 환경은 다양하다. 수 많은 브라우저들이 존재하기 때문에 내부적으로는 어떠한 정렬 알고리즘을 사용하지는 정리할 수 없다.


대표적으로 사용하는 크롬 V8에서는 삽입 정렬(Insertion)과 병렬 정렬(Merge Sort)을 결합하여 만들어서 사용하고 있다고 한다. Tim Peters의 Tim sort 알고리즘을 사용한다. 


최선의 시간 복잡도는 `O(n)` , 평균은 `O(nlogn)` , 최악의 경우에도 `O(nlogn)` 아라고 한다.


자바스크립트 정렬은 최적화가 잘 되어있다.

