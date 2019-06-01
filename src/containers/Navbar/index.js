import Navbar from './Navbar.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({})
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar)