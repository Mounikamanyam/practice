import React, {Component} from 'react';
import { connect } from 'react-redux';
import { TodoList } from '../presentational/todoList';
import FetchError from '../presentational/fetchError';
import { PropTypes } from 'prop-types';
import { getVisibility, getIsFetching, getErrorMessage } from '../../reducers/todos';
import { toggleTodo } from '../../actions/toggleTodo';
import { fetchTodos } from '../../actions/fetchTodos';


class VisibilityTodoList extends Component {
	componentDidMount() {
		this.fetchData();
	}

	componentDidUpdate(prevProps) {
		if(this.props.filter !== prevProps.filter) {
			this.fetchData();
		}
	}

	fetchData() {
		console.log('triggered fetch data')
		const { filter, fetchTodos } = this.props;
		fetchTodos(filter);
	}

	render() {
		const { toggleTodo, errorMessage, todos, isFetching} = this.props;
		if(isFetching && !todos.length) {
			return <p>Loading...</p>
		}

		if(errorMessage && !todos.length) {
			return (
				<FetchError
					message={errorMessage}
					onRetry={()=>this.fetchData()}
				/>
			)
		}

		return (
			<TodoList 
				todos={todos} 
				onTodoClick={toggleTodo} 
			/>
		)
	}
}

VisibilityTodoList.propTypes = {
	filter : PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
	fetchTodos : PropTypes.func.isRequired,
	toggleTodo : PropTypes.func.isRequired,
	todos : PropTypes.array.isRequired,
	isFetching : PropTypes.bool.isRequired
}

const mapStateToProps = (state, ownProps) => {
	const filter = ownProps.filter || 'all'
	return {
		todos : getVisibility(state, filter),
		isFetching : getIsFetching(state, filter),
		errorMessage : getErrorMessage(state, filter),
		filter
	}
};

VisibilityTodoList = connect(
	mapStateToProps, 
	{ toggleTodo, fetchTodos}
)(VisibilityTodoList);

export {VisibilityTodoList};