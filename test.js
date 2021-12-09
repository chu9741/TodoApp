const AddButton = document.querySelector('#add-button');
const list = document.querySelector('#list');
const input = document.querySelector("#input");

AddButton.addEventListener('click',()=>{ 
    const text = input.value.trim(); //trim은 양 끝 공백 제거

    if(text !== ''){  // 입력 빈칸 확인
        AddToList(text);
        input.value = ''; // 입력 칸을 빈 칸으로 reset
        input.focus();
    }
});

//let ul = document.querySelector('ul');
/*
function SaveList() {
    localStorage.setItem("todos", JSON.stringify(todos)); // localStorage에 리스트 저장
  }
*/


/*
var list1 = document.querySelector('ul');
list1.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
*/
/*
function DelToList(event) {
    const btn = event.target; // btn에 현재 event를 실행시킨 타켓(버튼)을 대입
    const li = btn.parentNode; // li에 btn의 부모 태그(li)를 대입 
    list.removeChild(li); // toDo6ist태그의 자식에 있는 li(btn.parentNode)를 제거
    // filter를 사용해서 return 결과가 true인 것들만 추출됨
    const cleanToDos = todos.filter(function (toDo) { 
      return toDo.id !== parseInt(li.id);
    });
    todos = cleanToDos; // 추출된 내용을 toDos에 넣음
    SaveList(); // localStorage에 저장
  }

*/
function AddToList(text) {
    
    const item = document.createElement('div');
    const NewListItem = document.createElement('li'); // li의 list_item에 입력
    NewListItem.classList.add('item-checked'); // list_item 클래스를 더해줌
    NewListItem.innerHTML = text; //사용자 입력(text)을 li사이에 넣음
    
    //item.setAttribute("data-key", key);
    const checkbox =NewListItem.appendChild(document.createElement("input"));
    const button = NewListItem.appendChild(document.createElement("button"));
    button.textContent= "delete";
    list.appendChild(item);
    list.prepend(NewListItem); // 리스트에 새로 만든 li를 추가, 위쪽으로 추가
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", (event) => {
      // 체크 박스를 클릭하면 선을 그어줌
      NewListItem.style.textDecoration = event.target.checked ? "line-through" : "";
    });
}

input.addEventListener('keypress',function(e){   //enter누르면 입력
    e.preventDefault();
    const input = document.querySelector('#input');
    const text = input.value.trim();  
    if( e.key === 'Enter' ){
        AddToList(text); 
        input.value ='';  // 초기화
    } 
});

