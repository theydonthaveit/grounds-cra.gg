import HomeScreenForm from './HomeScreenForm.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { setScreen } from '../../actions/screenAction'

// const mapStateToProps = (state) => {
//     return {}
// }

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setScreen
    }, dispatch)
}

export default connect(
    null,
    mapDispatchToProps
)(HomeScreenForm)