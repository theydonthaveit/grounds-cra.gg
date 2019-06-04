import Auth from './Auth.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

const mapStateToProps = state => {
    return {
        isAuthenticated: true
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({})
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)