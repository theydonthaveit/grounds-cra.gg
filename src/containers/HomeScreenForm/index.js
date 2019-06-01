import HomeScreenForm from './HomeScreenForm.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { setHomeScreenForm } from "../../actions/formActions"

const mapStateToProps = state => {
    return {}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setHomeScreenForm
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreenForm)