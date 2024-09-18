import React from 'react';
import ReactDOM from 'react-dom';
import Parent from './Parent';

const node = document.getElementById('root');

const CompositeComponent = () => <Parent />;

ReactDOM.createRoot(node).render(<CompositeComponent />);
