import React from 'react'
import {PropTypes} from 'react'
import styles from '../styles'

function StepThree (props) {
  console.log(props);
    return(
<div>
      <h1>Drag and Drop: Copy and Move elements with <code>DataTransferItemList</code> interface</h1>
       <div draggable="true" id="src_copy" onDragStart="dragstart_handler(event);" onDragEnd="dragend_handler(event);">
           Select this element and drag to the <strong>Copy Drop Zone</strong>.
       </div>
       <div id="dest_copy" onDrop="drop_handler(event);" onDragOver="dragover_handler(event);"><strong>Copy Drop Zone</strong></div>
       <div draggable="true" id="src_move" onDragStart="dragstart_handler(event);">
           Select this element and drag to the <strong>Move Drop Zone</strong>.
       </div>
       <div id="dest_move" onDrop="drop_handler(event);" onDragOver="dragover_handler(event);"><strong>Move Drop Zone</strong></div>
       </div>
    )
}

StepThree.PropTypes = {

}

export default StepThree
