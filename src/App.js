import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0])
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className='App'>

      <div className='black-nav'>
        <h4>Second React</h4> 
      </div>

      <button onClick={()=>{
        let new글제목 = [...글제목]
        new글제목 = new글제목.sort()
        글제목변경(new글제목)
      }}>가나다순</button>

      <div>
      {/* <div className='list'>
        <h4 onClick={()=>{
          setModal(!modal)
        }}>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
        <button onClick={()=>{
          let copy = [...글제목]
          copy[0] = '여자 코트 추천'
          글제목변경(copy)
        }}>여자꺼보기</button>
        <p>2월 17일 발행</p>
      </div> 
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div> 
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>  */}
      </div>

      {
        글제목.map(function(a, i){
          return (
            <div className='list' key={i}>
            <h4 onClick={()=>{
              setModal(!modal);
              setTitle(i);
              }}> 
              { 글제목[i] }<span onClick={(e)=>{
                e.stopPropagation(); //이벤트 버블링을 막아줍니다.
              let new따봉 = [...따봉]
              new따봉[i] +=1
              따봉변경(new따봉)
            }}>👍</span> { 따봉[i] } </h4>
            <button onClick={()=>{
              let copy4 = [...글제목];
              copy4.splice(i, 1);
              글제목변경(copy4);
            }}>삭제</button>
            <p>2월 17일 발행</p>
            </div> 
          )
        })
      }

      <input onChange={(e)=>{ 입력값변경(e.target.value) }}/> <span onClick={()=>{
        let copy3 = [...글제목];
        copy3.unshift(입력값)
        글제목변경(copy3)
      }}>글 추가</span>

      { 
      modal == false 
      ? null : 
      <Modal title={title} function = {글제목변경} 글제목={글제목}/>}
    </div>

  );
}


function Modal(props){
  return (
    <div className='modal'>
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p> 
        <button onClick={()=>{
          let copy2 = [...props.글제목]
          copy2[0]='여자코트추천'
          props.function(copy2)
        }}>글수정</button>
      </div>
  )
}



export default App;