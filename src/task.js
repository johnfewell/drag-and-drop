import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  padding: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-bottom: 8px;
  background-color: white;
`;

class Task extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided) => (
            <Container
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                innerRef={provided.innerRef }
            >{this.props.task.name}</Container>
        )}
      </Draggable>
    );
  }
}

export default Task;
