import React from "react";
import { connect } from "react-redux";
import { TodoFiltersContent } from "./TodoFiltersContent";
import { setFilter } from "../../../../../store/todoFilter/actions";

export const TodoFiltersContainer = ({ activeFilter, setFilter }) => {
  return (
    <TodoFiltersContent activeFilter={activeFilter} setFilter={setFilter} />
  );
};

const mapStateToProps = (state) => {
  return {
    activeFilter: state.todoFilter,
  };
};

const mapDispatchToProps = {
  setFilter,
};

export const TodoFilters = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFiltersContainer);
