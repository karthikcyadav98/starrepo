import React, {useState, useEffect} from 'react';
import {api_url} from '../common/apis';
import axios from 'axios';
import moment from 'moment';
import {Grid, Button} from 'semantic-ui-react';
import Loader from '../common/Loader';

import RepoItem from './RepoItem';

const RepoList = () => {
	const [pageno, setPageno] = useState(1);
	const [repos, setRepos] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		try {
			getData(pageno);
		} catch (e) {
			console.error('Something went wrong! Try again.');
		}
	}, []);

	const getData = async page => {
		await setLoading(true);
		const currDate = new Date();
		let fromDate = new Date(currDate.setMonth(currDate.getMonth() - 1));
		fromDate = moment(fromDate, 'YYYY-MM-DD').format('YYYY-MM-DD');

		await axios
			.get(api_url + 'q=created:>' + fromDate + '&page=' + page)
			.then(async response => {
				setRepos(response.data.items);
				await setLoading(false);
				window.scrollTo(0, 0);
			})
			.catch(error => {
				console.error('Something went wrong! Try again.');
			});
	};

	const handlePage = value => {
		if (value === 'prev') {
			setPageno(pageno - 1);
			getData(pageno - 1);
		}
		if (value === 'next') {
			setPageno(pageno + 1);
			getData(pageno + 1);
		}
	};

	if (isLoading) {
		return (
			<div>
				<Loader />
			</div>
		);
	} else {
		return (
			<Grid style={{marginTop: 1}} container>
				{repos.map((repo, index) => (
					<Grid.Column width={16} key={index}>
						<RepoItem repo={repo} />
					</Grid.Column>
				))}
				<Grid.Column width={16} style={{textAlign: 'center'}}>
					<Button.Group>
						<Button
							disabled={pageno === 1 ? true : false}
							labelPosition="left"
							icon="left chevron"
							content="Previous"
							onClick={() => {
								handlePage('prev');
							}}
						/>
						<Button
							labelPosition="right"
							icon="right chevron"
							content="Next"
							onClick={() => {
								handlePage('next');
							}}
						/>
					</Button.Group>
				</Grid.Column>
			</Grid>
		);
	}
};

export default RepoList;
