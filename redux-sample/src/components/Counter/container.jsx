import { connect } from "react-redux";
import { increment, decrement } from "../../redux/count/actions";

import Counter from "./presentation";

const mapStateProps = ({ count }) => ({ count });
/*
上記と同じ
const mapStateProps = state => {
    return { count: state.count };
}
*/
/*
storeの状態を引数として受け取り必要なものをpropsに流す。
*/

const mapDispatchProps = dispatch => ({
    increment: count => {
        dispatch(increment(count));
    },
    decrement: count => {
        dispatch(decrement(count));
    }
});
/*
引数にdispatchを受け取り、必要なactionだけをdispatchする関数を定義してpropsとして渡す。
*/

export default connect(
    mapStateProps,
    mapDispatchProps
)(Counter);