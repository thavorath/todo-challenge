import React from 'react';


const TaskView = ({
        task
    }) => {

        return (<div >
        <p > {
            task.text
        } < /p> 
		<input type = "checkbox"
        defaultChecked = {
            task.done
        }
        />
</div>
    );
}

export default TaskView;