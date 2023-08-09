import React from 'react'

type EditFormProps = {
    newTitle: string;
    handleEditFormChanges: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleEditTodo: () => void; // 関数の型を指定
    handleCloseEditForm: () => void; // 関数の型を指定
};

const EditForm: React.FC<EditFormProps> = ({ newTitle, handleEditFormChanges, handleEditTodo, handleCloseEditForm }) => {
    return (
        <div>
            <input
                type='text'
                placeholder='新しいタイトル'
                value={newTitle}
                onChange={handleEditFormChanges}
            />
            <button onClick={handleEditTodo}>編集を保存</button>
            <button onClick={handleCloseEditForm}>キャンセル</button>
        </div>
    )
}

export default EditForm
