import React from 'react';
import {Grid, Card} from 'semantic-ui-react';

const RepoItem = ({repo}) => {
	return (
		<Grid stackable style={{textAlign: 'left', borderBottom: '1px solid #E6E6E6'}}>
			<Grid.Column>
				<h1>Repository ID: {repo.id}</h1>
			</Grid.Column>
		</Grid>
	);
};

export default RepoItem;
