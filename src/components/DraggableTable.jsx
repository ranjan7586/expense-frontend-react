import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const DraggableTable = (prop) => {    
    const [columns, setColumns] = useState([
        { id: 'name', label: 'Name' },
        { id: 'id', label: 'Id' },
        { id: 'email', label: 'Email' },
    ]);
    const [data, setData] = useState(prop.users);

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const reorderedColumns = Array.from(columns);
        const [removed] = reorderedColumns.splice(result.source.index, 1);
        reorderedColumns.splice(result.destination.index, 0, removed);

        setColumns(reorderedColumns);
    };

    return (
        <div className="table-container">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable" direction="horizontal">
                    {(provided) => (
                        <table className="styled-table" {...provided.droppableProps} ref={provided.innerRef}>
                            <thead>
                                <tr>
                                    {columns.map((column, index) => (
                                        <Draggable key={column.id} draggableId={column.id} index={index}>
                                            {(provided) => (
                                                <th
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="draggable-header"
                                                >
                                                    {column.label}
                                                </th>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {columns.map((column) => (
                                            <td key={column.id}>{row[column.id]}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default DraggableTable;
