import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import 'materialize-css/dist/css/materialize.min.css'; // 이렇게 절대경로로 쓰면 webpack이 알아서 npm 모듈에서 찾는다. 자바스크립트가 아니라 css파일을 임포트 하는것임
import reduxThunk from 'redux-thunk';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.querySelector('#root')
);
