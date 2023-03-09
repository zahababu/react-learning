import { useState } from "react";
import Backdrop from "./backdrop";
import Modal from "./modal";

function Todo(props){
    const [modalIsOpen,setModalIsOpen]=useState(false)
    
    function deleteHandler(){
      setModalIsOpen(true)
        console.log('lpc!',props.text);}

        function closeModalHandler() {
          setModalIsOpen(false);
        }

        return (
          <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
              <button className='btn' onClick={deleteHandler}>
                Delete
              </button>
            </div>
            {modalIsOpen && (
              <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
            )}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
          </div>
        );
  //   return <div className='card'>
  //   <h2>{props.text}</h2>
  //   <div className='actions'>
  //     <button className='btn' onClick={deleter}>Delete</button>
  //   </div>
  //   {modalIsOpen && <Modal /> }
  //   {modalIsOpen && <Backdrop />}
  // </div>
}

export default Todo