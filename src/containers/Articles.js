import { connect } from 'react-redux'

import {ArticleComponent} from 'components/Home/Article'
import { getArticles } from 'selectors/articles'

import { bindActionCreators } from 'redux'

import * as ArticlesAction from 'actions/requestArticles'

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(ArticlesAction, dispatch),
})
const mapStateToProps = (state) => {
	return {articles: getArticles(state)}
}

const Articles = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ArticleComponent)

export default Articles;