import React, {Fragment} from "react";

const EditTodo = () => {
    return (
        <Fragment>
            {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                Редактировать
            </button>
            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">
                                Редактировать todo
                            </h4>
                            <button type="button" class="close" data-dismiss="modal">
                                &times;
                            </button>
                        </div>
                        <div class="modal-body">
                            <input type="text" class="form-control"/>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
                            <button type="button" class="btn btn-warning" data-dismiss="modal">Сохранить</button>
                        </div>
                    </div>
                </div>
            </div> */}
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
        Open modal
        </button>
        <div class="modal" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Modal Heading</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                Modal body..
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
        </Fragment>
    )
}

export default EditTodo;
