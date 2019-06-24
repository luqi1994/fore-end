import history from './history'

function locationTo(action, params) {
    let aim = {pathname: action, search: params};
    history.push(aim);
}

export default locationTo