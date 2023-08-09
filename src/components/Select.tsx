import React from 'react'

type SelectProps = {
    filter: string; // filter の型を明示的に指定
    setFilter: React.Dispatch<React.SetStateAction<string>>; // setFilter の型を明示的に指定
};

const Select: React.FC<SelectProps> = ({ filter, setFilter }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <p style={{ margin: '0 10px 0 30px ' }}>ステータスが</p>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="all">全て</option>
                <option value="notStarted">未着手</option>
                <option value="inProgress">作業中</option>
                <option value="done">完了</option>
            </select>
            <p style={{ marginLeft: '10px' }}>のTODOを表示する</p>

        </div>
    )
}

export default Select
