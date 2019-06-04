import App from './App.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

const mapStateToProps = state => {
    return {
        helloWorld: 'hello world',
        dashboard: 'homeScreenForm'
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({})
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)