// const $button = document.querySelector('#bt');

// $button.addEventListener('click', () =>{
//     alert('안녕 ㅋ');
// })

const $inputField = document.querySelector('#inputField');
const $addList = document.querySelector('#addList');
const $Lists = document.querySelector('#Lists');

$addList.addEventListener('click', () => {
    const list = document.createElement('li'); //Html li태그 만들기
    if(!$inputField.value){      //내용이 비어있을때 alert
        alert('내용을 입력하세요. ');
    }else{
        const $checkBox = document.createElement('input');     //list옆에 버튼추가
        $checkBox.type = 'checkbox';      //버튼에 Clear라는 문구 표시
        list.innerText = $inputField.value;    //<li>입력 값 </li>
        list.appendChild($checkBox);       //list에 버튼을 자식으로 추가
        $Lists.appendChild(list);              //Lists에 자식으로 붙이기
        $inputField.value = "";                //inputField 초기화
        
        
        $checkBox.addEventListener('click', () =>{      // 만들어진 list에 클릭 이벤트가 발생하면 줄 긋기
            if($checkBox.checked){
                list.style.textDecoration = "line-through";
            }else{
                list.style.textDecoration = "none";                
            }
        })
    }


})

