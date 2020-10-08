import React from 'react';
import {Grid, Image, Button, Icon} from 'semantic-ui-react';
import moment from 'moment';

const RepoItem = ({repo}) => {
	return (
		<Grid container stackable style={{textAlign: 'left', borderBottom: '1px solid #E6E6E6'}}>
			<Grid.Column width={4}>
				<Image style={{height: '100%', width: '100%'}} src={repo.owner.avatar_url} />
			</Grid.Column>
			<Grid.Column width={12}>
				<p style={{fontSize: 30, fontWeight: 'bold'}}>{repo.name}</p>
				<p style={{fontSize: 25}}>{repo.description}</p>
				<Grid>
					<Grid.Column width={3}>
						<p style={{color: '#0366D6', fontSize: 18, fontWeight: 'bold'}}>
							<Icon name="star" /> {repo.stargazers_count}
						</p>
					</Grid.Column>
					<Grid.Column width={3}>
						<p style={{color: '#0366D6', fontSize: 18, fontWeight: 'bold'}}>
							<Icon name="warning circle" /> {repo.open_issues_count}
						</p>
					</Grid.Column>
					<Grid.Column width={7}>
						<p style={{color: '#0366D6', fontSize: 18, fontWeight: 'bold'}}>
							{moment(repo.created_at).startOf('day').fromNow()}
						</p>
					</Grid.Column>
					<Grid.Column width={3}>
						<Button
							basic
							color="blue"
							content="Read More"
							onClick={() => {
								window.open(repo.html_url, '_blank');
							}}
						/>
					</Grid.Column>
				</Grid>
			</Grid.Column>
		</Grid>
	);
};

export default RepoItem;
