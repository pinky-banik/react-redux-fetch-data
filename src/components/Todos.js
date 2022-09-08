import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getALLTodos } from './../services/action/todosAction';

const Todos = () => {
    const {isLoading,todos,error }= useSelector(state=>state);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getALLTodos());
    },[])

    return (
        <div>
            <h2>Todos App</h2>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error.message}</h3>}
            <section>
                {todos && todos.map((todo,index)=>
                    {
                        return <article key={index}>
                            {todo.title}
                              </article>
                    }
                    )}
            </section>
        </div>
    );
};

export default Todos;