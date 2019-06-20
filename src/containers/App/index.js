import App from './App.jsx'
import { connect } from 'react-redux'
// import { bindActionCreators } from "redux"

const mapStateToProps = state => {
    const { screen } = state.screenReducer

    console.log('app state')
    console.log(screen)

    return {
        screen
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({})
// }

export default connect(
    mapStateToProps,
    null
)(App)